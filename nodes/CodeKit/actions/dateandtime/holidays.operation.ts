import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Holidays',
	value: OperationType.HOLIDAYS,
	description: 'Get the holidays of a country',
	action: 'Holidays',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Country',
		name: 'country',
		type: 'string',
		description: 'Country to get holidays for',
		displayOptions: {
			show: {
				operation: [OperationType.HOLIDAYS],
				resource: [ResourceType.DATE_AND_TIME],
			},
		},
		default: 'DE',
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
