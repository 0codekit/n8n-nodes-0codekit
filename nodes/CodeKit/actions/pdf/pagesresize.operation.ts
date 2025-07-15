import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Resize PDF Pages',
	value: OperationType.PAGES_RESIZE,
	description: 'Resize pages in PDF',
	action: 'Resize pages in PDF',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_RESIZE],
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
				operation: [OperationType.PAGES_RESIZE],
			},
		},
		default: '',
		description: 'Binary buffer data of the PDF file',
	},
	{
		displayName: 'Target Size',
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
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_RESIZE],
			},
		},
		default: 'A4',
		description: 'Target size for the pages',
	},
	{
		displayName: 'Pages to Resize',
		name: 'pages',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_RESIZE],
			},
		},
		default: '',
		placeholder: '1,3-5,^3-^1',
		description:
			'Pages to resize. Given as a range of pages, where 1 means the first page and ^1 means the last page. Leave empty to resize all pages.',
	},
	{
		displayName: 'Fit Mode',
		name: 'fitMode',
		type: 'options',
		options: [
			{ name: 'Fit Inside', value: 'fit' },
			{ name: 'Fill', value: 'fill' },
			{ name: 'Stretch', value: 'stretch' },
		],
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_RESIZE],
			},
		},
		default: 'fit',
		description: 'How to fit the content to the new page size',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_RESIZE],
			},
		},
		default: '',
		placeholder: 'document-resized.pdf',
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
				operation: [OperationType.PAGES_RESIZE],
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
				operation: [OperationType.PAGES_RESIZE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.PDF}/pages/resize`,
				body: {
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					fileName: '={{$parameter.fileName}}',
					pageSize: '={{$parameter.pageSize}}',
					pages: '={{$parameter.pages}}',
					fitMode: '={{$parameter.fitMode}}',
				},
			},
		},
	},
];
