import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Embed Factur-X/Zugferd XML Into a PDF File',
	value: OperationType.FACTURX_EMBED,
	description: 'Embed existing XML Invoice into a PDF File',
	action: 'Embed Factur-X/Zugferd XML Into a PDF File',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		default: '',
		description: 'The URL of the PDF file to embed',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.FACTURX_EMBED],
			},
		},
	},
	{
		displayName: 'Buffer',
		name: 'buffer',
		type: 'string',
		default: '',
		description: 'The buffer of the PDF file to embed',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.FACTURX_EMBED],
			},
		},
	},
	{
		displayName: 'XML',
		name: 'xml',
		type: 'string',
		required: true,
		default: '',
		description: 'The Factur-X/Zugferd XML invoice to embed',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.FACTURX_EMBED],
			},
		},
	},
	{
		displayName: 'Get File as URL',
		name: 'getAsUrl',
		type: 'boolean',
		default: true,
		description: 'Whether the file should be returned as URL or as binary data',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.FACTURX_EMBED],
			},
		},
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		default: '',
		description: 'The name of the file',
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
				operation: [OperationType.FACTURX_EMBED],
			},
		},
	},
];
