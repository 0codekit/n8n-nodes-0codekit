import { INodeProperties } from 'n8n-workflow';
import { countryCodes } from '../../resources/countryCodes';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Get VAT Rates',
	value: OperationType.LOOKUP_VAT_RATES,
	description: 'Get current VAT rates for European Union countries',
	action: 'Get VAT rates for EU country',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Country Code',
		name: 'countryCode',
		type: 'options',
		required: true,
		options: countryCodes,
		default: 'DE',
		description: 'The country code for VAT rate lookup (e.g. DE for Germany, FR for France)',
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
