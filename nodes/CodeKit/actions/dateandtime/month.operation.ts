import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Month',
	value: OperationType.MONTH,
	description: 'Get the month of a date',
	action: 'Month',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		description: 'Date in the calendar',
		displayOptions: {
			show: {
				operation: [OperationType.MONTH],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
	},
	{
		displayName: 'Year',
		name: 'year',
		type: 'string',
		description: 'Year in the calendar',
		displayOptions: {
			show: {
				operation: [OperationType.MONTH],
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
