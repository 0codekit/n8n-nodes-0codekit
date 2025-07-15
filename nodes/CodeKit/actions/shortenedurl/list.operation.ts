import type { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'List Shortened URLs',
	value: OperationType.LIST,
	description: 'Retrieve all your shortened URLs',
	action: 'Retrieve all your shortened URLs',
};

export const description: INodeProperties[] = [
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.SHORTENED_URL],
				operation: [OperationType.LIST],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/generate/${ResourceType.SHORTENED_URL}/${OperationType.LIST}`,
				body: {},
			},
		},
	},
];
