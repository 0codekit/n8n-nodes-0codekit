import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Shortened URL',
	value: OperationType.SHORTENED_URL,
	description: 'Create, delete or update shortened URLs',
	action: 'Generate a shortened url',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'shortenedurlop',
		type: 'options',
		options: [
			{
				name: 'Add New Shortened Url',
				value: 'add',
			},
			{
				name: 'Delete Shortened Url',
				value: 'del',
			},
			{
				name: 'Update Shortened Url',
				value: 'put',
				description: 'Update the destination of a shortened URL',
			},
			{
				name: 'List All Your Shortened Urls',
				value: 'list',
			},
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.SHORTENED_URL],
			},
		},
		default: 'add',
	},
	{
		displayName: 'Destination of the Shortened Url',
		name: 'destination',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.SHORTENED_URL],
				shortenedurlop: ['add', 'put'],
			},
		},
		default: '',
	},
	{
		displayName: 'Optional Custom Identifier',
		name: 'custom',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.SHORTENED_URL],
				shortenedurlop: ['add'],
			},
		},
		default: '',
	},
	{
		displayName: 'Identifier',
		name: 'identifier',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.SHORTENED_URL],
				shortenedurlop: ['del', 'put'],
			},
		},
		default: '',
		description: 'Identifier of the shortened URL you want to edit or delete',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.SHORTENED_URL],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `={{/${ResourceType.GENERATE}/${OperationType.SHORTENED_URL}/$parameter.shortenedurlop}}`,
				body: {
					shortenedurlop: '={{$parameter.shortenedurlop}}',
					destination: '={{$parameter.destination}}',
					custom: '={{$parameter.custom}}',
					identifier: '={{$parameter.identifier}}',
				},
			},
		},
	},
];
