import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Draw Image on PDF',
	value: OperationType.DRAW_IMAGE,
	description: 'Add image content to PDF pages',
	action: 'Draw image on PDF',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_IMAGE],
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
				operation: [OperationType.DRAW_IMAGE],
			},
		},
		default: '',
		placeholder: 'Base64-encoded PDF data',
		description: 'The PDF as a Base64-encoded buffer. Can be specified instead of URL.',
	},
	{
		displayName: 'Image URL',
		name: 'imageUrl',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_IMAGE],
			},
		},
		default: '',
		placeholder: 'https://example.com/image.png',
		description: 'URL of the image to draw',
	},
	{
		displayName: 'Image Buffer',
		name: 'imageBuffer',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_IMAGE],
			},
		},
		default: '',
		placeholder: 'Base64-encoded image data',
		description: 'The image as a Base64-encoded buffer. Can be specified instead of image URL.',
	},
	{
		displayName: 'Anchor Position',
		name: 'anchor',
		type: 'options',
		options: [
			{ name: 'Bottom Center', value: 'bottom' },
			{ name: 'Bottom Left', value: 'bottom-left' },
			{ name: 'Bottom Right', value: 'bottom-right' },
			{ name: 'Center', value: 'center' },
			{ name: 'Center Left', value: 'left' },
			{ name: 'Center Right', value: 'right' },
			{ name: 'Top Center', value: 'top' },
			{ name: 'Top Left', value: 'top-left' },
			{ name: 'Top Right', value: 'top-right' },
		],
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_IMAGE],
			},
		},
		default: 'center',
		description: 'The part of the page on which the image should be drawn',
	},
	{
		displayName: 'Alignment',
		name: 'align',
		type: 'options',
		options: [
			{ name: 'Bottom Center', value: 'bottom' },
			{ name: 'Bottom Left', value: 'bottom-left' },
			{ name: 'Bottom Right', value: 'bottom-right' },
			{ name: 'Center', value: 'center' },
			{ name: 'Center Left', value: 'left' },
			{ name: 'Center Right', value: 'right' },
			{ name: 'Top Center', value: 'top' },
			{ name: 'Top Left', value: 'top-left' },
			{ name: 'Top Right', value: 'top-right' },
		],
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_IMAGE],
			},
		},
		default: 'center',
		description: 'The part of the image that should be aligned with the specified position',
	},
	{
		displayName: 'X Offset',
		name: 'x',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_IMAGE],
			},
		},
		default: 0,
		description: 'The horizontal offset in points relative to the anchor',
	},
	{
		displayName: 'Y Offset',
		name: 'y',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_IMAGE],
			},
		},
		default: 0,
		description: 'The vertical offset in points relative to the anchor',
	},
	{
		displayName: 'Width',
		name: 'width',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_IMAGE],
			},
		},
		default: 200,
		description:
			'The width of the image in points. If only width is provided, height is calculated automatically.',
	},
	{
		displayName: 'Height',
		name: 'height',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_IMAGE],
			},
		},
		default: 100,
		description:
			'The height of the image in points. If only height is provided, width is calculated automatically.',
	},
	{
		displayName: 'Rotation',
		name: 'rotate',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_IMAGE],
			},
		},
		default: 0,
		description: 'The counter-clockwise rotation of the image in degrees',
	},
	{
		displayName: 'Pages',
		name: 'pages',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_IMAGE],
			},
		},
		default: '',
		placeholder: '1,3-5,^3-^1',
		description:
			'The pages the image should be drawn onto. Given as a range of pages, where 1 means the first page and ^1 means the last page.',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_IMAGE],
			},
		},
		default: '',
		placeholder: 'document-with-image.pdf',
		description: 'The file name the result PDF will have',
	},
	{
		displayName: 'Return as URL',
		name: 'getAsUrl',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_IMAGE],
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
				operation: [OperationType.DRAW_IMAGE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.PDF}/draw/image`,
				body: {
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					imageUrl: '={{$parameter.imageUrl}}',
					imageBuffer: '={{$parameter.imageBuffer}}',
					anchor: '={{$parameter.anchor}}',
					align: '={{$parameter.align}}',
					x: '={{$parameter.x}}',
					y: '={{$parameter.y}}',
					width: '={{$parameter.width}}',
					height: '={{$parameter.height}}',
					rotate: '={{$parameter.rotate}}',
					pages: '={{$parameter.pages}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];
