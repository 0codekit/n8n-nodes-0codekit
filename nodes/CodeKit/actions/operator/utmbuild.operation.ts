import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Build UTM Link',
	value: OperatorOperation.UTM_BUILD,
	action: 'Build UTM link',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Base URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		description: 'Base URL to add UTM parameters to',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.UTM_BUILD],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/operator/utm/build',
				body: {
					url: '={{$value.url}}',
					source: '={{$value.source}}',
					medium: '={{$value.medium}}',
					campaign: '={{$value.campaign}}',
					term: '={{$value.term}}',
					content: '={{$value.content}}',
				},
			},
		},
	},
	{
		displayName: 'UTM Source',
		name: 'source',
		type: 'string',
		default: '',
		description: 'UTM source parameter',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.UTM_BUILD],
			},
		},
	},
	{
		displayName: 'UTM Medium',
		name: 'medium',
		type: 'string',
		default: '',
		description: 'UTM medium parameter',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.UTM_BUILD],
			},
		},
	},
	{
		displayName: 'UTM Campaign',
		name: 'campaign',
		type: 'string',
		default: '',
		description: 'UTM campaign parameter',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.UTM_BUILD],
			},
		},
	},
	{
		displayName: 'UTM Term',
		name: 'term',
		type: 'string',
		default: '',
		description: 'UTM term parameter',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.UTM_BUILD],
			},
		},
	},
	{
		displayName: 'UTM Content',
		name: 'content',
		type: 'string',
		default: '',
		description: 'UTM content parameter',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.UTM_BUILD],
			},
		},
	},
];
