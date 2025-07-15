import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Merge PDF Files',
	value: OperationType.MERGE,
	description: 'Combine multiple PDF files into a single document',
	action: 'Combine multiple PDF files into a single document',
};

export const description: INodeProperties[] = [
	{
		displayName: 'PDF Files to Merge',
		name: 'files',
		type: 'collection',
		required: true,
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.MERGE],
			},
		},
		description: 'PDF files to merge together',
		options: [
			{
				displayName: 'PDF File',
				name: 'files',
				values: [
					{
						displayName: 'File URL or Buffer',
						name: 'filetype',
						type: 'string',
						default: '',
						placeholder: 'https://example.com/document.pdf',
						description: 'URL of the PDF file or the raw binary data',
					},
					{
						displayName: 'Page Ranges',
						name: 'pages',
						type: 'fixedCollection',
						default: {},
						typeOptions: {
							multipleValues: true,
						},
						description: 'Specify page ranges to include from this PDF',
						options: [
							{
								displayName: 'Page Range',
								name: 'range',
								values: [
									{
										displayName: 'Start Page',
										name: 'startPage',
										type: 'number',
										default: 1,
										description: 'Starting page number (1-based)',
									},
									{
										displayName: 'End Page',
										name: 'endPage',
										type: 'number',
										default: 1,
										description: 'Ending page number (1-based)',
									},
								],
							},
						],
					},
				],
			},
		],
	},
	{
		displayName: 'Return as URL',
		name: 'getAsUrl',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.MERGE],
			},
		},
		default: false,
		description: 'Whether to return the PDF as a downloadable URL',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.MERGE],
			},
		},
		default: '',
		description: 'Name for the merged PDF file',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.MERGE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.MERGE}`,
				body: {
					files: '={{$parameter.files}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];
