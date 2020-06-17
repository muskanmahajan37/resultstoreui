// source: coverage_summary.proto
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

var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
goog.exportSymbol(
    'proto.resultstoresearch.v1.BranchCoverageSummary',
    null,
    global
);
goog.exportSymbol(
    'proto.resultstoresearch.v1.LanguageCoverageSummary',
    null,
    global
);
goog.exportSymbol(
    'proto.resultstoresearch.v1.LineCoverageSummary',
    null,
    global
);
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
proto.resultstoresearch.v1.LineCoverageSummary = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.resultstoresearch.v1.LineCoverageSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.resultstoresearch.v1.LineCoverageSummary.displayName =
        'proto.resultstoresearch.v1.LineCoverageSummary';
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
proto.resultstoresearch.v1.BranchCoverageSummary = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.resultstoresearch.v1.BranchCoverageSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.resultstoresearch.v1.BranchCoverageSummary.displayName =
        'proto.resultstoresearch.v1.BranchCoverageSummary';
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
proto.resultstoresearch.v1.LanguageCoverageSummary = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.resultstoresearch.v1.LanguageCoverageSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.resultstoresearch.v1.LanguageCoverageSummary.displayName =
        'proto.resultstoresearch.v1.LanguageCoverageSummary';
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
    proto.resultstoresearch.v1.LineCoverageSummary.prototype.toObject = function (
        opt_includeInstance
    ) {
        return proto.resultstoresearch.v1.LineCoverageSummary.toObject(
            opt_includeInstance,
            this
        );
    };

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.resultstoresearch.v1.LineCoverageSummary} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.resultstoresearch.v1.LineCoverageSummary.toObject = function (
        includeInstance,
        msg
    ) {
        var f,
            obj = {
                instrumentedLineCount: jspb.Message.getFieldWithDefault(
                    msg,
                    1,
                    0
                ),
                executedLineCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.resultstoresearch.v1.LineCoverageSummary}
 */
proto.resultstoresearch.v1.LineCoverageSummary.deserializeBinary = function (
    bytes
) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.resultstoresearch.v1.LineCoverageSummary();
    return proto.resultstoresearch.v1.LineCoverageSummary.deserializeBinaryFromReader(
        msg,
        reader
    );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.resultstoresearch.v1.LineCoverageSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.resultstoresearch.v1.LineCoverageSummary}
 */
proto.resultstoresearch.v1.LineCoverageSummary.deserializeBinaryFromReader = function (
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
                var value = /** @type {number} */ (reader.readInt32());
                msg.setInstrumentedLineCount(value);
                break;
            case 2:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setExecutedLineCount(value);
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
proto.resultstoresearch.v1.LineCoverageSummary.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.resultstoresearch.v1.LineCoverageSummary.serializeBinaryToWriter(
        this,
        writer
    );
    return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.resultstoresearch.v1.LineCoverageSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.LineCoverageSummary.serializeBinaryToWriter = function (
    message,
    writer
) {
    var f = undefined;
    f = message.getInstrumentedLineCount();
    if (f !== 0) {
        writer.writeInt32(1, f);
    }
    f = message.getExecutedLineCount();
    if (f !== 0) {
        writer.writeInt32(2, f);
    }
};

/**
 * optional int32 instrumented_line_count = 1;
 * @return {number}
 */
proto.resultstoresearch.v1.LineCoverageSummary.prototype.getInstrumentedLineCount = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.resultstoresearch.v1.LineCoverageSummary} returns this
 */
proto.resultstoresearch.v1.LineCoverageSummary.prototype.setInstrumentedLineCount = function (
    value
) {
    return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional int32 executed_line_count = 2;
 * @return {number}
 */
proto.resultstoresearch.v1.LineCoverageSummary.prototype.getExecutedLineCount = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.resultstoresearch.v1.LineCoverageSummary} returns this
 */
proto.resultstoresearch.v1.LineCoverageSummary.prototype.setExecutedLineCount = function (
    value
) {
    return jspb.Message.setProto3IntField(this, 2, value);
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
    proto.resultstoresearch.v1.BranchCoverageSummary.prototype.toObject = function (
        opt_includeInstance
    ) {
        return proto.resultstoresearch.v1.BranchCoverageSummary.toObject(
            opt_includeInstance,
            this
        );
    };

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.resultstoresearch.v1.BranchCoverageSummary} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.resultstoresearch.v1.BranchCoverageSummary.toObject = function (
        includeInstance,
        msg
    ) {
        var f,
            obj = {
                totalBranchCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
                executedBranchCount: jspb.Message.getFieldWithDefault(
                    msg,
                    2,
                    0
                ),
                takenBranchCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.resultstoresearch.v1.BranchCoverageSummary}
 */
proto.resultstoresearch.v1.BranchCoverageSummary.deserializeBinary = function (
    bytes
) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.resultstoresearch.v1.BranchCoverageSummary();
    return proto.resultstoresearch.v1.BranchCoverageSummary.deserializeBinaryFromReader(
        msg,
        reader
    );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.resultstoresearch.v1.BranchCoverageSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.resultstoresearch.v1.BranchCoverageSummary}
 */
proto.resultstoresearch.v1.BranchCoverageSummary.deserializeBinaryFromReader = function (
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
                var value = /** @type {number} */ (reader.readInt32());
                msg.setTotalBranchCount(value);
                break;
            case 2:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setExecutedBranchCount(value);
                break;
            case 3:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setTakenBranchCount(value);
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
proto.resultstoresearch.v1.BranchCoverageSummary.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.resultstoresearch.v1.BranchCoverageSummary.serializeBinaryToWriter(
        this,
        writer
    );
    return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.resultstoresearch.v1.BranchCoverageSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.BranchCoverageSummary.serializeBinaryToWriter = function (
    message,
    writer
) {
    var f = undefined;
    f = message.getTotalBranchCount();
    if (f !== 0) {
        writer.writeInt32(1, f);
    }
    f = message.getExecutedBranchCount();
    if (f !== 0) {
        writer.writeInt32(2, f);
    }
    f = message.getTakenBranchCount();
    if (f !== 0) {
        writer.writeInt32(3, f);
    }
};

/**
 * optional int32 total_branch_count = 1;
 * @return {number}
 */
proto.resultstoresearch.v1.BranchCoverageSummary.prototype.getTotalBranchCount = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.resultstoresearch.v1.BranchCoverageSummary} returns this
 */
proto.resultstoresearch.v1.BranchCoverageSummary.prototype.setTotalBranchCount = function (
    value
) {
    return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional int32 executed_branch_count = 2;
 * @return {number}
 */
proto.resultstoresearch.v1.BranchCoverageSummary.prototype.getExecutedBranchCount = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.resultstoresearch.v1.BranchCoverageSummary} returns this
 */
proto.resultstoresearch.v1.BranchCoverageSummary.prototype.setExecutedBranchCount = function (
    value
) {
    return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional int32 taken_branch_count = 3;
 * @return {number}
 */
proto.resultstoresearch.v1.BranchCoverageSummary.prototype.getTakenBranchCount = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.resultstoresearch.v1.BranchCoverageSummary} returns this
 */
proto.resultstoresearch.v1.BranchCoverageSummary.prototype.setTakenBranchCount = function (
    value
) {
    return jspb.Message.setProto3IntField(this, 3, value);
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
    proto.resultstoresearch.v1.LanguageCoverageSummary.prototype.toObject = function (
        opt_includeInstance
    ) {
        return proto.resultstoresearch.v1.LanguageCoverageSummary.toObject(
            opt_includeInstance,
            this
        );
    };

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.resultstoresearch.v1.LanguageCoverageSummary} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.resultstoresearch.v1.LanguageCoverageSummary.toObject = function (
        includeInstance,
        msg
    ) {
        var f,
            obj = {
                language: jspb.Message.getFieldWithDefault(msg, 1, 0),
                lineSummary:
                    (f = msg.getLineSummary()) &&
                    proto.resultstoresearch.v1.LineCoverageSummary.toObject(
                        includeInstance,
                        f
                    ),
                branchSummary:
                    (f = msg.getBranchSummary()) &&
                    proto.resultstoresearch.v1.BranchCoverageSummary.toObject(
                        includeInstance,
                        f
                    ),
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
 * @return {!proto.resultstoresearch.v1.LanguageCoverageSummary}
 */
proto.resultstoresearch.v1.LanguageCoverageSummary.deserializeBinary = function (
    bytes
) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.resultstoresearch.v1.LanguageCoverageSummary();
    return proto.resultstoresearch.v1.LanguageCoverageSummary.deserializeBinaryFromReader(
        msg,
        reader
    );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.resultstoresearch.v1.LanguageCoverageSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.resultstoresearch.v1.LanguageCoverageSummary}
 */
proto.resultstoresearch.v1.LanguageCoverageSummary.deserializeBinaryFromReader = function (
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
                var value = /** @type {!proto.resultstoresearch.v1.Language} */ (reader.readEnum());
                msg.setLanguage(value);
                break;
            case 2:
                var value = new proto.resultstoresearch.v1.LineCoverageSummary();
                reader.readMessage(
                    value,
                    proto.resultstoresearch.v1.LineCoverageSummary
                        .deserializeBinaryFromReader
                );
                msg.setLineSummary(value);
                break;
            case 3:
                var value = new proto.resultstoresearch.v1.BranchCoverageSummary();
                reader.readMessage(
                    value,
                    proto.resultstoresearch.v1.BranchCoverageSummary
                        .deserializeBinaryFromReader
                );
                msg.setBranchSummary(value);
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
proto.resultstoresearch.v1.LanguageCoverageSummary.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.resultstoresearch.v1.LanguageCoverageSummary.serializeBinaryToWriter(
        this,
        writer
    );
    return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.resultstoresearch.v1.LanguageCoverageSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.LanguageCoverageSummary.serializeBinaryToWriter = function (
    message,
    writer
) {
    var f = undefined;
    f = message.getLanguage();
    if (f !== 0.0) {
        writer.writeEnum(1, f);
    }
    f = message.getLineSummary();
    if (f != null) {
        writer.writeMessage(
            2,
            f,
            proto.resultstoresearch.v1.LineCoverageSummary
                .serializeBinaryToWriter
        );
    }
    f = message.getBranchSummary();
    if (f != null) {
        writer.writeMessage(
            3,
            f,
            proto.resultstoresearch.v1.BranchCoverageSummary
                .serializeBinaryToWriter
        );
    }
};

/**
 * optional Language language = 1;
 * @return {!proto.resultstoresearch.v1.Language}
 */
proto.resultstoresearch.v1.LanguageCoverageSummary.prototype.getLanguage = function () {
    return /** @type {!proto.resultstoresearch.v1.Language} */ (jspb.Message.getFieldWithDefault(
        this,
        1,
        0
    ));
};

/**
 * @param {!proto.resultstoresearch.v1.Language} value
 * @return {!proto.resultstoresearch.v1.LanguageCoverageSummary} returns this
 */
proto.resultstoresearch.v1.LanguageCoverageSummary.prototype.setLanguage = function (
    value
) {
    return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional LineCoverageSummary line_summary = 2;
 * @return {?proto.resultstoresearch.v1.LineCoverageSummary}
 */
proto.resultstoresearch.v1.LanguageCoverageSummary.prototype.getLineSummary = function () {
    return /** @type{?proto.resultstoresearch.v1.LineCoverageSummary} */ (jspb.Message.getWrapperField(
        this,
        proto.resultstoresearch.v1.LineCoverageSummary,
        2
    ));
};

/**
 * @param {?proto.resultstoresearch.v1.LineCoverageSummary|undefined} value
 * @return {!proto.resultstoresearch.v1.LanguageCoverageSummary} returns this
 */
proto.resultstoresearch.v1.LanguageCoverageSummary.prototype.setLineSummary = function (
    value
) {
    return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.resultstoresearch.v1.LanguageCoverageSummary} returns this
 */
proto.resultstoresearch.v1.LanguageCoverageSummary.prototype.clearLineSummary = function () {
    return this.setLineSummary(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.resultstoresearch.v1.LanguageCoverageSummary.prototype.hasLineSummary = function () {
    return jspb.Message.getField(this, 2) != null;
};

/**
 * optional BranchCoverageSummary branch_summary = 3;
 * @return {?proto.resultstoresearch.v1.BranchCoverageSummary}
 */
proto.resultstoresearch.v1.LanguageCoverageSummary.prototype.getBranchSummary = function () {
    return /** @type{?proto.resultstoresearch.v1.BranchCoverageSummary} */ (jspb.Message.getWrapperField(
        this,
        proto.resultstoresearch.v1.BranchCoverageSummary,
        3
    ));
};

/**
 * @param {?proto.resultstoresearch.v1.BranchCoverageSummary|undefined} value
 * @return {!proto.resultstoresearch.v1.LanguageCoverageSummary} returns this
 */
proto.resultstoresearch.v1.LanguageCoverageSummary.prototype.setBranchSummary = function (
    value
) {
    return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.resultstoresearch.v1.LanguageCoverageSummary} returns this
 */
proto.resultstoresearch.v1.LanguageCoverageSummary.prototype.clearBranchSummary = function () {
    return this.setBranchSummary(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.resultstoresearch.v1.LanguageCoverageSummary.prototype.hasBranchSummary = function () {
    return jspb.Message.getField(this, 3) != null;
};

goog.object.extend(exports, proto.resultstoresearch.v1);
