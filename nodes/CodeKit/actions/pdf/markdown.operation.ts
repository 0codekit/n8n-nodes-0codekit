import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Convert Markdown to PDF',
	value: OperationType.MARKDOWN_TO_PDF,
	description: 'Convert Markdown content to PDF document',
	action: 'Convert Markdown content to PDF document',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Markdown Content',
		name: 'markdown',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.MARKDOWN_TO_PDF],
			},
		},
		default: '',
		placeholder: '# Hello World\n\nThis is **bold** text.',
		description: 'Markdown content to convert to PDF',
	},
	{
		displayName: 'Return as URL',
		name: 'getAsUrl',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.MARKDOWN_TO_PDF],
			},
		},
		default: false,
		description: 'Whether to return the PDF as a downloadable URL',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.MARKDOWN_TO_PDF],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.MARKDOWN_TO_PDF}`,
				body: {
					markdown: '={{$parameter.markdown}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
				},
			},
		},
	},
];
