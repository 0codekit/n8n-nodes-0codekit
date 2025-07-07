import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Message to JSON',
	value: OperationType.MSG_TO_JSON,
	description: 'Converts a message to a JSON object',
	action: 'Message to JSON',
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
		description: 'Message to convert to JSON',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.CONVERT}/${OperationType.MSG_TO_JSON}`,
				body: {
					message: '={{$value.message}}',
				},
			},
		},
	},	{
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
				url: /ResourceType.CONVERT/OperationType.MSG_TO_JSON,
				body: {
					
				},
			},
		},
	},
];