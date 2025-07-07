import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Add Task',
	value: OperationType.ADD,
	description: 'Add scheduler task',
	action: 'Add scheduler task',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Task Name',
		name: 'taskName',
		type: 'string',
		required: true,
		default: '',
		description: 'Name of the scheduled task',
		displayOptions: {
			show: {
				resource: [ResourceType.SCHEDULER],
				operation: [OperationType.ADD],
			},
		},
	},
	{
		displayName: 'Schedule',
		name: 'schedule',
		type: 'string',
		required: true,
		default: '',
		description: 'Cron expression for the schedule',
		displayOptions: {
			show: {
				resource: [ResourceType.SCHEDULER],
				operation: [OperationType.ADD],
			},
		},
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		description: 'URL to call when the task executes',
		displayOptions: {
			show: {
				resource: [ResourceType.SCHEDULER],
				operation: [OperationType.ADD],
			},
		},
	},
	{
		displayName: 'HTTP Method',
		name: 'method',
		type: 'options',
		options: [
			{
				name: 'GET',
				value: 'GET',
			},
			{
				name: 'POST',
				value: 'POST',
			},
			{
				name: 'PUT',
				value: 'PUT',
			},
			{
				name: 'DELETE',
				value: 'DELETE',
			},
		],
		default: 'POST',
		description: 'HTTP method to use for the request',
		displayOptions: {
			show: {
				resource: [ResourceType.SCHEDULER],
				operation: [OperationType.ADD],
			},
		},
	},
	{
		displayName: 'Payload',
		name: 'payload',
		type: 'json',
		default: '{}',
		description: 'JSON payload to send with the request',
		displayOptions: {
			show: {
				resource: [ResourceType.SCHEDULER],
				operation: [OperationType.ADD],
			},
		},
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.SCHEDULER],
				operation: [OperationType.ADD],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/operator/${ResourceType.SCHEDULER}/${OperationType.ADD}`,
				body: {
					taskName: '={{$parameter.taskName}}',
					schedule: '={{$parameter.schedule}}',
					url: '={{$parameter.url}}',
					method: '={{$parameter.method}}',
					payload: '={{$parameter.payload}}',
				},
			},
		},
	},
];
