from resultstoresearchapi import (
    resultstore_download_pb2_grpc as resultstoresearch_download_pb2_grpc,
    resultstore_download_pb2 as resultstoresearch_download_pb2, invocation_pb2
    as resultstoresearch_invocation_pb2, timestamp_pb2 as
    resultstoresearch_timestamp_pb2, duration_pb2 as
    resultstoresearch_duration_pb2, common_pb2 as resultstoresearch_common_pb2)


def configure_grpc_error(context, rpc_error):
    """
    Sets proper error details and code on context

    Args:
        context (grpc.Context)
        rpc_error (grpc.RpcError)
    """
    context.set_details(rpc_error.details())
    context.set_code(rpc_error.code())


def has_tool_tag(invocation):
    """
    Checks if invocation has a tool_tag in workspace info

    Args:
        invocation (Invocation)
    
    Returns:
        True if tool_tag exists else false
    """
    if (hasattr(invocation, 'workspace_info')
            and hasattr(invocation.workspace_info, 'tool_tag')):
        return True
    return False


def filter_tool(invocations, tool):
    """
    Filters out invocations that do not have a matching tool tag
    from the SearchInvocations request. If no tool is specified
    returns the original invocation list

    Args:
        invocation (Invocation)
        tool (str): tool_tag to filter on
    
    Returns:
        A list of Invocations after filtering
    """
    filtered_invocations = []
    if not tool:
        for invocation in invocations:
            filtered_invocations.append(convert_invocation(invocation))
        return filtered_invocations

    for invocation in invocations:
        if (has_tool_tag(invocation)
                and invocation.workspace_info.tool_tag == tool):
            filtered_invocations.append(convert_invocation(invocation))
    return filtered_invocations


def update_tools_list(invocations, tools_list):
    """
    Updates tool tag list of seen tool_tags based on current
    invocations list queried by SearchInvocations

    Args:
        invocations (Seq[Invocation]): Current list of invocations
        tools_list (Seq[str]): tools list to be updated

    Returns:
        Updated tools list
    """
    for invocation in invocations:
        if (has_tool_tag(invocation)
                and invocation.workspace_info.tool_tag not in tools_list):
            tools_list.add(invocation.workspace_info.tool_tag)
    return tools_list


"""
Helper functions to convert resultstore objects into resultstoresearch objects
"""


def convert_invocation(invocation):
    invocation_attributes = convert_invocation_attributes(
        invocation.invocation_attributes) if hasattr(
            invocation, 'invocation_attributes') else None
    timing = convert_timing(invocation.timing) if hasattr(
        invocation, 'timing') else None
    workspace_info = convert_workspace_info(
        invocation.workspace_info) if hasattr(invocation,
                                              'workspace_info') else None
    status_attributes = convert_status_attributes(
        invocation.status_attributes) if hasattr(invocation,
                                                 'status_attributes') else None
    return resultstoresearch_invocation_pb2.Invocation(
        name=invocation.name,
        status_attributes=status_attributes,
        timing=timing,
        invocation_attributes=invocation_attributes,
        workspace_info=workspace_info)


def convert_invocation_attributes(invocation_attributes):
    project_id = invocation_attributes.project_id if hasattr(
        invocation_attributes, 'project_id') else ''
    users = invocation_attributes.users if hasattr(invocation_attributes,
                                                   'users') else []
    labels = invocation_attributes.labels if hasattr(invocation_attributes,
                                                     'labels') else []
    description = invocation_attributes.description if hasattr(
        invocation_attributes, 'description') else ''
    return resultstoresearch_invocation_pb2.InvocationAttributes(
        project_id=project_id,
        users=users,
        labels=labels,
        description=description)


def convert_timing(timing):
    start_time = convert_timestamp(timing.start_time) if hasattr(
        timing, 'start_time') else None
    duration = convert_duration(timing.duration) if hasattr(
        timing, 'duration') else None
    return resultstoresearch_common_pb2.Timing(start_time=start_time,
                                               duration=duration)


def convert_timestamp(timestamp):
    seconds = timestamp.seconds if hasattr(timestamp, 'seconds') else None
    nanos = timestamp.nanos if hasattr(timestamp, 'nanos') else None
    return resultstoresearch_timestamp_pb2.Timestamp(seconds=seconds,
                                                     nanos=nanos)


def convert_duration(duration):
    seconds = duration.seconds if hasattr(duration, 'seconds') else None
    nanos = duration.nanos if hasattr(duration, 'nanos') else None
    return resultstoresearch_duration_pb2.Duration(seconds=seconds,
                                                   nanos=nanos)


def convert_workspace_info(workspace_info):
    hostname = workspace_info.hostname if hasattr(workspace_info,
                                                  'hostname') else ''
    working_directory = workspace_info.working_directory if hasattr(
        workspace_info, 'working_directory') else ''
    tool_tag = workspace_info.tool_tag if hasattr(workspace_info,
                                                  'tool_tag') else ''
    command_lines = convert_command_lines(
        workspace_info.command_lines) if hasattr(workspace_info,
                                                 'command_lines') else []
    return resultstoresearch_invocation_pb2.WorkspaceInfo(
        hostname=hostname,
        working_directory=working_directory,
        tool_tag=tool_tag,
        command_lines=command_lines)


def convert_command_lines(command_lines):
    converted_command_lines = []
    for command_line in command_lines:
        label = command_line.label if hasattr(command_line, 'label') else ''
        tool = command_line.tool if hasattr(command_line, 'tool') else ''
        args = command_line.args if hasattr(command_line, 'args') else []
        command = command_line.command if hasattr(command_line,
                                                  'command') else ''
        converted_command_lines.append(
            resultstoresearch_invocation_pb2.CommandLine(label=label,
                                                         tool=tool,
                                                         args=args,
                                                         command=command))
    return converted_command_lines


def convert_status_attributes(status_attributes):
    status = status_attributes.status if hasattr(status_attributes,
                                                 'status') else None
    description = status_attributes.description if hasattr(
        status_attributes, 'description') else ''
    return resultstoresearch_common_pb2.StatusAttributes(
        status=status, description=description)
