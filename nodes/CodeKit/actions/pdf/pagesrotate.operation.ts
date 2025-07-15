import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Rotate PDF Pages',
	value: OperationType.PAGES_ROTATE,
	description: 'Rotate pages in PDF',
	action: 'Rotate pages in PDF',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_ROTATE],
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
				operation: [OperationType.PAGES_ROTATE],
			},
		},
		default: '',
		description: 'Binary buffer data of the PDF file',
	},
	{
		displayName: 'Rotation Angle',
		name: 'angle',
		type: 'options',
		options: [
			{ name: '90° Clockwise', value: 90 },
			{ name: '180°', value: 180 },
			{ name: '270° Clockwise (90° Counter-Clockwise)', value: 270 },
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_ROTATE],
			},
		},
		default: 90,
		description: 'Angle to rotate the pages',
	},
	{
		displayName: 'Pages to Rotate',
		name: 'pages',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_ROTATE],
			},
		},
		default: '',
		placeholder: '1,3-5,^3-^1',
		description:
			'Pages to rotate. Given as a range of pages, where 1 means the first page and ^1 means the last page. Leave empty to rotate all pages.',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES_ROTATE],
			},
		},
		default: '',
		placeholder: 'document-rotated.pdf',
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
				operation: [OperationType.PAGES_ROTATE],
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
				operation: [OperationType.PAGES_ROTATE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.PDF}/pages/rotate`,
				body: {
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					fileName: '={{$parameter.fileName}}',
					angle: '={{$parameter.angle}}',
					pages: '={{$parameter.pages}}',
				},
			},
		},
	},
];
