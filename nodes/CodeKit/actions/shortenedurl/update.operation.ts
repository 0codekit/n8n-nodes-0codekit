import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Update Shortened URL',
	value: OperationType.UPDATE,
	description: 'Update the destination URL of a shortened URL',
	action: 'Update the destination URL of a shortened URL',
};

export const description: INodeProperties[] = [
	{
		displayName: 'URL Identifier',
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
		description: 'The unique identifier of the shortened URL to update',
		placeholder: 'to4w5vyb',
	},
	{
		displayName: 'New Destination URL',
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
		description: 'The new destination URL for the shortened URL',
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
