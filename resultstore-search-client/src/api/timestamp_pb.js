// source: timestamp.proto
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

goog.exportSymbol('proto.resultstoresearch.v1.Timestamp', null, global);
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
proto.resultstoresearch.v1.Timestamp = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.resultstoresearch.v1.Timestamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.resultstoresearch.v1.Timestamp.displayName =
        'proto.resultstoresearch.v1.Timestamp';
}

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
    proto.resultstoresearch.v1.Timestamp.prototype.toObject = function (
        opt_includeInstance
    ) {
        return proto.resultstoresearch.v1.Timestamp.toObject(
            opt_includeInstance,
            this
        );
    };

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.resultstoresearch.v1.Timestamp} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.resultstoresearch.v1.Timestamp.toObject = function (
        includeInstance,
        msg
    ) {
        var f,
            obj = {
                seconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
                nanos: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.resultstoresearch.v1.Timestamp}
 */
proto.resultstoresearch.v1.Timestamp.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.resultstoresearch.v1.Timestamp();
    return proto.resultstoresearch.v1.Timestamp.deserializeBinaryFromReader(
        msg,
        reader
    );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.resultstoresearch.v1.Timestamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.resultstoresearch.v1.Timestamp}
 */
proto.resultstoresearch.v1.Timestamp.deserializeBinaryFromReader = function (
    msg,
    reader
) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {number} */ (reader.readInt64());
                msg.setSeconds(value);
                break;
            case 2:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setNanos(value);
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
proto.resultstoresearch.v1.Timestamp.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.resultstoresearch.v1.Timestamp.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.resultstoresearch.v1.Timestamp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.Timestamp.serializeBinaryToWriter = function (
    message,
    writer
) {
    var f = undefined;
    f = message.getSeconds();
    if (f !== 0) {
        writer.writeInt64(1, f);
    }
    f = message.getNanos();
    if (f !== 0) {
        writer.writeInt32(2, f);
    }
};

/**
 * optional int64 seconds = 1;
 * @return {number}
 */
proto.resultstoresearch.v1.Timestamp.prototype.getSeconds = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.resultstoresearch.v1.Timestamp} returns this
 */
proto.resultstoresearch.v1.Timestamp.prototype.setSeconds = function (value) {
    return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional int32 nanos = 2;
 * @return {number}
 */
proto.resultstoresearch.v1.Timestamp.prototype.getNanos = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.resultstoresearch.v1.Timestamp} returns this
 */
proto.resultstoresearch.v1.Timestamp.prototype.setNanos = function (value) {
    return jspb.Message.setProto3IntField(this, 2, value);
};

goog.object.extend(exports, proto.resultstoresearch.v1);
