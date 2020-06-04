# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: invocation.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import resultstoresearchapi.common_pb2 as common__pb2
import resultstoresearchapi.coverage_pb2 as coverage__pb2
import resultstoresearchapi.coverage_summary_pb2 as coverage__summary__pb2
import resultstoresearchapi.file_pb2 as file__pb2
import resultstoresearchapi.file_processing_error_pb2 as file__processing__error__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='invocation.proto',
  package='resultstoresearch.v1',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=b'\n\x10invocation.proto\x12\x14resultstoresearch.v1\x1a\x0c\x63ommon.proto\x1a\x0e\x63overage.proto\x1a\x16\x63overage_summary.proto\x1a\nfile.proto\x1a\x1b\x66ile_processing_error.proto\"\x9c\x05\n\nInvocation\x12\x0c\n\x04name\x18\x01 \x01(\t\x12/\n\x02id\x18\x02 \x01(\x0b\x32#.resultstoresearch.v1.Invocation.Id\x12\x41\n\x11status_attributes\x18\x03 \x01(\x0b\x32&.resultstoresearch.v1.StatusAttributes\x12,\n\x06timing\x18\x04 \x01(\x0b\x32\x1c.resultstoresearch.v1.Timing\x12I\n\x15invocation_attributes\x18\x05 \x01(\x0b\x32*.resultstoresearch.v1.InvocationAttributes\x12;\n\x0eworkspace_info\x18\x06 \x01(\x0b\x32#.resultstoresearch.v1.WorkspaceInfo\x12\x32\n\nproperties\x18\x07 \x03(\x0b\x32\x1e.resultstoresearch.v1.Property\x12)\n\x05\x66iles\x18\x08 \x03(\x0b\x32\x1a.resultstoresearch.v1.File\x12I\n\x12\x63overage_summaries\x18\t \x03(\x0b\x32-.resultstoresearch.v1.LanguageCoverageSummary\x12\x43\n\x12\x61ggregate_coverage\x18\n \x01(\x0b\x32\'.resultstoresearch.v1.AggregateCoverage\x12J\n\x16\x66ile_processing_errors\x18\x0b \x03(\x0b\x32*.resultstoresearch.v1.FileProcessingErrors\x1a\x1b\n\x02Id\x12\x15\n\rinvocation_id\x18\x01 \x01(\t\"\x12\n\x10WorkspaceContext\"\xcb\x01\n\rWorkspaceInfo\x12\x41\n\x11workspace_context\x18\x01 \x01(\x0b\x32&.resultstoresearch.v1.WorkspaceContext\x12\x10\n\x08hostname\x18\x03 \x01(\t\x12\x19\n\x11working_directory\x18\x04 \x01(\t\x12\x10\n\x08tool_tag\x18\x05 \x01(\t\x12\x38\n\rcommand_lines\x18\x07 \x03(\x0b\x32!.resultstoresearch.v1.CommandLine\"I\n\x0b\x43ommandLine\x12\r\n\x05label\x18\x01 \x01(\t\x12\x0c\n\x04tool\x18\x02 \x01(\t\x12\x0c\n\x04\x61rgs\x18\x03 \x03(\t\x12\x0f\n\x07\x63ommand\x18\x04 \x01(\t\"\xa4\x01\n\x14InvocationAttributes\x12\x12\n\nproject_id\x18\x01 \x01(\t\x12\r\n\x05users\x18\x02 \x03(\t\x12\x0e\n\x06labels\x18\x03 \x03(\t\x12\x13\n\x0b\x64\x65scription\x18\x04 \x01(\t\x12\x44\n\x13invocation_contexts\x18\x06 \x03(\x0b\x32\'.resultstoresearch.v1.InvocationContext\"6\n\x11InvocationContext\x12\x14\n\x0c\x64isplay_name\x18\x01 \x01(\t\x12\x0b\n\x03url\x18\x02 \x01(\tb\x06proto3'
  ,
  dependencies=[common__pb2.DESCRIPTOR,coverage__pb2.DESCRIPTOR,coverage__summary__pb2.DESCRIPTOR,file__pb2.DESCRIPTOR,file__processing__error__pb2.DESCRIPTOR,])




_INVOCATION_ID = _descriptor.Descriptor(
  name='Id',
  full_name='resultstoresearch.v1.Invocation.Id',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='invocation_id', full_name='resultstoresearch.v1.Invocation.Id.invocation_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=779,
  serialized_end=806,
)

_INVOCATION = _descriptor.Descriptor(
  name='Invocation',
  full_name='resultstoresearch.v1.Invocation',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='resultstoresearch.v1.Invocation.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='id', full_name='resultstoresearch.v1.Invocation.id', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='status_attributes', full_name='resultstoresearch.v1.Invocation.status_attributes', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timing', full_name='resultstoresearch.v1.Invocation.timing', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='invocation_attributes', full_name='resultstoresearch.v1.Invocation.invocation_attributes', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='workspace_info', full_name='resultstoresearch.v1.Invocation.workspace_info', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='properties', full_name='resultstoresearch.v1.Invocation.properties', index=6,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='files', full_name='resultstoresearch.v1.Invocation.files', index=7,
      number=8, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='coverage_summaries', full_name='resultstoresearch.v1.Invocation.coverage_summaries', index=8,
      number=9, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='aggregate_coverage', full_name='resultstoresearch.v1.Invocation.aggregate_coverage', index=9,
      number=10, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='file_processing_errors', full_name='resultstoresearch.v1.Invocation.file_processing_errors', index=10,
      number=11, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_INVOCATION_ID, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=138,
  serialized_end=806,
)


_WORKSPACECONTEXT = _descriptor.Descriptor(
  name='WorkspaceContext',
  full_name='resultstoresearch.v1.WorkspaceContext',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=808,
  serialized_end=826,
)


_WORKSPACEINFO = _descriptor.Descriptor(
  name='WorkspaceInfo',
  full_name='resultstoresearch.v1.WorkspaceInfo',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='workspace_context', full_name='resultstoresearch.v1.WorkspaceInfo.workspace_context', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='hostname', full_name='resultstoresearch.v1.WorkspaceInfo.hostname', index=1,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='working_directory', full_name='resultstoresearch.v1.WorkspaceInfo.working_directory', index=2,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tool_tag', full_name='resultstoresearch.v1.WorkspaceInfo.tool_tag', index=3,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='command_lines', full_name='resultstoresearch.v1.WorkspaceInfo.command_lines', index=4,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=829,
  serialized_end=1032,
)


_COMMANDLINE = _descriptor.Descriptor(
  name='CommandLine',
  full_name='resultstoresearch.v1.CommandLine',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='label', full_name='resultstoresearch.v1.CommandLine.label', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tool', full_name='resultstoresearch.v1.CommandLine.tool', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='args', full_name='resultstoresearch.v1.CommandLine.args', index=2,
      number=3, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='command', full_name='resultstoresearch.v1.CommandLine.command', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1034,
  serialized_end=1107,
)


_INVOCATIONATTRIBUTES = _descriptor.Descriptor(
  name='InvocationAttributes',
  full_name='resultstoresearch.v1.InvocationAttributes',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='project_id', full_name='resultstoresearch.v1.InvocationAttributes.project_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='users', full_name='resultstoresearch.v1.InvocationAttributes.users', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='labels', full_name='resultstoresearch.v1.InvocationAttributes.labels', index=2,
      number=3, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='description', full_name='resultstoresearch.v1.InvocationAttributes.description', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='invocation_contexts', full_name='resultstoresearch.v1.InvocationAttributes.invocation_contexts', index=4,
      number=6, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1110,
  serialized_end=1274,
)


_INVOCATIONCONTEXT = _descriptor.Descriptor(
  name='InvocationContext',
  full_name='resultstoresearch.v1.InvocationContext',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='display_name', full_name='resultstoresearch.v1.InvocationContext.display_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='url', full_name='resultstoresearch.v1.InvocationContext.url', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1276,
  serialized_end=1330,
)

_INVOCATION_ID.containing_type = _INVOCATION
_INVOCATION.fields_by_name['id'].message_type = _INVOCATION_ID
_INVOCATION.fields_by_name['status_attributes'].message_type = common__pb2._STATUSATTRIBUTES
_INVOCATION.fields_by_name['timing'].message_type = common__pb2._TIMING
_INVOCATION.fields_by_name['invocation_attributes'].message_type = _INVOCATIONATTRIBUTES
_INVOCATION.fields_by_name['workspace_info'].message_type = _WORKSPACEINFO
_INVOCATION.fields_by_name['properties'].message_type = common__pb2._PROPERTY
_INVOCATION.fields_by_name['files'].message_type = file__pb2._FILE
_INVOCATION.fields_by_name['coverage_summaries'].message_type = coverage__summary__pb2._LANGUAGECOVERAGESUMMARY
_INVOCATION.fields_by_name['aggregate_coverage'].message_type = coverage__pb2._AGGREGATECOVERAGE
_INVOCATION.fields_by_name['file_processing_errors'].message_type = file__processing__error__pb2._FILEPROCESSINGERRORS
_WORKSPACEINFO.fields_by_name['workspace_context'].message_type = _WORKSPACECONTEXT
_WORKSPACEINFO.fields_by_name['command_lines'].message_type = _COMMANDLINE
_INVOCATIONATTRIBUTES.fields_by_name['invocation_contexts'].message_type = _INVOCATIONCONTEXT
DESCRIPTOR.message_types_by_name['Invocation'] = _INVOCATION
DESCRIPTOR.message_types_by_name['WorkspaceContext'] = _WORKSPACECONTEXT
DESCRIPTOR.message_types_by_name['WorkspaceInfo'] = _WORKSPACEINFO
DESCRIPTOR.message_types_by_name['CommandLine'] = _COMMANDLINE
DESCRIPTOR.message_types_by_name['InvocationAttributes'] = _INVOCATIONATTRIBUTES
DESCRIPTOR.message_types_by_name['InvocationContext'] = _INVOCATIONCONTEXT
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Invocation = _reflection.GeneratedProtocolMessageType('Invocation', (_message.Message,), {

  'Id' : _reflection.GeneratedProtocolMessageType('Id', (_message.Message,), {
    'DESCRIPTOR' : _INVOCATION_ID,
    '__module__' : 'invocation_pb2'
    # @@protoc_insertion_point(class_scope:resultstoresearch.v1.Invocation.Id)
    })
  ,
  'DESCRIPTOR' : _INVOCATION,
  '__module__' : 'invocation_pb2'
  # @@protoc_insertion_point(class_scope:resultstoresearch.v1.Invocation)
  })
_sym_db.RegisterMessage(Invocation)
_sym_db.RegisterMessage(Invocation.Id)

WorkspaceContext = _reflection.GeneratedProtocolMessageType('WorkspaceContext', (_message.Message,), {
  'DESCRIPTOR' : _WORKSPACECONTEXT,
  '__module__' : 'invocation_pb2'
  # @@protoc_insertion_point(class_scope:resultstoresearch.v1.WorkspaceContext)
  })
_sym_db.RegisterMessage(WorkspaceContext)

WorkspaceInfo = _reflection.GeneratedProtocolMessageType('WorkspaceInfo', (_message.Message,), {
  'DESCRIPTOR' : _WORKSPACEINFO,
  '__module__' : 'invocation_pb2'
  # @@protoc_insertion_point(class_scope:resultstoresearch.v1.WorkspaceInfo)
  })
_sym_db.RegisterMessage(WorkspaceInfo)

CommandLine = _reflection.GeneratedProtocolMessageType('CommandLine', (_message.Message,), {
  'DESCRIPTOR' : _COMMANDLINE,
  '__module__' : 'invocation_pb2'
  # @@protoc_insertion_point(class_scope:resultstoresearch.v1.CommandLine)
  })
_sym_db.RegisterMessage(CommandLine)

InvocationAttributes = _reflection.GeneratedProtocolMessageType('InvocationAttributes', (_message.Message,), {
  'DESCRIPTOR' : _INVOCATIONATTRIBUTES,
  '__module__' : 'invocation_pb2'
  # @@protoc_insertion_point(class_scope:resultstoresearch.v1.InvocationAttributes)
  })
_sym_db.RegisterMessage(InvocationAttributes)

InvocationContext = _reflection.GeneratedProtocolMessageType('InvocationContext', (_message.Message,), {
  'DESCRIPTOR' : _INVOCATIONCONTEXT,
  '__module__' : 'invocation_pb2'
  # @@protoc_insertion_point(class_scope:resultstoresearch.v1.InvocationContext)
  })
_sym_db.RegisterMessage(InvocationContext)


# @@protoc_insertion_point(module_scope)