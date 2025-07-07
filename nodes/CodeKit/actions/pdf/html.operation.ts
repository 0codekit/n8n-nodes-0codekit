import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'HTML to PDF',
	value: OperationType.HTML,
	description: 'Converts HTML Code or a URL to PDF with options',
	action: 'Html to pdf a pdf',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Get File as URL',
		name: 'getAsUrl',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.HTML],
			},
		},
		default: false,
		description: 'Whether you want the PDF as an URL',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.PDF}/${OperationType.HTML}`,
				body: {
					getAsUrl: '={{$parameter.getAsUrl}}',
					htmlSource: '={{$parameter.htmlSource}}',
					url: '={{$parameter.url}}',
					html: '={{$parameter.html}}',
				},
			},
		},
	},	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
				operation: [OperationType.HTML],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: /ResourceType.PDF/OperationType.HTML,
				body: {
					
				},
			},
		},
	},
];