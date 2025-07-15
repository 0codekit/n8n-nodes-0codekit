import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Convert PDF to Base64',
	value: OperationType.BASE64,
	description: 'Convert PDF file to Base64 encoded string',
	action: 'Convert PDF file to Base64 encoded string',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF Source',
		name: 'pdf',
		type: 'string',
		description: 'PDF file URL or binary buffer data',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.BASE64],
			},
		},
		default: '',
		placeholder: 'https://example.com/document.pdf',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.BASE64],
			},
		},
		default: '',
		description: 'Name for the output file',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.BASE64],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.BASE64}`,
				body: {
					pdf: '={{$parameter.pdf}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];
