import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Delete',
	value: OperationType.DELETE,
	description: 'Delete a shortened URL',
	action: 'Delete shortened URL',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Identifier',
		name: 'identifier',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.SHORTENED_URL],
				operation: [OperationType.DELETE],
			},
		},
		default: '',
		description: 'The shortened URL identifier',
		placeholder: 'to4w5vyb',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.SHORTENED_URL],
				operation: [OperationType.DELETE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/generate/${ResourceType.SHORTENED_URL}/${OperationType.DELETE}`,
				body: {
					identifier: '={{$parameter.identifier}}',
				},
			},
		},
	},
];
