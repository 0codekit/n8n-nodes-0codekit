import { INodeProperties } from 'n8n-workflow';

import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Validate VAT ID',
	value: OperationType.VALIDATE_VAT,
	description: 'Checks whether the provided VAT ID is valid using VIES',
	action: 'Validate VAT ID',
};

export const description: INodeProperties[] = [
	{
		displayName: 'VAT ID',
		name: 'vatId',
		type: 'string',
		required: true,
		default: '',
		description: 'The VAT ID to validate',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.VALIDATE_VAT],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.BUSINESS}/${OperationType.VALIDATE_VAT}`,
				body: {
					vatId: '={{$value.vatId}}',
				},
			},
		},
	},
];
