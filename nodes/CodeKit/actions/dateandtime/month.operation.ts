import type { INodeProperties } from 'n8n-workflow';
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
		displayName: 'Year',
		name: 'year',
		type: 'string',
		description: 'Year in the calendar',
		displayOptions: {
			show: {
				operation: [OperationType.MONTH],
				resource: ['dateandtime'],
			},
		},
		default: '',
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
		default: OperationType.MONTH,
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
				url: '/dateandtime/month',
			},
		},
	},
];
