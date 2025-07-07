import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Extract Contact Information',
	value: OperationType.EXTRACT_CONTACT_INFORMATION,
	description: 'Extract contact information from text',
	action: 'Extract contact information',
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
				operation: [OperationType.EXTRACT_CONTACT_INFORMATION],
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
				operation: [OperationType.EXTRACT_CONTACT_INFORMATION],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.EXTRACT_CONTACT_INFORMATION}`,
				body: {
					prompt: '={{$parameter.prompt}}',
				},
			},
		},
	},
];
