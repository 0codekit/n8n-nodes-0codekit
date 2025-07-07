import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'PDF Pages',
	value: OperationType.PAGES,
	description: 'Manipulate PDF Pages to rotate, remove, resize and add',
	action: 'Pages editting',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF Pages',
		name: 'pagesop',
		type: 'options',
		options: [
			{
				name: 'Add',
				value: 'add',
			},
			{
				name: 'Rotate',
				value: 'rotate',
			},
			{
				name: 'Remove',
				value: 'remove',
			},
			{
				name: 'Resize',
				value: 'resize',
			},
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES],
			},
		},
		default: 'add',
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES],
			},
		},
		default: '',
		description: 'Public URL of the PDF file',
	},
	{
		displayName: 'Buffer',
		name: 'buffer',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES],
			},
		},
		default: '',
		description: 'Buffer of the PDF',
	},
	{
		displayName: 'Get File as URL',
		name: 'getAsUrl',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES],
			},
		},
		default: false,
		description: 'Whether you want the PDF as an URL',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.PAGES],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.PDF}/pages/{{$parameter.pagesop}}`,
				body: {
					pagesop: '={{$parameter.pagesop}}',
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
				},
			},
		},
	},
];
