import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'PDF Merge',
	value: OperationType.MERGE,
	description: 'Merge multiple pdf files to a single pdf',
	action: 'PDF Merge a pdf',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Files to Merge',
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
		options: [
			{
				displayName: 'Files',
				name: 'files',
				values: [
					{
						displayName: 'File Url or Binary Data',
						name: 'filetype',
						type: 'string',
						default: '',
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
						description: 'Specify the page ranges to split the pdf into',
						options: [
							{
								displayName: 'Page Ranges',
								name: 'range',
								values: [
									{
										displayName: 'Start Page',
										name: 'startPage',
										type: 'number',
										default: 0,
									},
									{
										displayName: 'End Page',
										name: 'endPage',
										type: 'number',
										default: 0,
									},
								],
							},
						],
					},
				],
			},
		],
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.MERGE}`,
				body: {
					files: '={{$parameter.files}}',
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
				operation: [OperationType.MERGE],
			},
		},
		default: false,
		description: 'Whether you want the PDF as an URL',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.MERGE}`,
				body: {
					getAsUrl: '={{$parameter.getAsUrl}}',
					files: '={{$parameter.files}}',
				},
			},
		},
	},
];
