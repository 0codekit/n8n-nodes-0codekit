import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'PDF to Image',
	value: OperationType.PDF_TO_IMAGE,
	description: 'Converts a PDF file to an image',
	action: 'Pdf to image a pdf',
};

export const description: INodeProperties[] = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PDF_TO_IMAGE],
			},
		},
		default: '',
		description: 'Public URL of the PDF file',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.PDF_TO_IMAGE}`,
				body: {
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
				},
			},
		},
	},
	{
		displayName: 'Buffer',
		name: 'buffer',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PDF_TO_IMAGE],
			},
		},
		default: '',
		description: 'Buffer of the PDF',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.PDF_TO_IMAGE}`,
				body: {
					buffer: '={{$parameter.buffer}}',
					url: '={{$parameter.url}}',
				},
			},
		},
	},
];
