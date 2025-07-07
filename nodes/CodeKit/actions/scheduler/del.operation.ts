import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Delete Task',
	value: OperationType.DELETE,
	description: 'Delete scheduler task',
	action: 'Delete scheduler task',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'string',
		required: true,
		default: '',
		description: 'ID of the task to delete',
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
