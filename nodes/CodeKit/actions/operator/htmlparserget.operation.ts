import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Parse HTML Content',
	value: OperationType.HTML_PARSER_GET,
	description: 'Extract data from HTML using CSS selectors',
	action: 'Extract data from HTML using CSS selectors',
};

export const description: INodeProperties[] = [
	{
		displayName: 'HTML Content',
		name: 'html',
		type: 'string',
		required: true,
		default: '',
		placeholder: '<html><body><h1>Hello World</h1></body></html>',
		description: 'HTML content to parse',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.HTML_PARSER_GET],
			},
		},
	},
	{
		displayName: 'CSS Selector',
		name: 'selector',
		type: 'string',
		default: '',
		placeholder: 'h1, .class-name, #ID-name',
		description: 'CSS selector to extract specific elements',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.HTML_PARSER_GET],
			},
		},
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.HTML_PARSER_GET],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/htmlparserget`,
				body: {
					html: '={{$parameter.html}}',
					selector: '={{$parameter.selector}}',
				},
			},
		},
	},
];
