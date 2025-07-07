import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'HTML Parser',
	value: OperatorOperation.HTML_PARSER_GET,
	description: 'Parse HTML content',
	action: 'Parse HTML content',
};

export const description: INodeProperties[] = [
	{
		displayName: 'HTML Content',
		name: 'html',
		type: 'string',
		required: true,
		default: '',
		description: 'HTML content to parse',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.HTML_PARSER_GET],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/operator/htmlparser/get',
				body: {
					html: '={{$value.html}}',
					selector: '={{$value.selector}}',
				},
			},
		},
	},
	{
		displayName: 'CSS Selector',
		name: 'selector',
		type: 'string',
		default: '',
		description: 'CSS selector to extract specific elements',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.HTML_PARSER_GET],
			},
		},
	},
];
