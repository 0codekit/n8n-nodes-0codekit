import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'QR Code Encode',
	value: OperationType.QRCODE_ENCODE,
	description: 'Generate a QR code from text or data',
	action: 'Encode QR code',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Data to Encode',
		name: 'data',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_ENCODE],
			},
		},
		default: '',
		description: 'The data that should be encoded in the QR code',
	},
	{
		displayName: 'Width',
		name: 'width',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_ENCODE],
			},
		},
		default: 500,
		description: 'The width of the QR code in pixels',
	},
	{
		displayName: 'Height',
		name: 'height',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_ENCODE],
			},
		},
		default: 500,
		description: 'The height of the QR code in pixels',
	},
	{
		displayName: 'Center Image URL',
		name: 'image',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_ENCODE],
			},
		},
		default: '',
		description: 'URL of the image that should be put in the middle of the QR code',
	},
	{
		displayName: 'Margin',
		name: 'margin',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_ENCODE],
			},
		},
		default: 15,
		description: 'The size of the space between the QR code and the border of the image in pixels',
	},
	{
		displayName: 'QR Options',
		name: 'qrOptions',
		type: 'collection',
		placeholder: 'Add QR Option',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_ENCODE],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Type Number',
				name: 'typeNumber',
				type: 'number',
				default: 0,
				description:
					'The type of the QR code (1-40). The number of dots on each side is 4 * type number + 17. By default, sized as small as possible.',
			},
			{
				displayName: 'Mode',
				name: 'mode',
				type: 'options',
				options: [
					{ name: 'Alphanumeric', value: 'Alphanumeric' },
					{ name: 'Byte', value: 'Byte' },
					{ name: 'Numeric', value: 'Numeric' },
				],
				default: 'Byte',
				description: 'The mode of the QR code determining allowed characters',
			},
			{
				displayName: 'Error Correction Level',
				name: 'errorCorrectionLevel',
				type: 'options',
				options: [
					{ name: 'H (~30%)', value: 'H' },
					{ name: 'L (~7%)', value: 'L' },
					{ name: 'M (~15%)', value: 'M' },
					{ name: 'Q (~25%)', value: 'Q' },
				],
				default: 'Q',
				description:
					'Error correction level - higher levels allow more data recovery but require larger QR codes',
			},
		],
	},
	{
		displayName: 'Image Options',
		name: 'imageOptions',
		type: 'collection',
		placeholder: 'Add Image Option',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_ENCODE],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Hide Background Dots',
				name: 'hideBackgroundDots',
				type: 'boolean',
				default: true,
				description: 'Whether the dots covered by the image should be hidden',
			},
			{
				displayName: 'Image Margin',
				name: 'margin',
				type: 'number',
				default: 0,
				description: 'The size of the empty space around the image in pixels',
			},
		],
	},
	{
		displayName: 'Dots Options',
		name: 'dotsOptions',
		type: 'collection',
		placeholder: 'Add Dots Option',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_ENCODE],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Dots Type',
				name: 'type',
				type: 'options',
				options: [
					{ name: 'Classy', value: 'classy' },
					{ name: 'Classy Rounded', value: 'classy-rounded' },
					{ name: 'Dots', value: 'dots' },
					{ name: 'Extra Rounded', value: 'extra-rounded' },
					{ name: 'Rounded', value: 'rounded' },
					{ name: 'Square', value: 'square' },
				],
				default: 'square',
				description: 'The style of the dots',
			},
			{
				displayName: 'Dots Color',
				name: 'color',
				type: 'color',
				default: '#000000',
				description: 'The color of the dots as a hexcode',
			},
		],
	},
	{
		displayName: 'Corner Square Options',
		name: 'cornersSquareOptions',
		type: 'collection',
		placeholder: 'Add Corner Square Option',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_ENCODE],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Corner Square Type',
				name: 'type',
				type: 'options',
				options: [
					{ name: 'Dot', value: 'dot' },
					{ name: 'Extra Rounded', value: 'extra-rounded' },
					{ name: 'Square', value: 'square' },
				],
				default: 'square',
				description: 'The style of the corner squares',
			},
			{
				displayName: 'Corner Square Color',
				name: 'color',
				type: 'color',
				default: '#000000',
				description: 'The color of the corner squares as a hexcode',
			},
		],
	},
	{
		displayName: 'Corner Dot Options',
		name: 'cornersDotOptions',
		type: 'collection',
		placeholder: 'Add Corner Dot Option',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_ENCODE],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Corner Dot Type',
				name: 'type',
				type: 'options',
				options: [
					{ name: 'Dot', value: 'dot' },
					{ name: 'Square', value: 'square' },
				],
				default: 'square',
				description: 'The style of the corner dots',
			},
			{
				displayName: 'Corner Dot Color',
				name: 'color',
				type: 'color',
				default: '#000000',
				description: 'The color of the corner dots as a hexcode',
			},
		],
	},
	{
		displayName: 'Get As URL',
		name: 'getAsUrl',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_ENCODE],
			},
		},
		default: false,
		description: 'Whether to return the result as a URL instead of a buffer',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_ENCODE],
			},
		},
		default: '',
		description: 'The file name of the result image',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_ENCODE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.GENERATE}/qrcode/encode`,
				body: {
					data: '={{$parameter.data}}',
					width: '={{$parameter.width}}',
					height: '={{$parameter.height}}',
					image: '={{$parameter.image}}',
					margin: '={{$parameter.margin}}',
					qrOptions: '={{$parameter.qrOptions}}',
					imageOptions: '={{$parameter.imageOptions}}',
					dotsOptions: '={{$parameter.dotsOptions}}',
					cornersSquareOptions: '={{$parameter.cornersSquareOptions}}',
					cornersDotOptions: '={{$parameter.cornersDotOptions}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];
