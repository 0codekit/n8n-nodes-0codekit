import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Add PDF Watermark',
	value: OperationType.WATERMARK,
	description: 'Add text or image watermark to PDF pages',
	action: 'Add text or image watermark to PDF pages',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Watermark Type',
		name: 'watermarkop',
		type: 'options',
		options: [
			{
				name: 'Text Watermark',
				value: 'text',
			},
			{
				name: 'Image Watermark',
				value: 'image',
			},
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.WATERMARK],
			},
		},
		default: 'text',
		description: 'Type of watermark to add',
	},
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.WATERMARK],
			},
		},
		default: '',
		placeholder: 'https://example.com/document.pdf',
		description: 'Public URL of the PDF file',
	},
	{
		displayName: 'PDF Buffer',
		name: 'buffer',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.WATERMARK],
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
				operation: [OperationType.WATERMARK],
			},
		},
		default: false,
		description: 'Whether to return the PDF as a downloadable URL',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.WATERMARK],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.PDF}/${OperationType.WATERMARK}/{{$parameter.watermarkop}}`,
				body: {
					watermarkop: '={{$parameter.watermarkop}}',
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
				},
			},
		},
	},
];
