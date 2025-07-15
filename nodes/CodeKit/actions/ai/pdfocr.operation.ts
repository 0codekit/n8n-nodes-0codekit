import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Extract Text From PDF',
	value: OperationType.PDF_OCR,
	description: 'Extract text from PDF documents using optical character recognition',
	action: 'Extract text from PDF using OCR',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF URL',
		name: 'pdfUrl',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.PDF_OCR],
			},
		},
		default: '',
		placeholder: 'e.g. https://example.com/document.pdf',
		description: 'The URL of the PDF document to extract text from using AI',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.PDF_OCR],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.PDF_OCR}`,
				body: {
					pdfUrl: '={{$parameter.pdfUrl}}',
				},
			},
		},
	},
];
