import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Create Empty PDF',
	value: OperationType.CREATE,
	description: 'Create a new empty PDF document',
	action: 'Create a new empty PDF document',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Return as URL',
		name: 'getAsUrl',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.CREATE],
			},
		},
		default: false,
		description: 'Whether to return the PDF as a downloadable URL',
	},
	{
		displayName: 'Number of Pages',
		name: 'pages',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.CREATE],
			},
		},
		default: 1,
		description: 'Number of pages in the new PDF',
	},
	{
		displayName: 'Page Width',
		name: 'width',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.CREATE],
			},
		},
		default: 595,
		description: 'Width of the pages in points',
	},
	{
		displayName: 'Page Height',
		name: 'height',
		type: 'number',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.CREATE],
			},
		},
		default: 842,
		description: 'Height of the pages in points',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.CREATE],
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
				operation: [OperationType.CREATE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.CREATE}`,
				body: {
					getAsUrl: '={{$parameter.getAsUrl}}',
					pages: '={{$parameter.pages}}',
					width: '={{$parameter.width}}',
					height: '={{$parameter.height}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];
