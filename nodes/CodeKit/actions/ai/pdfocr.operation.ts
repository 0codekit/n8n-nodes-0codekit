import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'PDF OCR',
	value: OperationType.PDF_OCR,
	description: 'Extract text from PDF with AI',
	action: 'Extracts text from PDF with AI',
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
		description: 'PDF to extract text with AI',
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
