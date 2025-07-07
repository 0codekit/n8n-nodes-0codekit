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
		displayName: 'Context',
		name: 'sensitiveContent',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.REDACT_PDF],
			},
		},
		default: '',
		description:
			'A prompt that describes what content inside of the file should be considered as sensitive data. E.g (All information that have the words Adobe in it).',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.REDACT_PDF}`,
				body: {
					sensitiveContent: '={{$value.sensitiveContent}}',
				},
			},
		},
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
		description: 'The name of the file',
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.REDACT_PDF],
			},
		},
		default: '',
		description: 'The URL of the PDF file',
	},
	{
		displayName: 'Buffer',
		name: 'buffer',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.REDACT_PDF],
			},
		},
		default: '',
		description: 'The Buffer of the PDF file',
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
];
