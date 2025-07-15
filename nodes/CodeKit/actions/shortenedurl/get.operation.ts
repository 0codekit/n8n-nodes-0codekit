import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Get Shortened URL Details',
	value: OperationType.GET,
	description: 'Retrieve information about a shortened URL',
	action: 'Retrieve information about a shortened URL',
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
				operation: [OperationType.GET],
			},
		},
		default: '',
		description: 'The unique identifier of the shortened URL',
		placeholder: 'to4w5vyb',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.SHORTENED_URL],
				operation: [OperationType.GET],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/generate/${ResourceType.SHORTENED_URL}/${OperationType.GET}`,
				body: {
					identifier: '={{$parameter.identifier}}',
				},
			},
		},
	},
];
