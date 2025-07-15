import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Delete Scheduled Task',
	value: OperationType.DELETE,
	description: 'Remove a scheduled task permanently',
	action: 'Remove a scheduled task permanently',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'task-123-abc-456',
		description: 'Unique identifier of the task to delete',
		displayOptions: {
			show: {
				resource: [ResourceType.SCHEDULER],
				operation: [OperationType.DELETE],
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
				operation: [OperationType.DELETE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/operator/${ResourceType.SCHEDULER}/${OperationType.DELETE}`,
				body: {
					taskId: '={{$parameter.taskId}}',
				},
			},
		},
	},
];
