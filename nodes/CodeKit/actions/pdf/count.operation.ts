import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Count PDF Pages',
	value: OperationType.COUNT,
	description: 'Count number of pages in a PDF file',
	action: 'Count pdf pages a pdf',
};

export const description: INodeProperties[] = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.COUNT],
			},
		},
		default: '',
		description: 'Public URL of the PDF file',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.COUNT}`,
				body: {
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
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
				operation: [OperationType.COUNT],
			},
		},
		default: '',
		description: 'Buffer of the PDF',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.COUNT}`,
				body: {
					buffer: '={{$parameter.buffer}}',
					url: '={{$parameter.url}}',
				},
			},
		},
	},
];
