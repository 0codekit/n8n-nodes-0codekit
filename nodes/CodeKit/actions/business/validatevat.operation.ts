import { INodeProperties } from 'n8n-workflow';

import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Validate VAT ID',
	value: OperationType.VALIDATE_VAT,
	description: 'Validate VAT identification number using VIES database',
	action: 'Validate VAT ID using VIES',
};

export const description: INodeProperties[] = [
	{
		displayName: 'VAT ID Number',
		name: 'vatId',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'e.g. DE123456789',
		description: 'The VAT identification number to validate against VIES database',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.VALIDATE_VAT],
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
				operation: [OperationType.VALIDATE_VAT],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.BUSINESS}/${OperationType.VALIDATE_VAT}`,
				body: {
					vatId: '={{$parameter.vatId}}',
				},
			},
		},
	},
];
