import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Watermark PDF',
	value: OperationType.WATERMARK,
	description: 'Edit inside a Pdf in order to create an watermark',
	action: 'Watermark PDF',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Watermark PDF',
		name: 'watermarkop',
		type: 'options',
		options: [
			{
				name: 'Text',
				value: 'text',
			},
			{
				name: 'Image',
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
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.WATERMARK],
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
				operation: [OperationType.WATERMARK],
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
				operation: [OperationType.WATERMARK],
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
