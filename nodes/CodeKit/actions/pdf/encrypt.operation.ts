import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Encrypt PDF',
	value: OperationType.ENCRYPT,
	description: 'Add password protection to PDF file',
	action: 'Add password protection to PDF file',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.ENCRYPT],
			},
		},
		default: '',
		placeholder: 'https://example.com/document.pdf',
		description: 'Public URL of the PDF file to encrypt',
	},
	{
		displayName: 'PDF Buffer',
		name: 'buffer',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.ENCRYPT],
			},
		},
		default: '',
		description: 'Binary buffer data of the PDF file to encrypt',
	},
	{
		displayName: 'Return as URL',
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
		description: 'Whether to return the PDF as a downloadable URL',
	},
	{
		displayName: 'User Password',
		name: 'userPassword',
		type: 'string',
		typeOptions: {
			password: true,
		},
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.ENCRYPT],
			},
		},
		default: '',
		description: 'Password for user access to the PDF',
	},
	{
		displayName: 'Owner Password',
		name: 'ownerPassword',
		type: 'string',
		typeOptions: {
			password: true,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.ENCRYPT],
			},
		},
		default: '',
		description: 'Password for owner access to the PDF (optional)',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.ENCRYPT],
			},
		},
		default: '',
		description: 'Name for the output PDF file',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.ENCRYPT],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.ENCRYPT}`,
				body: {
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					userPassword: '={{$parameter.userPassword}}',
					ownerPassword: '={{$parameter.ownerPassword}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];
