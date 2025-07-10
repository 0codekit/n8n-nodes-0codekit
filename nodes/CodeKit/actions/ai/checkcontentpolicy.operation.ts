import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Check Content Policy',
	value: OperationType.CHECK_CONTENT_POLICY,
	description: 'Check content policy of text',
	action: 'Check content policy',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Text',
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
		description: 'The text you want to analyse',
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
