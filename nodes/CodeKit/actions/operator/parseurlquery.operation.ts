import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Parse URL Query',
	value: OperatorOperation.PARSE_URL_QUERY,
	description: 'Parse URL query parameters',
	action: 'Parse URL query parameters',
};

export const description: INodeProperties[] = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		description: 'URL with query parameters to parse',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.PARSE_URL_QUERY],
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
				operation: [OperatorOperation.PARSE_URL_QUERY],
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
