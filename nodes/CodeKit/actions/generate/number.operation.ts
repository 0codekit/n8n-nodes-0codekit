import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Number',
	value: OperationType.NUMBER,
	description: 'Generate a random Number',
	action: 'Generate a random number',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Range Start',
		name: 'rangeStart',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.NUMBER],
			},
		},
		default: 0,
		description: 'Start of the range',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.GENERATE}/${OperationType.NUMBER}`,
				body: {
					rangeStart: '={{$value.rangeStart}}',
				},
			},
		},
	},
	{
		displayName: 'Range End',
		name: 'rangeEnd',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.NUMBER],
			},
		},
		default: 100,
		description: 'End of the range',
	},	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.NUMBER],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: /ResourceType.GENERATE/OperationType.NUMBER,
				body: {
					
				},
			},
		},
	},
];