import type { INodeProperties } from 'n8n-workflow';
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
				operation: ['shortenedUrl'],
				resource: ['generate'],
			},
		},
		default: 'add',
		routing: {
			send: {
				type: 'body',
				property: 'operation',
			},
		},
	},
	{
		displayName: 'Destination of the Shortened Url',
		name: 'destination',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['shortenedUrl'],
				resource: ['generate'],
				shortenedurlop: ['add', 'put'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'destination',
			},
		},
	},
	{
		displayName: 'Optional Custom Identifier',
		name: 'custom',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['shortenedUrl'],
				resource: ['generate'],
				shortenedurlop: ['add'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'custom',
			},
		},
	},
	{
		displayName: 'Identifier',
		name: 'identifier',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['shortenedUrl'],
				resource: ['generate'],
				shortenedurlop: ['del', 'put'],
			},
		},
		default: '',
		description: 'Identifier of the shortened URL you want to edit or delete',
		routing: {
			send: {
				type: 'body',
				property: 'identifier',
			},
		},
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'hidden',
		default: 'shortenedUrl',
		routing: {
			send: {
				type: 'body',
				property: 'operation',
			},
			output: {
				postReceive: [
					{
						type: 'rootProperty',
						properties: {
							property: 'body',
						},
					},
				],
			},
			request: {
				method: 'POST',
				url: '={{$parameter.shortenedurlop === "add" ? "/generate/shortenedurl/add" : $parameter.shortenedurlop === "del" ? "/generate/shortenedurl/del" : $parameter.shortenedurlop === "put" ? "/generate/shortenedurl/put" : "/generate/shortenedurl/list"}}',
			},
		},
	},
];
