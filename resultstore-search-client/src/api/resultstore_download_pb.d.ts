import * as jspb from "google-protobuf"

import * as invocation_pb from './invocation_pb';
import * as target_pb from './target_pb';

export class SearchInvocationsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): SearchInvocationsRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchInvocationsRequest;

  getOffset(): number;
  setOffset(value: number): SearchInvocationsRequest;

  getQuery(): string;
  setQuery(value: string): SearchInvocationsRequest;

  getProjectId(): string;
  setProjectId(value: string): SearchInvocationsRequest;

  getExactMatch(): boolean;
  setExactMatch(value: boolean): SearchInvocationsRequest;

  getTool(): string;
  setTool(value: string): SearchInvocationsRequest;

  getPageStartCase(): SearchInvocationsRequest.PageStartCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchInvocationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchInvocationsRequest): SearchInvocationsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchInvocationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchInvocationsRequest;
  static deserializeBinaryFromReader(message: SearchInvocationsRequest, reader: jspb.BinaryReader): SearchInvocationsRequest;
}

export namespace SearchInvocationsRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    offset: number,
    query: string,
    projectId: string,
    exactMatch: boolean,
    tool: string,
  }

  export enum PageStartCase { 
    PAGE_START_NOT_SET = 0,
    PAGE_TOKEN = 2,
    OFFSET = 3,
  }
}

export class SearchInvocationsResponse extends jspb.Message {
  getInvocationsList(): Array<invocation_pb.Invocation>;
  setInvocationsList(value: Array<invocation_pb.Invocation>): SearchInvocationsResponse;
  clearInvocationsList(): SearchInvocationsResponse;
  addInvocations(value?: invocation_pb.Invocation, index?: number): invocation_pb.Invocation;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchInvocationsResponse;

  getToolsListList(): Array<string>;
  setToolsListList(value: Array<string>): SearchInvocationsResponse;
  clearToolsListList(): SearchInvocationsResponse;
  addToolsList(value: string, index?: number): SearchInvocationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchInvocationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchInvocationsResponse): SearchInvocationsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchInvocationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchInvocationsResponse;
  static deserializeBinaryFromReader(message: SearchInvocationsResponse, reader: jspb.BinaryReader): SearchInvocationsResponse;
}

export namespace SearchInvocationsResponse {
  export type AsObject = {
    invocationsList: Array<invocation_pb.Invocation.AsObject>,
    nextPageToken: string,
    toolsListList: Array<string>,
  }
}

export class GetInvocationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetInvocationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvocationRequest): GetInvocationRequest.AsObject;
  static serializeBinaryToWriter(message: GetInvocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvocationRequest;
  static deserializeBinaryFromReader(message: GetInvocationRequest, reader: jspb.BinaryReader): GetInvocationRequest;
}

export namespace GetInvocationRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListTargetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListTargetsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListTargetsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListTargetsRequest;

  getOffset(): number;
  setOffset(value: number): ListTargetsRequest;

  getFilter(): string;
  setFilter(value: string): ListTargetsRequest;

  getPageStartCase(): ListTargetsRequest.PageStartCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTargetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTargetsRequest): ListTargetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTargetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTargetsRequest;
  static deserializeBinaryFromReader(message: ListTargetsRequest, reader: jspb.BinaryReader): ListTargetsRequest;
}

export namespace ListTargetsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    offset: number,
    filter: string,
  }

  export enum PageStartCase { 
    PAGE_START_NOT_SET = 0,
    PAGE_TOKEN = 3,
    OFFSET = 4,
  }
}

export class ListTargetsResponse extends jspb.Message {
  getTargetsList(): Array<target_pb.Target>;
  setTargetsList(value: Array<target_pb.Target>): ListTargetsResponse;
  clearTargetsList(): ListTargetsResponse;
  addTargets(value?: target_pb.Target, index?: number): target_pb.Target;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListTargetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTargetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTargetsResponse): ListTargetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTargetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTargetsResponse;
  static deserializeBinaryFromReader(message: ListTargetsResponse, reader: jspb.BinaryReader): ListTargetsResponse;
}

export namespace ListTargetsResponse {
  export type AsObject = {
    targetsList: Array<target_pb.Target.AsObject>,
    nextPageToken: string,
  }
}

export class GetInitialStateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInitialStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInitialStateRequest): GetInitialStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetInitialStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInitialStateRequest;
  static deserializeBinaryFromReader(message: GetInitialStateRequest, reader: jspb.BinaryReader): GetInitialStateRequest;
}

export namespace GetInitialStateRequest {
  export type AsObject = {
  }
}

export class GetInitialStateResponse extends jspb.Message {
  getToolsListList(): Array<string>;
  setToolsListList(value: Array<string>): GetInitialStateResponse;
  clearToolsListList(): GetInitialStateResponse;
  addToolsList(value: string, index?: number): GetInitialStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInitialStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInitialStateResponse): GetInitialStateResponse.AsObject;
  static serializeBinaryToWriter(message: GetInitialStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInitialStateResponse;
  static deserializeBinaryFromReader(message: GetInitialStateResponse, reader: jspb.BinaryReader): GetInitialStateResponse;
}

export namespace GetInitialStateResponse {
  export type AsObject = {
    toolsListList: Array<string>,
  }
}

