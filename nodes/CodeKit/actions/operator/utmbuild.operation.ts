import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Build UTM Link',
	value: OperatorOperation.UTM_BUILD,
	description: 'Add UTM parameters to URL for tracking',
	action: 'Add UTM parameters to URL for tracking',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Base URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'https://example.com/page',
		description: 'Base URL to add UTM parameters to',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.UTM_BUILD],
			},
		},
	},
	{
		displayName: 'UTM Source',
		name: 'source',
		type: 'string',
		default: '',
		placeholder: 'newsletter',
		description: 'UTM source parameter (e.g., newsletter, google)',
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
		placeholder: 'email',
		description: 'UTM medium parameter (e.g., email, social)',
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
		placeholder: 'summer-sale',
		description: 'UTM campaign parameter (e.g., summer-sale, product-launch)',
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
		placeholder: 'discount-shoes',
		description: 'UTM term parameter (e.g., discount-shoes, running-gear)',
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
		placeholder: 'header-banner',
		description: 'UTM content parameter (e.g., header-banner, footer-link)',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.UTM_BUILD],
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
				operation: [OperatorOperation.UTM_BUILD],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/utmbuild`,
				body: {
					url: '={{$parameter.url}}',
					source: '={{$parameter.source}}',
					medium: '={{$parameter.medium}}',
					campaign: '={{$parameter.campaign}}',
					term: '={{$parameter.term}}',
					content: '={{$parameter.content}}',
				},
			},
		},
	},
];
