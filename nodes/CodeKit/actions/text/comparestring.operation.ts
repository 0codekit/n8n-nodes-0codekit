import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Compare Strings',
	value: OperationType.COMPARE_STRING,
	description: 'Compare two strings and analyze their similarity',
	action: 'Compare string similarity',
};

export const description: INodeProperties[] = [
	{
		displayName: 'First String',
		name: 'string1',
		type: 'string',
		description: 'First string to compare',
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.COMPARE_STRING],
				resource: [ResourceType.TEXT],
			},
		},
		default: '',
		placeholder: 'Hello World',
	},
	{
		displayName: 'Second String',
		name: 'string2',
		type: 'string',
		description: 'Second string to compare',
		required: true,
		displayOptions: {
			show: {
				operation: [OperationType.COMPARE_STRING],
				resource: [ResourceType.TEXT],
			},
		},
		default: '',
		placeholder: 'Hello World!',
	},
	{
		displayName: 'Algorithm',
		name: 'algorithm',
		type: 'string',
		description: 'Algorithm to use to compare the strings',
		displayOptions: {
			show: {
				operation: [OperationType.COMPARE_STRING],
				resource: [ResourceType.TEXT],
			},
		},
		default: '',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.TEXT],
				operation: [OperationType.COMPARE_STRING],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.TEXT}/${OperationType.COMPARE_STRING}`,
				body: {
					string1: '={{$parameter.string1}}',
					string2: '={{$parameter.string2}}',
					algorithm: '={{$parameter.algorithm}}',
				},
			},
		},
	},
];
