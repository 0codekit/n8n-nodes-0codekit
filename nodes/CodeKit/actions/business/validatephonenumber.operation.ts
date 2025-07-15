import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';
import { countryCodes } from '../../resources/countryCodes';

export const option = {
	name: 'Validate Phone Number',
	value: OperationType.VALIDATE_PHONE_NUMBER,
	description: 'Validate phone number format and verify carrier information',
	action: 'Validate phone number format',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Phone Number',
		name: 'phoneNumber',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'e.g. +1-555-123-4567',
		description: 'The phone number to validate (with or without country code)',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.VALIDATE_PHONE_NUMBER],
			},
		},
	},
	{
		displayName: 'Country Code',
		name: 'countryCode',
		type: 'options',
		options: countryCodes,
		default: '',
		placeholder: 'e.g. US',
		description: 'The country code for phone number validation (optional)',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.VALIDATE_PHONE_NUMBER],
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
				operation: [OperationType.VALIDATE_PHONE_NUMBER],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.BUSINESS}/${OperationType.VALIDATE_PHONE_NUMBER}`,
				body: {
					phoneNumber: '={{$parameter.phoneNumber}}',
					countryCode: '={{$parameter.countryCode}}',
				},
			},
		},
	},
];
