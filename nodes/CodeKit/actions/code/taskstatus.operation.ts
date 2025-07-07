import type { INodeProperties } from 'n8n-workflow';
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
				resource: ['code'],
			},
		},
		default: '',
		description: 'The ID of the task to check status',
		routing: {
			send: {
				type: 'body',
				property: 'taskId',
			},
		},
	},
];
