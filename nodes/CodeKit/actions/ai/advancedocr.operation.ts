import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Extract Text From Document',
	value: OperationType.ADVANCED_OCR,
	description: 'Extract text and data from documents using advanced OCR',
	action: 'Extract text from document with OCR',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Document URL',
		name: 'url',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.ADVANCED_OCR],
			},
		},
		default: '',
		placeholder: 'e.g. https://example.com/document.pdf',
		description: 'The URL of the document to extract text from',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.ADVANCED_OCR],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.ADVANCED_OCR}`,
				body: {
					url: '={{$parameter.url}}',
				},
			},
		},
	},
];
