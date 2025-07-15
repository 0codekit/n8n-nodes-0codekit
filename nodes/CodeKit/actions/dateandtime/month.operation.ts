import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Get Month',
	value: OperationType.MONTH,
	description: 'Get month information for a date',
	action: 'Get Month',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		description: 'Date to get month information for',
		displayOptions: {
			show: {
				operation: [OperationType.MONTH],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
		placeholder: 'e.g. 2023-01-01',
	},
	{
		displayName: 'Year',
		name: 'year',
		type: 'string',
		description: 'Year to get month information for',
		displayOptions: {
			show: {
				operation: [OperationType.MONTH],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
		placeholder: 'e.g. 2023',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				operation: [OperationType.MONTH],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.DATE_AND_TIME}/${OperationType.MONTH}`,
				body: {
					date: '={{$parameter.date}}',
					year: '={{$parameter.year}}',
				},
			},
		},
	},
];
