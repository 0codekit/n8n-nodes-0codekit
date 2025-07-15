import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Get Holidays',
	value: OperationType.HOLIDAYS,
	description: 'Get holidays for a specific country and year',
	action: 'Get Holidays',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Country Code',
		name: 'country',
		type: 'string',
		description: 'Country code to get holidays for',
		displayOptions: {
			show: {
				operation: [OperationType.HOLIDAYS],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: 'DE',
		placeholder: 'e.g. DE, US, FR',
	},
	{
		displayName: 'Year',
		name: 'year',
		type: 'string',
		description: 'Year to get holidays for',
		displayOptions: {
			show: {
				operation: [OperationType.HOLIDAYS],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '2024',
		placeholder: 'e.g. 2024',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				operation: [OperationType.HOLIDAYS],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.DATE_AND_TIME}/${OperationType.HOLIDAYS}`,
				body: {
					country: '={{$parameter.country}}',
					year: '={{$parameter.year}}',
				},
			},
		},
	},
];
