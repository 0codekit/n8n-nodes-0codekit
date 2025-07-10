import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Is Weekend',
	value: OperationType.IS_WEEKEND,
	description: 'Check if a date is a weekend',
	action: 'Is weekend',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		description: 'Date to check if it is a weekend',
		displayOptions: {
			show: {
				operation: [OperationType.IS_WEEKEND],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				operation: [OperationType.IS_WEEKEND],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.DATE_AND_TIME}/${OperationType.IS_WEEKEND}`,
				body: {
					date: '={{$parameter.date}}',
				},
			},
		},
	},
];
