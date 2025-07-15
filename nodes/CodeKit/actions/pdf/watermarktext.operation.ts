import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Add Text Watermark to PDF',
	value: OperationType.WATERMARK_TEXT,
	description: 'Add text watermark to PDF pages',
	action: 'Add text watermark to PDF pages',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.WATERMARK_TEXT],
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
				operation: [OperationType.WATERMARK_TEXT],
			},
		},
		default: '',
		description: 'Binary buffer data of the PDF file',
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.WATERMARK_TEXT],
			},
		},
		default: '',
		placeholder: 'Confidential',
		description: 'The text to use as watermark',
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
				operation: [OperationType.WATERMARK_TEXT],
			},
		},
		default: 'Helvetica',
		description: 'The font to use for the watermark text',
	},
	{
		displayName: 'Font Size',
		name: 'size',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.WATERMARK_TEXT],
			},
		},
		default: 72,
		description: 'The font size in points',
	},
	{
		displayName: 'Font Color',
		name: 'color',
		type: 'color',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.WATERMARK_TEXT],
			},
		},
		default: 'CCCCCC',
		placeholder: 'CCCCCC',
		description: 'The font color as a six-digit hexcode (RRGGBB)',
	},
	{
		displayName: 'Opacity',
		name: 'opacity',
		type: 'number',
		typeOptions: {
			minValue: 0,
			maxValue: 1,
			numberStepSize: 0.1,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.WATERMARK_TEXT],
			},
		},
		default: 0.3,
		description: 'The opacity of the watermark (0.0 to 1.0)',
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
				operation: [OperationType.WATERMARK_TEXT],
			},
		},
		default: 'center',
		description: 'The part of the page on which the watermark should be placed',
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
				operation: [OperationType.WATERMARK_TEXT],
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
				operation: [OperationType.WATERMARK_TEXT],
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
				operation: [OperationType.WATERMARK_TEXT],
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
				operation: [OperationType.WATERMARK_TEXT],
			},
		},
		default: 45,
		description: 'The counter-clockwise rotation of the watermark in degrees',
	},
	{
		displayName: 'Pages',
		name: 'pages',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.WATERMARK_TEXT],
			},
		},
		default: '',
		placeholder: '1,3-5,^3-^1',
		description:
			'The pages the watermark should be applied to. Given as a range of pages, where 1 means the first page and ^1 means the last page.',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.WATERMARK_TEXT],
			},
		},
		default: '',
		placeholder: 'watermarked-document.pdf',
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
				operation: [OperationType.WATERMARK_TEXT],
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
				operation: [OperationType.WATERMARK_TEXT],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.PDF}/watermark/text`,
				body: {
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					fileName: '={{$parameter.fileName}}',
					text: '={{$parameter.text}}',
					font: '={{$parameter.font}}',
					size: '={{$parameter.size}}',
					color: '={{$parameter.color}}',
					opacity: '={{$parameter.opacity}}',
					anchor: '={{$parameter.anchor}}',
					align: '={{$parameter.align}}',
					x: '={{$parameter.x}}',
					y: '={{$parameter.y}}',
					rotate: '={{$parameter.rotate}}',
					pages: '={{$parameter.pages}}',
				},
			},
		},
	},
];
