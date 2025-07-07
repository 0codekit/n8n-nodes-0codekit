import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { SchedulerOperation } from './operation.types';

export const option = {
	name: 'Delete Task',
	value: SchedulerOperation.DELETE,
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
				operation: [SchedulerOperation.DELETE],
			},
		}',
				},
			},
		},
	},	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.SCHEDULER],
				operation: [SchedulerOperation.DELETE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: /ResourceType.SCHEDULER/SchedulerOperation.DELETE,
				body: {
					
				},
			},
		},
	},
];