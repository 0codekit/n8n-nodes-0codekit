import type { INodeProperties } from 'n8n-workflow';
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
				resource: ['dateandtime'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'date',
			},
		},
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'hidden',
		default: 'undefined',
		default: OperationType.IS_WEEKEND,
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
				url: '/dateandtime/isweekend',
			},
		},
	},
];
