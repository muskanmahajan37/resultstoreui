import * as grpcWeb from 'grpc-web';
import { ResultStoreDownloadClient } from '../Resultstore_downloadServiceClientPb';
import {
    SearchInvocationsRequest,
    SearchInvocationsResponse,
    GetInitialStateRequest,
    GetInitialStateResponse,
} from '../resultstore_download_pb';
import * as invocation_pb from '../invocation_pb';
import config from '../../config/ConfigLoader';

export type SetInvocations = (
    invocations: Array<invocation_pb.Invocation>
) => void;
export type SetToolsList = (toolsList: Array<string>) => void;
export type SearchInvocationCallback = (
    err: grpcWeb.Error,
    response: SearchInvocationsResponse
) => void;

const resultStore = new ResultStoreDownloadClient(
    config.destinationAddress,
    null,
    null
);
const defaultPageSize = 30;
const searchFieldMask =
    'next_page_token,invocations.name,invocations.invocation_attributes,invocations.timing,invocations.workspace_info,invocations.status_attributes';

/*
Search for invocations by query

Args:
    query: The query to search for invocations
    setInvocations: Function called on the returned array of Invocations
    updateError: Function called if the api returned an error message
*/
const searchInvocations = (
    query: string,
    newQuery: boolean,
    tool: string,
    pageToken: string,
    callback: SearchInvocationCallback
) => {
    const request = new SearchInvocationsRequest();
    request.setPageSize(defaultPageSize);
    request.setQuery(query);
    request.setProjectId(config.projectId);
    request.setTool(tool);

    if (!newQuery) {
        request.setPageToken(pageToken);
    }

    const metadata = {
        'x-goog-fieldmask': searchFieldMask,
    };
    resultStore.searchInvocations(request, metadata, callback);
};

const getInitialState = (setToolsList) => {
    const request = new GetInitialStateRequest();
    const metadata = {};
    resultStore.getInitialState(
        request,
        metadata,
        (err: grpcWeb.Error, response: GetInitialStateResponse) => {
            if (!err) {
                setToolsList(response.getToolsListList());
            }
        }
    );
};

export { searchInvocations, getInitialState };
