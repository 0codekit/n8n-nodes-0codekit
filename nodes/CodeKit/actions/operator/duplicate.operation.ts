import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Remove Duplicates',
	value: OperatorOperation.DUPLICATE,
	description: 'Remove duplicate items from an array',
	action: 'Remove duplicate items from an array',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Array Data',
		name: 'list',
		type: 'json',
		required: true,
		default: '[]',
		placeholder: '["apple", "banana", "apple", "cherry"]',
		description: 'Array of items to remove duplicates from',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.DUPLICATE],
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
				operation: [OperatorOperation.DUPLICATE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/duplicate`,
				body: {
					list: '={{$parameter.list}}',
				},
			},
		},
	},
];
