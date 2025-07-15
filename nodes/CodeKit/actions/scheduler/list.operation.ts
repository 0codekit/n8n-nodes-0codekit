import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'List Scheduled Tasks',
	value: OperationType.LIST,
	description: 'Retrieve all scheduled tasks',
	action: 'Retrieve all scheduled tasks',
};

export const description: INodeProperties[] = [
	{
		displayName: 'List Tasks',
		name: 'listTasks',
		type: 'hidden',
		required: true,
		default: true,
		description: 'List all scheduled tasks',
		displayOptions: {
			show: {
				resource: [ResourceType.SCHEDULER],
				operation: [OperationType.LIST],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: `/operator/${ResourceType.SCHEDULER}/${OperationType.LIST}`,
			},
		},
	},
];
