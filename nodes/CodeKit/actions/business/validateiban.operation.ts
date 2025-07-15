import { INodeProperties } from 'n8n-workflow';

import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Validate IBAN',
	value: OperationType.VALIDATE_IBAN,
	description: 'Validate International Bank Account Number (IBAN) format and checksum',
	action: 'Validate IBAN format and checksum',
};

export const description: INodeProperties[] = [
	{
		displayName: 'IBAN Number',
		name: 'iban',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'e.g. DE89370400440532013000',
		description: 'The International Bank Account Number (IBAN) to validate',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.VALIDATE_IBAN],
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
				operation: [OperationType.VALIDATE_IBAN],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.BUSINESS}/${OperationType.VALIDATE_IBAN}`,
				body: {
					iban: '={{$parameter.iban}}',
				},
			},
		},
	},
];
