import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const description: INodeProperties[] = [
	{
		displayName: 'URL',
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
		placeholder: 'https://example.com/document.pdf',
		description: 'The URL to the document',
	},
];
