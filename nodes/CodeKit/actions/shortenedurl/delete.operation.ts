import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Delete Shortened URL',
	value: OperationType.DELETE,
	description: 'Permanently remove a shortened URL',
	action: 'Permanently remove a shortened URL',
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
				operation: [OperationType.DELETE],
			},
		},
		default: '',
		description: 'The unique identifier of the shortened URL to delete',
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
