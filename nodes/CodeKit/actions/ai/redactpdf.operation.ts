import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Redact Sensitive Information From PDF',
	value: OperationType.REDACT_PDF,
	description:
		'An AI-Driven Endpoint that automatically detects and redacts specific words, numbers, or sensitive information based on your preferences',
	action: 'Ai redact sensitive information from pdf',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF Data Type',
		name: 'dataType',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.REMOVE_BACKGROUND],
			},
		},
		options: [
			{
				name: 'Use PDF URL',
				value: 'pdfUrl',
				description: 'Use a PDF URL for background removal',
				action: 'Use PDF URL for background removal',
			},
			{
				name: 'Use PDF Buffer',
				value: 'pdfBuffer',
				description: 'Use a Base64-encoded PDF for background removal',
				action: 'Use PDF buffer for background removal',
			},
		],
		default: 'pdfUrl',
	},
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.REMOVE_BACKGROUND],
				dataType: ['pdfUrl'],
			},
		},
		default: '',
		placeholder: 'https://example.com/document.pdf',
		description: 'The URL of the PDF document to analyze',
	},
	{
		displayName: 'PDF Buffer',
		name: 'buffer',
		type: 'string',
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.REMOVE_BACKGROUND],
				dataType: ['pdfBuffer'],
			},
		},
		default: '',
		description: 'Base64-encoded PDF data',
	},
	{
		displayName: 'Context',
		name: 'sensitiveContent',
		type: 'string',
		required: true,
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.REDACT_PDF],
			},
		},
		default: '',
		description:
			'A prompt that describes what content inside of the file should be considered as sensitive data. E.g (All information that have the words Adobe in it).',
	},
	{
		displayName: 'Get File as URL',
		name: 'getAsUrl',
		type: 'boolean',
		description: 'Whether the file should be returned as URL or as binary data',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.REDACT_PDF],
			},
		},
		default: true,
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.REDACT_PDF],
			},
		},
		default: '',
		description: 'The file name the result PDF will have. Default is a random ID.',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.REDACT_PDF],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.REDACT_PDF}`,
				body: {
					sensitiveContent: '={{$parameter.sensitiveContent}}',
					fileName: '={{$parameter.fileName}}',
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
				},
			},
		},
	},
];
