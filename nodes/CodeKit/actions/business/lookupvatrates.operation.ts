import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Lookup VAT Rates',
	value: OperationType.LOOKUP_VAT_RATES,
	description: 'Looks up the VAT rate for the specified country in the European Union',
	action: 'Lookup VAT Rates',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Country Code',
		name: 'countryCode',
		type: 'string',
		required: true,
		default: '',
		description: 'The country code (e.g. DE, FR, IT)',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.LOOKUP_VAT_RATES],
			},
		},
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.LOOKUP_VAT_RATES],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.BUSINESS}/${OperationType.LOOKUP_VAT_RATES}`,
				body: {
					countryCode: '={{$parameter.countryCode}}',
				},
			},
		},
	},
];
