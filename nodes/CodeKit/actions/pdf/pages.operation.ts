import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Manage PDF Pages',
	value: OperationType.PAGES,
	description: 'Add, remove, rotate, or resize PDF pages',
	action: 'Add, remove, rotate, or resize PDF pages',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Page Operation',
		name: 'pagesop',
		type: 'options',
		options: [
			{
				name: 'Add Pages',
				value: 'add',
			},
			{
				name: 'Rotate Pages',
				value: 'rotate',
			},
			{
				name: 'Remove Pages',
				value: 'remove',
			},
			{
				name: 'Resize Pages',
				value: 'resize',
			},
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES],
			},
		},
		default: 'add',
	},
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES],
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
				operation: [OperationType.PAGES],
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
				operation: [OperationType.PAGES],
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
				operation: [OperationType.PAGES],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.PDF}/${OperationType.PAGES}/{{$parameter.pagesop}}`,
				body: {
					pagesop: '={{$parameter.pagesop}}',
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
				},
			},
		},
	},
];
