import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Encrypt',
	value: OperationType.ENCRYPT,
	description: 'Ecrypt the PDF File',
	action: 'Encrypt pdf file',
};

export const description: INodeProperties[] = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.ENCRYPT],
			},
		},
		default: '',
		description: 'Public URL of the PDF file',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.ENCRYPT}`,
				body: {
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
				},
			},
		},
	},
	{
		displayName: 'Buffer',
		name: 'buffer',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.ENCRYPT],
			},
		},
		default: '',
		description: 'Buffer of the PDF',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.ENCRYPT}`,
				body: {
					buffer: '={{$parameter.buffer}}',
					url: '={{$parameter.url}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
				},
			},
		},
	},
	{
		displayName: 'Get File as URL',
		name: 'getAsUrl',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.ENCRYPT],
			},
		},
		default: false,
		description: 'Whether you want the PDF as an URL',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.ENCRYPT}`,
				body: {
					getAsUrl: '={{$parameter.getAsUrl}}',
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
				},
			},
		},
	},
];
