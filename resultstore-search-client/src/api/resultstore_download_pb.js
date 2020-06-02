// source: resultstore_download.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* tslint:disable */
/* eslint-disable */

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var invocation_pb = require('./invocation_pb.js');
goog.object.extend(proto, invocation_pb);
goog.exportSymbol('proto.resultstoresearch.v1.GetInvocationRequest', null, global);
goog.exportSymbol('proto.resultstoresearch.v1.SearchInvocationsRequest', null, global);
goog.exportSymbol('proto.resultstoresearch.v1.SearchInvocationsRequest.PageStartCase', null, global);
goog.exportSymbol('proto.resultstoresearch.v1.SearchInvocationsResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.resultstoresearch.v1.SearchInvocationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.resultstoresearch.v1.SearchInvocationsRequest.oneofGroups_);
};
goog.inherits(proto.resultstoresearch.v1.SearchInvocationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.resultstoresearch.v1.SearchInvocationsRequest.displayName = 'proto.resultstoresearch.v1.SearchInvocationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.resultstoresearch.v1.GetInvocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.resultstoresearch.v1.GetInvocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.resultstoresearch.v1.GetInvocationRequest.displayName = 'proto.resultstoresearch.v1.GetInvocationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.resultstoresearch.v1.SearchInvocationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.resultstoresearch.v1.SearchInvocationsResponse.repeatedFields_, null);
};
goog.inherits(proto.resultstoresearch.v1.SearchInvocationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.resultstoresearch.v1.SearchInvocationsResponse.displayName = 'proto.resultstoresearch.v1.SearchInvocationsResponse';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.PageStartCase = {
  PAGE_START_NOT_SET: 0,
  PAGE_TOKEN: 2,
  OFFSET: 3
};

/**
 * @return {proto.resultstoresearch.v1.SearchInvocationsRequest.PageStartCase}
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.getPageStartCase = function() {
  return /** @type {proto.resultstoresearch.v1.SearchInvocationsRequest.PageStartCase} */(jspb.Message.computeOneofCase(this, proto.resultstoresearch.v1.SearchInvocationsRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.resultstoresearch.v1.SearchInvocationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.resultstoresearch.v1.SearchInvocationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0),
    query: jspb.Message.getFieldWithDefault(msg, 4, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    exactMatch: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.resultstoresearch.v1.SearchInvocationsRequest}
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.resultstoresearch.v1.SearchInvocationsRequest;
  return proto.resultstoresearch.v1.SearchInvocationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.resultstoresearch.v1.SearchInvocationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.resultstoresearch.v1.SearchInvocationsRequest}
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExactMatch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.resultstoresearch.v1.SearchInvocationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.resultstoresearch.v1.SearchInvocationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getExactMatch();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.resultstoresearch.v1.SearchInvocationsRequest} returns this
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.resultstoresearch.v1.SearchInvocationsRequest} returns this
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.resultstoresearch.v1.SearchInvocationsRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.resultstoresearch.v1.SearchInvocationsRequest} returns this
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.clearPageToken = function() {
  return jspb.Message.setOneofField(this, 2, proto.resultstoresearch.v1.SearchInvocationsRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.hasPageToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 offset = 3;
 * @return {number}
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.resultstoresearch.v1.SearchInvocationsRequest} returns this
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.setOffset = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.resultstoresearch.v1.SearchInvocationsRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.resultstoresearch.v1.SearchInvocationsRequest} returns this
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.clearOffset = function() {
  return jspb.Message.setOneofField(this, 3, proto.resultstoresearch.v1.SearchInvocationsRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.hasOffset = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string query = 4;
 * @return {string}
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.resultstoresearch.v1.SearchInvocationsRequest} returns this
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string project_id = 5;
 * @return {string}
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.resultstoresearch.v1.SearchInvocationsRequest} returns this
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool exact_match = 7;
 * @return {boolean}
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.getExactMatch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.resultstoresearch.v1.SearchInvocationsRequest} returns this
 */
proto.resultstoresearch.v1.SearchInvocationsRequest.prototype.setExactMatch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.resultstoresearch.v1.GetInvocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.resultstoresearch.v1.GetInvocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.resultstoresearch.v1.GetInvocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.GetInvocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.resultstoresearch.v1.GetInvocationRequest}
 */
proto.resultstoresearch.v1.GetInvocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.resultstoresearch.v1.GetInvocationRequest;
  return proto.resultstoresearch.v1.GetInvocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.resultstoresearch.v1.GetInvocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.resultstoresearch.v1.GetInvocationRequest}
 */
proto.resultstoresearch.v1.GetInvocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.resultstoresearch.v1.GetInvocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.resultstoresearch.v1.GetInvocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.resultstoresearch.v1.GetInvocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.GetInvocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.resultstoresearch.v1.GetInvocationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.resultstoresearch.v1.GetInvocationRequest} returns this
 */
proto.resultstoresearch.v1.GetInvocationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.resultstoresearch.v1.SearchInvocationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.resultstoresearch.v1.SearchInvocationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.resultstoresearch.v1.SearchInvocationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.resultstoresearch.v1.SearchInvocationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.SearchInvocationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invocationsList: jspb.Message.toObjectList(msg.getInvocationsList(),
    invocation_pb.Invocation.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.resultstoresearch.v1.SearchInvocationsResponse}
 */
proto.resultstoresearch.v1.SearchInvocationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.resultstoresearch.v1.SearchInvocationsResponse;
  return proto.resultstoresearch.v1.SearchInvocationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.resultstoresearch.v1.SearchInvocationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.resultstoresearch.v1.SearchInvocationsResponse}
 */
proto.resultstoresearch.v1.SearchInvocationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new invocation_pb.Invocation;
      reader.readMessage(value,invocation_pb.Invocation.deserializeBinaryFromReader);
      msg.addInvocations(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.resultstoresearch.v1.SearchInvocationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.resultstoresearch.v1.SearchInvocationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.resultstoresearch.v1.SearchInvocationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.SearchInvocationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      invocation_pb.Invocation.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Invocation invocations = 1;
 * @return {!Array<!proto.resultstoresearch.v1.Invocation>}
 */
proto.resultstoresearch.v1.SearchInvocationsResponse.prototype.getInvocationsList = function() {
  return /** @type{!Array<!proto.resultstoresearch.v1.Invocation>} */ (
    jspb.Message.getRepeatedWrapperField(this, invocation_pb.Invocation, 1));
};


/**
 * @param {!Array<!proto.resultstoresearch.v1.Invocation>} value
 * @return {!proto.resultstoresearch.v1.SearchInvocationsResponse} returns this
*/
proto.resultstoresearch.v1.SearchInvocationsResponse.prototype.setInvocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.resultstoresearch.v1.Invocation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.resultstoresearch.v1.Invocation}
 */
proto.resultstoresearch.v1.SearchInvocationsResponse.prototype.addInvocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.resultstoresearch.v1.Invocation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.resultstoresearch.v1.SearchInvocationsResponse} returns this
 */
proto.resultstoresearch.v1.SearchInvocationsResponse.prototype.clearInvocationsList = function() {
  return this.setInvocationsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.resultstoresearch.v1.SearchInvocationsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.resultstoresearch.v1.SearchInvocationsResponse} returns this
 */
proto.resultstoresearch.v1.SearchInvocationsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.resultstoresearch.v1);
