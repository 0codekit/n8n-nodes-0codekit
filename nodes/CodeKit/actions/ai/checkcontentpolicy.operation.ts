import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Check Content Policy',
	value: OperationType.CHECK_CONTENT_POLICY,
	description: 'Check if text content complies with policy guidelines',
	action: 'Check content policy compliance',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Text Content',
		name: 'prompt',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.CHECK_CONTENT_POLICY],
			},
		},
		default: '',
		placeholder: 'e.g. This is the text to analyze for policy compliance',
		description: 'The text content to analyze for policy compliance',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.CHECK_CONTENT_POLICY],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.CHECK_CONTENT_POLICY}`,
				body: {
					prompt: '={{$parameter.prompt}}',
				},
			},
		},
	},
];
