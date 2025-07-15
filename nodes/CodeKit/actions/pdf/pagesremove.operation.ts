import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Remove PDF Pages',
	value: OperationType.PAGES_REMOVE,
	description: 'Remove pages from PDF',
	action: 'Remove pages from PDF',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_REMOVE],
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
				operation: [OperationType.PAGES_REMOVE],
			},
		},
		default: '',
		description: 'Binary buffer data of the PDF file',
	},
	{
		displayName: 'Pages to Remove',
		name: 'pages',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_REMOVE],
			},
		},
		default: '',
		placeholder: '1,3-5,^3-^1',
		description:
			'Pages to remove from the PDF. Given as a range of pages, where 1 means the first page and ^1 means the last page.',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_REMOVE],
			},
		},
		default: '',
		placeholder: 'document-pages-removed.pdf',
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
				operation: [OperationType.PAGES_REMOVE],
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
				operation: [OperationType.PAGES_REMOVE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.PDF}/pages/remove`,
				body: {
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					fileName: '={{$parameter.fileName}}',
					pages: '={{$parameter.pages}}',
				},
			},
		},
	},
];
