import { INodeProperties } from 'n8n-workflow';

import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Validate IBAN',
	value: OperationType.VALIDATE_IBAN,
	description: 'Checks whether the provided IBAN is valid',
	action: 'Validate IBAN',
};

export const description: INodeProperties[] = [
	{
		displayName: 'IBAN',
		name: 'iban',
		type: 'string',
		required: true,
		default: '',
		description: 'The IBAN to validate',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.VALIDATE_IBAN],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.BUSINESS}/${OperationType.VALIDATE_IBAN}`,
				body: {
					iban: '={{$value.iban}}',
				},
			},
		},
	},
];
