import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Markdown to Pdf',
	value: OperationType.MARKDOWN_TO_PDF,
	description: 'Convert Markdown to PDF',
	action: 'Markdown to pdf',
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
		description: 'Markdown content to convert to PDF',
	},
	{
		displayName: 'Get File as URL',
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
		description: 'Whether you want the PDF as an URL',
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
