import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Update',
	value: OperationType.UPDATE,
	description: 'Update a shortened URL destination',
	action: 'Update shortened URL',
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
				operation: [OperationType.UPDATE],
			},
		},
		default: '',
		description: 'The shortened URL identifier',
		placeholder: 'to4w5vyb',
	},
	{
		displayName: 'Destination URL',
		name: 'destination',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.SHORTENED_URL],
				operation: [OperationType.UPDATE],
			},
		},
		default: '',
		description: 'The destination URL which the shortened URL will point to',
		placeholder: 'https://example.com',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.SHORTENED_URL],
				operation: [OperationType.UPDATE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/generate/${ResourceType.SHORTENED_URL}/${OperationType.UPDATE}`,
				body: {
					identifier: '={{$parameter.identifier}}',
					destination: '={{$parameter.destination}}',
				},
			},
		},
	},
];
