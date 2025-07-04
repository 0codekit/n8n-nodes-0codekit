import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CALCULATE],
			},
		},
		options: [],
		default: '',
	},
];
