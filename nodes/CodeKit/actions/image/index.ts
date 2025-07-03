import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';

import { description as blurDescription, option as blurOption } from './blur.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
			},
		},
		options: [blurOption],
		default: '',
	},
	...blurDescription,
];
