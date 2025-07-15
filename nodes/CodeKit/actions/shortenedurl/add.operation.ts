import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Create Shortened URL',
	value: OperationType.ADD,
	description: 'Create a new shortened URL with optional custom identifier',
	action: 'Create a new shortened URL with optional custom identifier',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Destination URL',
		name: 'destination',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.SHORTENED_URL],
				operation: [OperationType.ADD],
			},
		},
		default: '',
		description: 'The destination URL which the shortened URL will point to',
		placeholder: 'https://example.com',
	},
	{
		displayName: 'Custom Identifier',
		name: 'custom',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.SHORTENED_URL],
				operation: [OperationType.ADD],
			},
		},
		default: '',
		description:
			'Custom identifier for the shortened URL. If not provided, a random identifier will be generated.',
		placeholder: 'my-custom-ID',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.SHORTENED_URL],
				operation: [OperationType.ADD],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/generate/${ResourceType.SHORTENED_URL}/${OperationType.ADD}`,
				body: {
					destination: '={{$parameter.destination}}',
					custom: '={{$parameter.custom}}',
				},
			},
		},
	},
];
