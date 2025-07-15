import { INodeProperties } from 'n8n-workflow';
import { currencies } from '../../resources/currencies';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Convert Currency',
	value: OperationType.CURRENCY,
	description: 'Convert currency amounts between different currencies on specific dates',
	action: 'Convert Currency',
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
		description: 'Amount to convert to the target currency',
		placeholder: 'e.g. 100.50',
	},
	{
		displayName: 'From Currency',
		name: 'from',
		type: 'options',
		options: currencies,
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.CURRENCY],
			},
		},
		default: 'EUR',
		description: 'Source currency to convert from',
	},
	{
		displayName: 'To Currency',
		name: 'to',
		type: 'options',
		options: currencies,
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.CURRENCY],
			},
		},
		default: 'USD',
		description: 'Target currency to convert to',
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
		description: 'Date for conversion rate (leave empty for current rate)',
		placeholder: 'e.g. 2023-01-01',
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
