import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Draw Text on PDF',
	value: OperationType.DRAW_TEXT,
	description: 'Add text content to PDF pages',
	action: 'Draw text on PDF',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_TEXT],
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
				operation: [OperationType.DRAW_TEXT],
			},
		},
		default: '',
		placeholder: 'Base64-encoded PDF data',
		description: 'The PDF as a Base64-encoded buffer. Can be specified instead of URL.',
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_TEXT],
			},
		},
		default: '',
		placeholder: 'Hello, world!',
		description: 'The text to draw on the PDF',
	},
	{
		displayName: 'Font',
		name: 'font',
		type: 'options',
		options: [
			{ name: 'Courier', value: 'Courier' },
			{ name: 'Helvetica', value: 'Helvetica' },
			{ name: 'Times Roman', value: 'TimesRoman' },
		],
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_TEXT],
			},
		},
		default: 'Helvetica',
		description: 'The font to use for the text',
	},
	{
		displayName: 'Font Size',
		name: 'size',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_TEXT],
			},
		},
		default: 32,
		description: 'The font size in points',
	},
	{
		displayName: 'Font Color',
		name: 'color',
		type: 'color',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_TEXT],
			},
		},
		default: '000000',
		placeholder: 'FFFF00',
		description: 'The font color as a six-digit hexcode (RRGGBB)',
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
				operation: [OperationType.DRAW_TEXT],
			},
		},
		default: 'center',
		description: 'The part of the page on which the text should be drawn',
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
				operation: [OperationType.DRAW_TEXT],
			},
		},
		default: 'center',
		description: 'The part of the text that should be aligned with the specified position',
	},
	{
		displayName: 'X Offset',
		name: 'x',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_TEXT],
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
				operation: [OperationType.DRAW_TEXT],
			},
		},
		default: 0,
		description: 'The vertical offset in points relative to the anchor',
	},
	{
		displayName: 'Rotation',
		name: 'rotate',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_TEXT],
			},
		},
		default: 0,
		description: 'The counter-clockwise rotation of the text in degrees',
	},
	{
		displayName: 'Pages',
		name: 'pages',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_TEXT],
			},
		},
		default: '',
		placeholder: '1,3-5,^3-^1',
		description:
			'The pages the text should be drawn onto. Given as a range of pages, where 1 means the first page and ^1 means the last page.',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_TEXT],
			},
		},
		default: '',
		placeholder: 'document-with-text.pdf',
		description: 'The file name the result PDF will have',
	},
	{
		displayName: 'Return as URL',
		name: 'getAsUrl',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.DRAW_TEXT],
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
				operation: [OperationType.DRAW_TEXT],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.PDF}/draw/text`,
				body: {
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					text: '={{$parameter.text}}',
					font: '={{$parameter.font}}',
					size: '={{$parameter.size}}',
					color: '={{$parameter.color}}',
					anchor: '={{$parameter.anchor}}',
					align: '={{$parameter.align}}',
					x: '={{$parameter.x}}',
					y: '={{$parameter.y}}',
					rotate: '={{$parameter.rotate}}',
					pages: '={{$parameter.pages}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];
