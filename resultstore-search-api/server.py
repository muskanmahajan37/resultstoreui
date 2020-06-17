from concurrent import futures
from absl import (flags, app)
from resultstoreapi.cloud.devtools.resultstore_v2.proto import (
    resultstore_download_pb2_grpc, )
from resultstoresearchapi import (
    resultstore_download_pb2_grpc as resultstoresearch_download_pb2_grpc,
    resultstore_download_pb2 as resultstoresearch_download_pb2,
)
from credentials import Credentials
from resultstore_proxy_server import ProxyServer
from db_client import Database
import logging
import grpc

FLAGS = flags.FLAGS


def initialize_flags():
    flags.DEFINE_string('port', '[::]:9090', 'Server Port')
    flags.DEFINE_string('destination_server', 'resultstore.googleapis.com',
                        'Destination Server')


def serve(argv):
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    creds = Credentials()
    db = Database(creds.get_db_config())
    with creds.create_secure_channel(FLAGS.destination_server) as channel:
        proxy_server = ProxyServer(channel, db)
        resultstoresearch_download_pb2_grpc.add_ResultStoreDownloadServicer_to_server(
            proxy_server, server)
        server.add_insecure_port(FLAGS.port)
        server.start()
        server.wait_for_termination()


if __name__ == '__main__':
    initialize_flags()
    app.run(serve)
