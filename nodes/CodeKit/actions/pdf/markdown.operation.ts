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
		name: 'markdownString',
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
		displayName: 'Custom CSS',
		name: 'css',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.MARKDOWN_TO_PDF],
			},
		},
		default: '',
		placeholder: 'body { font-family: Arial; }',
		description: 'Custom CSS to style the Markdown content',
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
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.MARKDOWN_TO_PDF],
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
				operation: [OperationType.MARKDOWN_TO_PDF],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.MARKDOWN_TO_PDF}`,
				body: {
					markdownString: '={{$parameter.markdownString}}',
					css: '={{$parameter.css}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];
