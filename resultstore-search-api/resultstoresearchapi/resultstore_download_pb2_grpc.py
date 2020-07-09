# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import resultstoresearchapi.invocation_pb2 as invocation__pb2
import resultstoresearchapi.resultstore_download_pb2 as resultstore__download__pb2


class ResultStoreDownloadStub(object):
    """This is the interface used to download information from the ResultStore
    database.

    Most APIs require setting a response FieldMask via the 'fields' URL query
    parameter or the X-Goog-FieldMask HTTP/gRPC header.
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.SearchInvocations = channel.unary_unary(
                '/resultstoresearch.v1.ResultStoreDownload/SearchInvocations',
                request_serializer=resultstore__download__pb2.SearchInvocationsRequest.SerializeToString,
                response_deserializer=resultstore__download__pb2.SearchInvocationsResponse.FromString,
                )
        self.GetInvocation = channel.unary_unary(
                '/resultstoresearch.v1.ResultStoreDownload/GetInvocation',
                request_serializer=resultstore__download__pb2.GetInvocationRequest.SerializeToString,
                response_deserializer=invocation__pb2.Invocation.FromString,
                )
        self.ListTargets = channel.unary_unary(
                '/resultstoresearch.v1.ResultStoreDownload/ListTargets',
                request_serializer=resultstore__download__pb2.ListTargetsRequest.SerializeToString,
                response_deserializer=resultstore__download__pb2.ListTargetsResponse.FromString,
                )
        self.ListTargetSubFiles = channel.unary_unary(
                '/resultstoresearch.v1.ResultStoreDownload/ListTargetSubFiles',
                request_serializer=resultstore__download__pb2.ListTargetSubFilesRequest.SerializeToString,
                response_deserializer=resultstore__download__pb2.ListTargetSubFilesResponse.FromString,
                )
        self.GetFile = channel.unary_stream(
                '/resultstoresearch.v1.ResultStoreDownload/GetFile',
                request_serializer=resultstore__download__pb2.GetFileRequest.SerializeToString,
                response_deserializer=resultstore__download__pb2.GetFileResponse.FromString,
                )
        self.GetInitialState = channel.unary_unary(
                '/resultstoresearch.v1.ResultStoreDownload/GetInitialState',
                request_serializer=resultstore__download__pb2.GetInitialStateRequest.SerializeToString,
                response_deserializer=resultstore__download__pb2.GetInitialStateResponse.FromString,
                )


class ResultStoreDownloadServicer(object):
    """This is the interface used to download information from the ResultStore
    database.

    Most APIs require setting a response FieldMask via the 'fields' URL query
    parameter or the X-Goog-FieldMask HTTP/gRPC header.
    """

    def SearchInvocations(self, request, context):
        """Searches for invocations matching the given query parameters. Results will
        be ordered by timing.start_time with most recent first, but total ordering
        of results is not guaranteed when difference in timestamps is very small.
        Results may be stale.


        An error will be reported in the following cases:
        - If a query string is not provided
        - If no field mask was given.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetInvocation(self, request, context):
        """Retrieves the invocation with the given name.

        An error will be reported in the following cases:
        - If the invocation is not found.
        - If the given invocation name is badly formatted.
        - If no field mask was given.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListTargets(self, request, context):
        """Retrieves all targets for a parent invocation.  This might be limited by
        user or server, in which case a continuation token is provided.
        The order in which results are returned is undefined, but stable.

        An error will be reported in the following cases:
        - If the parent is not found.
        - If the given parent name is badly formatted.
        - If no field mask was given.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListTargetSubFiles(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetFile(self, request, context):
        """Retrieves the File with the given uri.
        returns a stream of bytes to be stitched together in order.

        An error will be reported in the following cases:
        - If the File is not found.
        - If the given File uri is badly formatted.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetInitialState(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ResultStoreDownloadServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'SearchInvocations': grpc.unary_unary_rpc_method_handler(
                    servicer.SearchInvocations,
                    request_deserializer=resultstore__download__pb2.SearchInvocationsRequest.FromString,
                    response_serializer=resultstore__download__pb2.SearchInvocationsResponse.SerializeToString,
            ),
            'GetInvocation': grpc.unary_unary_rpc_method_handler(
                    servicer.GetInvocation,
                    request_deserializer=resultstore__download__pb2.GetInvocationRequest.FromString,
                    response_serializer=invocation__pb2.Invocation.SerializeToString,
            ),
            'ListTargets': grpc.unary_unary_rpc_method_handler(
                    servicer.ListTargets,
                    request_deserializer=resultstore__download__pb2.ListTargetsRequest.FromString,
                    response_serializer=resultstore__download__pb2.ListTargetsResponse.SerializeToString,
            ),
            'ListTargetSubFiles': grpc.unary_unary_rpc_method_handler(
                    servicer.ListTargetSubFiles,
                    request_deserializer=resultstore__download__pb2.ListTargetSubFilesRequest.FromString,
                    response_serializer=resultstore__download__pb2.ListTargetSubFilesResponse.SerializeToString,
            ),
            'GetFile': grpc.unary_stream_rpc_method_handler(
                    servicer.GetFile,
                    request_deserializer=resultstore__download__pb2.GetFileRequest.FromString,
                    response_serializer=resultstore__download__pb2.GetFileResponse.SerializeToString,
            ),
            'GetInitialState': grpc.unary_unary_rpc_method_handler(
                    servicer.GetInitialState,
                    request_deserializer=resultstore__download__pb2.GetInitialStateRequest.FromString,
                    response_serializer=resultstore__download__pb2.GetInitialStateResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'resultstoresearch.v1.ResultStoreDownload', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ResultStoreDownload(object):
    """This is the interface used to download information from the ResultStore
    database.

    Most APIs require setting a response FieldMask via the 'fields' URL query
    parameter or the X-Goog-FieldMask HTTP/gRPC header.
    """

    @staticmethod
    def SearchInvocations(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/resultstoresearch.v1.ResultStoreDownload/SearchInvocations',
            resultstore__download__pb2.SearchInvocationsRequest.SerializeToString,
            resultstore__download__pb2.SearchInvocationsResponse.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetInvocation(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/resultstoresearch.v1.ResultStoreDownload/GetInvocation',
            resultstore__download__pb2.GetInvocationRequest.SerializeToString,
            invocation__pb2.Invocation.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ListTargets(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/resultstoresearch.v1.ResultStoreDownload/ListTargets',
            resultstore__download__pb2.ListTargetsRequest.SerializeToString,
            resultstore__download__pb2.ListTargetsResponse.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ListTargetSubFiles(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/resultstoresearch.v1.ResultStoreDownload/ListTargetSubFiles',
            resultstore__download__pb2.ListTargetSubFilesRequest.SerializeToString,
            resultstore__download__pb2.ListTargetSubFilesResponse.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetFile(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/resultstoresearch.v1.ResultStoreDownload/GetFile',
            resultstore__download__pb2.GetFileRequest.SerializeToString,
            resultstore__download__pb2.GetFileResponse.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetInitialState(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/resultstoresearch.v1.ResultStoreDownload/GetInitialState',
            resultstore__download__pb2.GetInitialStateRequest.SerializeToString,
            resultstore__download__pb2.GetInitialStateResponse.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)
