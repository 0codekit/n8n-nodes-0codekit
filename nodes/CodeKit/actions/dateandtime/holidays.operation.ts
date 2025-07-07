import type { INodeProperties } from 'n8n-workflow';
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
				resource: ['dateandtime'],
			},
		},
		default: 'DE',
		routing: {
			send: {
				type: 'body',
				property: 'country',
			},
		},
	},
	{
		displayName: 'Year',
		name: 'year',
		type: 'string',
		description: 'Year to get holidays for',
		displayOptions: {
			show: {
				operation: [OperationType.HOLIDAYS],
				resource: ['dateandtime'],
			},
		},
		default: '2024',
		routing: {
			send: {
				type: 'body',
				property: 'year',
			},
		},
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'hidden',
		default: 'undefined',
		default: OperationType.HOLIDAYS,
		routing: {
			send: {
				type: 'body',
				property: 'operation',
			},
			output: {
				postReceive: [
					{
						type: 'rootProperty',
						properties: {
							property: 'body',
						},
					},
				],
			},
			request: {
				method: 'POST',
				url: '/dateandtime/holidays',
			},
		},
	},
];
