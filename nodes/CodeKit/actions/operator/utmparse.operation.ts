import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Parse UTM Parameters',
	value: OperatorOperation.UTM_PARSE,
	description: 'Extract UTM parameters from URL',
	action: 'Extract UTM parameters from URL',
};

export const description: INodeProperties[] = [
	{
		displayName: 'URL with UTM Parameters',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'https://example.com?utm_source=newsletter&utm_medium=email',
		description: 'URL with UTM parameters to parse',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.UTM_PARSE],
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
				operation: [OperatorOperation.UTM_PARSE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/utmparse`,
				body: {
					url: '={{$parameter.url}}',
				},
			},
		},
	},
];
