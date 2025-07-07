import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Encode Barcode',
	value: OperationType.BARCODE_ENCODE,
	description: 'Generate a barcode',
	action: 'Generate a barcode',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		default: '',
		description: 'Text to encode in the barcode',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.BARCODE_ENCODE],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/generate/barcode/encode',
				body: {
					text: '={{$value.text}}',
					format: '={{$value.format}}',
					width: '={{$value.width}}',
					height: '={{$value.height}}',
				},
			},
		},
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'options',
		options: [
			{
				name: 'Code 128',
				value: 'code128',
			},
			{
				name: 'Code 39',
				value: 'code39',
			},
			{
				name: 'EAN-13',
				value: 'ean13',
			},
			{
				name: 'EAN-8',
				value: 'ean8',
			},
			{
				name: 'UPC-A',
				value: 'upca',
			},
		],
		default: 'code128',
		description: 'Barcode format',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.BARCODE_ENCODE],
			},
		},
	},
	{
		displayName: 'Width',
		name: 'width',
		type: 'number',
		default: 200,
		description: 'Width of the barcode in pixels',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.BARCODE_ENCODE],
			},
		},
	},
	{
		displayName: 'Height',
		name: 'height',
		type: 'number',
		default: 100,
		description: 'Height of the barcode in pixels',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.BARCODE_ENCODE],
			},
		},
	},
];
