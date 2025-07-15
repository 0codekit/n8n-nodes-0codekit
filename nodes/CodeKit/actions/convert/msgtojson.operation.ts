import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Convert Message to JSON',
	value: OperationType.MSG_TO_JSON,
	description: 'Convert a message to a structured JSON object',
	action: 'Convert Message to JSON',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.MSG_TO_JSON],
			},
		},
		default: '',
		description: 'Message content to convert to JSON format',
		placeholder: 'e.g. Hello world, this is a test message',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CONVERT],
				operation: [OperationType.MSG_TO_JSON],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CONVERT}/${OperationType.MSG_TO_JSON}`,
				body: {
					message: '={{$parameter.message}}',
				},
			},
		},
	},
];
