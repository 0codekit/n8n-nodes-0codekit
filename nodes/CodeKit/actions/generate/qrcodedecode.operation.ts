import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'QR Code Decode',
	value: OperationType.QRCODE_DECODE,
	description: 'Decode a QR code from an image',
	action: 'Decode QR code',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Image Source',
		name: 'imageSource',
		type: 'options',
		options: [
			{ name: 'Buffer', value: 'buffer' },
			{ name: 'URL', value: 'url' },
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_DECODE],
			},
		},
		default: 'url',
		description: 'Whether to provide the QR code image as a URL or Base64 buffer',
	},
	{
		displayName: 'Image URL',
		name: 'url',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_DECODE],
				imageSource: ['url'],
			},
		},
		default: '',
		description: 'The URL to the QR code image',
	},
	{
		displayName: 'Image Buffer',
		name: 'buffer',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_DECODE],
				imageSource: ['buffer'],
			},
		},
		default: '',
		description: 'The QR code as a Base64-encoded buffer',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.QRCODE_DECODE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.GENERATE}/qrcode/decode`,
				body: {
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
				},
			},
		},
	},
];
