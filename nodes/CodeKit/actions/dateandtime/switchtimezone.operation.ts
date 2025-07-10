import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Switch Time Zone',
	value: OperationType.SWITCH_TIME_ZONE,
	description: 'Switch the time zone of a date',
	action: 'Switch time zone',
};

export const description: INodeProperties[] = [
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				operation: [OperationType.SWITCH_TIME_ZONE],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.DATE_AND_TIME}/${OperationType.SWITCH_TIME_ZONE}`,
				body: {},
			},
		},
	},
];
