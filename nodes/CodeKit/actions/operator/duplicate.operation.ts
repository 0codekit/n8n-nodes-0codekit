import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Remove Duplicates',
	value: OperatorOperation.DUPLICATE,
	description: 'Remove duplicates from list',
	action: 'Remove duplicates from list',
};

export const description: INodeProperties[] = [
	{
		displayName: 'List',
		name: 'list',
		type: 'json',
		required: true,
		default: '[]',
		description: 'Array of items to remove duplicates from',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.DUPLICATE],
			},
		}',
				},
			},
		},
	},	{
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
				url: /ResourceType.OPERATOR/OperatorOperation.DUPLICATE,
				body: {
					
				},
			},
		},
	},
];