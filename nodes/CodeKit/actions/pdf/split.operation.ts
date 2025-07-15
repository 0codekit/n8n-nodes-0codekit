import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Split PDF File',
	value: OperationType.SPLIT,
	description: 'Split PDF into multiple separate files',
	action: 'Split PDF into multiple separate files',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.SPLIT],
			},
		},
		default: '',
		placeholder: 'https://example.com/document.pdf',
		description: 'Public URL of the PDF file to split',
	},
	{
		displayName: 'PDF Buffer',
		name: 'buffer',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.SPLIT],
			},
		},
		default: '',
		description: 'Binary buffer data of the PDF file',
	},
	{
		displayName: 'Split Method',
		name: 'splitMethod',
		type: 'options',
		options: [
			{
				name: 'By Page Ranges',
				value: 'pages',
			},
			{
				name: 'By Interval',
				value: 'interval',
			},
		],
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.SPLIT],
			},
		},
		default: 'pages',
		description: 'Method to split the PDF',
	},
	{
		displayName: 'Page Ranges',
		name: 'pages',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.SPLIT],
				splitMethod: ['pages'],
			},
		},
		default: {},
		placeholder: 'Add page range',
		description: 'Page ranges for splitting',
		options: [
			{
				name: 'ranges',
				displayName: 'Page Range',
				values: [
					{
						displayName: 'Range',
						name: 'range',
						type: 'string',
						default: '',
						placeholder: '1-5',
						description: 'Page range (e.g., 1-5, 10, ^1)',
					},
				],
			},
		],
	},
	{
		displayName: 'Interval',
		name: 'interval',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.SPLIT],
				splitMethod: ['interval'],
			},
		},
		default: 1,
		description: 'Number of pages per split file',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.SPLIT],
			},
		},
		default: '',
		description: 'Name prefix for the output PDF files',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.SPLIT],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.SPLIT}`,
				body: {
					url: '={{$parameter.url}}',
					buffer: '={{$parameter.buffer}}',
					pages:
						'={{$parameter.pages.ranges ? $parameter.pages.ranges.map(r => r.range) : undefined}}',
					interval: '={{$parameter.interval}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];
