import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Compress PDF File',
	value: OperationType.COMPRESS,
	description: 'Reduce PDF file size by compressing content',
	action: 'Reduce PDF file size by compressing content',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.COMPRESS],
			},
		},
		default: '',
		placeholder: 'https://example.com/document.pdf',
		description: 'Public URL of the PDF file to compress',
	},
	{
		displayName: 'PDF Buffer',
		name: 'buffer',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.COMPRESS],
			},
		},
		default: '',
		description: 'Binary buffer data of the PDF file',
	},
	{
		displayName: 'Return as URL',
		name: 'getAsUrl',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.COMPRESS],
			},
		},
		default: false,
		description: 'Whether to return the PDF as a downloadable URL',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.COMPRESS],
			},
		},
		default: '',
		description: 'Name for the output PDF file',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.COMPRESS],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.COMPRESS}`,
				body: {
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];
