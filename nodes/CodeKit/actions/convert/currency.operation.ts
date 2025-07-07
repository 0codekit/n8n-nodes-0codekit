import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Convert Currency',
	value: OperationType.CURRENCY,
	description: 'Converts a currency into another on specific dates',
	action: 'Convert currencys',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.CURRENCY],
			},
		},
		default: 0,
		description: 'Amount to convert',
	},
	{
		displayName: 'From',
		name: 'from',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.CURRENCY],
			},
		},
		default: '',
		description: 'Source currency (ISO code)',
		placeholder: 'USD',
	},
	{
		displayName: 'To',
		name: 'to',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.CURRENCY],
			},
		},
		default: '',
		description: 'Target currency (ISO code)',
		placeholder: 'EUR',
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.CURRENCY],
			},
		},
		default: '',
		description: 'Date for conversion rate (YYYY-MM-DD)',
		placeholder: '2023-01-01',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.CURRENCY],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CONVERT}/${OperationType.CURRENCY}`,
				body: {
					amount: '={{$parameter.amount}}',
					from: '={{$parameter.from}}',
					to: '={{$parameter.to}}',
					date: '={{$parameter.date}}',
				},
			},
		},
	},
];
