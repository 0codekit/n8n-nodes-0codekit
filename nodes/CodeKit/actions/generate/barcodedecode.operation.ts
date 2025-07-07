import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Decode Barcode',
	value: OperationType.BARCODE_DECODE,
	description: 'Decode a barcode from image',
	action: 'Decode a barcode from image',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Image Source',
		name: 'imageSource',
		type: 'options',
		options: [
			{
				name: 'URL',
				value: 'url',
			},
			{
				name: 'Buffer',
				value: 'buffer',
			},
		],
		default: 'url',
		description: 'Source of the image containing the barcode',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.BARCODE_DECODE],
			},
		},
	},
	{
		displayName: 'Image URL',
		name: 'imageUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'URL of the image containing the barcode',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.BARCODE_DECODE],
				imageSource: ['url'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/generate/barcode/decode',
				body: {
					imageUrl: '={{$value.imageUrl}}',
				},
			},
		},
	},
	{
		displayName: 'Image Buffer',
		name: 'imageBuffer',
		type: 'string',
		required: true,
		default: '',
		description: 'Base64 encoded image buffer',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.BARCODE_DECODE],
				imageSource: ['buffer'],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/generate/barcode/decode',
				body: {
					imageBuffer: '={{$value.imageBuffer}}',
				},
			},
		},
	},
];
