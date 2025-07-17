import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Parse URL Query Parameters',
	value: OperationType.PARSE_URL_QUERY,
	description: 'Extract query parameters from URL',
	action: 'Extract query parameters from URL',
};

export const description: INodeProperties[] = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'https://example.com?name=John&age=30',
		description: 'URL with query parameters to parse',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.PARSE_URL_QUERY],
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
				operation: [OperationType.PARSE_URL_QUERY],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/parseurlquery`,
				body: {
					url: '={{$parameter.url}}',
				},
			},
		},
	},
];
