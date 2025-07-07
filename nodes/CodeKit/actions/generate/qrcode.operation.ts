import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'QR Code',
	value: OperationType.QRCODE,
	description: 'Encode or decode a QR code',
	action: 'Generate a QR code',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'qrOperation',
		type: 'options',
		options: [
			{ name: 'Encode', value: 'encode' },
			{ name: 'Decode', value: 'decode' },
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE],
			},
		},
		default: 'encode',
		description: 'Whether to encode or decode',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.GENERATE}/qrcode/={{$value.qrOperation}}`,
			},
		},
	},
	{
		displayName: 'Text to Encode',
		name: 'text',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE],
				qrOperation: ['encode'],
			},
		},
		default: '',
		description: 'Text to encode in QR code',
		routing: {
			request: {
				body: {
					text: '={{$value.text}}',
				},
			},
		},
	},
	{
		displayName: 'QR Code Image URL',
		name: 'imageUrl',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE],
				qrOperation: ['decode'],
			},
		},
		default: '',
		description: 'URL of QR code image to decode',
		routing: {
			request: {
				body: {
					imageUrl: '={{$value.imageUrl}}',
				},
			},
		},
	},
	{
		displayName: 'Size',
		name: 'size',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE],
				qrOperation: ['encode'],
			},
		},
		default: 200,
		description: 'Size of the QR code in pixels',
	},
];
