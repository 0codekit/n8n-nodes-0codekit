import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Add PDF Pages',
	value: OperationType.PAGES_ADD,
	description: 'Add blank pages to PDF',
	action: 'Add blank pages to PDF',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_ADD],
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
				operation: [OperationType.PAGES_ADD],
			},
		},
		default: '',
		description: 'Binary buffer data of the PDF file',
	},
	{
		displayName: 'Number of Pages',
		name: 'pageCount',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_ADD],
			},
		},
		default: 1,
		description: 'Number of blank pages to add',
	},
	{
		displayName: 'Insert Position',
		name: 'position',
		type: 'options',
		options: [
			{ name: 'Beginning', value: 'beginning' },
			{ name: 'End', value: 'end' },
			{ name: 'After Page', value: 'after' },
			{ name: 'Before Page', value: 'before' },
		],
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_ADD],
			},
		},
		default: 'end',
		description: 'Where to insert the new pages',
	},
	{
		displayName: 'Page Number',
		name: 'pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_ADD],
				position: ['after', 'before'],
			},
		},
		default: 1,
		description: 'Page number to insert pages after or before',
	},
	{
		displayName: 'Page Size',
		name: 'pageSize',
		type: 'options',
		options: [
			{ name: 'A3', value: 'A3' },
			{ name: 'A4', value: 'A4' },
			{ name: 'A5', value: 'A5' },
			{ name: 'Legal', value: 'Legal' },
			{ name: 'Letter', value: 'Letter' },
			{ name: 'Tabloid', value: 'Tabloid' },
		],
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_ADD],
			},
		},
		default: 'A4',
		description: 'Size of the pages to add',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_ADD],
			},
		},
		default: '',
		placeholder: 'document-with-pages.pdf',
		description: 'Name for the output PDF file',
	},
	{
		displayName: 'Return as URL',
		name: 'getAsUrl',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_ADD],
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
				operation: [OperationType.PAGES_ADD],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.PDF}/pages/add`,
				body: {
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					fileName: '={{$parameter.fileName}}',
					pageCount: '={{$parameter.pageCount}}',
					position: '={{$parameter.position}}',
					pageNumber: '={{$parameter.pageNumber}}',
					pageSize: '={{$parameter.pageSize}}',
				},
			},
		},
	},
];
