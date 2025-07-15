import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Manage PDF Metadata',
	value: OperationType.METADATA,
	description: 'View or edit PDF document metadata information',
	action: 'View or edit PDF document metadata information',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Metadata Operation',
		name: 'metadataop',
		type: 'options',
		options: [
			{
				name: 'Edit Metadata',
				value: 'edit',
			},
			{
				name: 'Get Metadata',
				value: 'info',
			},
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.METADATA],
			},
		},
		default: 'edit',
		description: 'Choose to view or edit PDF metadata',
	},
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.METADATA],
			},
		},
		default: '',
		placeholder: 'https://example.com/document.pdf',
		description: 'Public URL of the PDF file',
	},
	{
		displayName: 'PDF Buffer',
		name: 'buffer',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.METADATA],
			},
		},
		default: '',
		description: 'Binary buffer data of the PDF file',
	},
	{
		displayName: 'Return as URL',
		name: 'getAsUrl',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.METADATA],
			},
		},
		default: false,
		description: 'Whether to return the PDF as a downloadable URL',
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.METADATA],
				metadataop: ['edit'],
			},
		},
		default: '',
		description: 'Title of the PDF document',
	},
	{
		displayName: 'Author',
		name: 'author',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.METADATA],
				metadataop: ['edit'],
			},
		},
		default: '',
		description: 'Author of the PDF document',
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.METADATA],
				metadataop: ['edit'],
			},
		},
		default: '',
		description: 'Subject of the PDF document',
	},
	{
		displayName: 'Keywords',
		name: 'keywords',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.METADATA],
				metadataop: ['edit'],
			},
		},
		default: {},
		description: 'Keywords for the PDF document',
		options: [
			{
				name: 'items',
				displayName: 'Keyword',
				values: [
					{
						displayName: 'Keyword',
						name: 'keyword',
						type: 'string',
						default: '',
						description: 'A keyword for the PDF document',
					},
				],
			},
		],
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.METADATA],
				metadataop: ['edit'],
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
				operation: [OperationType.METADATA],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.PDF}/${OperationType.METADATA}/{{$parameter.metadataop}}`,
				body: {
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					title: '={{$parameter.title}}',
					author: '={{$parameter.author}}',
					subject: '={{$parameter.subject}}',
					keywords:
						'={{$parameter.keywords.items ? $parameter.keywords.items.map(k => k.keyword) : undefined}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];
