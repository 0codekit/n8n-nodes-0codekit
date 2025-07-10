import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Validate BIC',
	value: OperationType.VALIDATE_BIC,
	description: 'Checks whether a BIC (Bank Identifier Code) is valid',
	action: 'Validate BIC',
};

export const description: INodeProperties[] = [
	{
		displayName: 'BIC',
		name: 'bic',
		type: 'string',
		required: true,
		default: '',
		description: 'The BIC to validate',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.VALIDATE_BIC],
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
				operation: [OperationType.VALIDATE_BIC],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.BUSINESS}/${OperationType.VALIDATE_BIC}`,
				body: {
					bic: '={{$parameter.bic}}',
				},
			},
		},
	},
];
