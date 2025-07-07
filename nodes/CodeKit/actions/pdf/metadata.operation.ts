import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Metadata',
	value: OperationType.METADATA,
	description: 'Extract or Manipulate Metadata of a PDF file',
	action: 'Metadata extract or edit',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Metadata',
		name: 'metadataop',
		type: 'options',
		options: [
			{
				name: 'Edit Metadata',
				value: 'edit',
			},
			{
				name: 'Get Pdf Metadata',
				value: 'info',
			},
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.METADATA],
			},
		},
		default: 'edit',
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.METADATA],
			},
		},
		default: '',
		description: 'Public URL of the PDF file',
	},
	{
		displayName: 'Buffer',
		name: 'buffer',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.METADATA],
			},
		},
		default: '',
		description: 'Buffer of the PDF',
	},
	{
		displayName: 'Get File as URL',
		name: 'getAsUrl',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.METADATA],
			},
		},
		default: false,
		description: 'Whether you want the PDF as an URL',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.METADATA],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.PDF}/metadata/{{$parameter.metadataop}}`,
				body: {
					metadataop: '={{$parameter.metadataop}}',
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
				},
			},
		},
	},
];
