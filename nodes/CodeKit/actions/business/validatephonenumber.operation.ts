import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Validate Phonenumber',
	value: OperationType.VALIDATE_PHONE_NUMBER,
	description: 'Checks whether the phone number is valid',
	action: 'Validate Phonenumber',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Phone Number',
		name: 'phoneNumber',
		type: 'string',
		required: true,
		default: '',
		placeholder: '+99 123456789',
		description: 'The phone number to validate',
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
		type: 'string',
		default: '',
		placeholder: 'GB',
		description: 'The country code (optional)',
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
					phoneNumber: '={{$value.phoneNumber}}',
					countryCode: '={{$value.countryCode}}',
				},
			},
		},
	},
];
