import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Get',
	value: OperationType.GET,
	description: 'Get details of a shortened URL',
	action: 'Get shortened URL',
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
				operation: [OperationType.GET],
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
