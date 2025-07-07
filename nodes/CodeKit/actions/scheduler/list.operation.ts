import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { SchedulerOperation } from './operation.types';

export const option = {
	name: 'List Tasks',
	value: SchedulerOperation.LIST,
	description: 'List scheduler tasks',
	action: 'List scheduler tasks',
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
				operation: [SchedulerOperation.LIST],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/operator/scheduler/list',
			},
		},
	},
];
