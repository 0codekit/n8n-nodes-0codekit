import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Schedule Task',
	value: OperationType.ADD,
	description: 'Create a new scheduled task with cron expression',
	action: 'Create a new scheduled task with cron expression',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Task Name',
		name: 'taskName',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'Daily Report Task',
		description: 'Descriptive name for the scheduled task',
		displayOptions: {
			show: {
				resource: [ResourceType.SCHEDULER],
				operation: [OperationType.ADD],
			},
		},
	},
	{
		displayName: 'Cron Schedule',
		name: 'schedule',
		type: 'string',
		required: true,
		default: '',
		placeholder: '0 9 * * *',
		description: 'Cron expression for the schedule (e.g., "0 9 * * *" for daily at 9 AM)',
		displayOptions: {
			show: {
				resource: [ResourceType.SCHEDULER],
				operation: [OperationType.ADD],
			},
		},
	},
	{
		displayName: 'Webhook URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'https://example.com/webhook',
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
		displayName: 'Request Payload',
		name: 'payload',
		type: 'json',
		default: '{}',
		placeholder: '{"message": "Hello World"}',
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
