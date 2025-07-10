import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Task Status',
	value: OperationType.TASK_STATUS,
	description: 'Check task status',
	action: 'Check task status',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.TASK_STATUS],
				resource: [ResourceType.CODE],
			},
		},
		default: '',
		description: 'The ID of the task to check status',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CODE],
				operation: [OperationType.TASK_STATUS],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CODE}/${OperationType.TASK_STATUS}`,
				body: {
					taskId: '={{$parameter.taskId}}',
				},
			},
		},
	},
];
