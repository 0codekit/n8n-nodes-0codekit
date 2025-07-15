import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Check if Weekend',
	value: OperationType.IS_WEEKEND,
	description: 'Check if a date falls on a weekend',
	action: 'Check if Weekend',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		description: 'Date to check if it falls on a weekend',
		displayOptions: {
			show: {
				operation: [OperationType.IS_WEEKEND],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
		placeholder: 'e.g. 2023-01-01',
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
