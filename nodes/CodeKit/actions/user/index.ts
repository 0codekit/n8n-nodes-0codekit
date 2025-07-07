import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import {
	description as retrieveCreditsDescription,
	option as retrieveCreditsOption,
} from './retrievecredits.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.USER],
			},
		},
		options: [retrieveCreditsOption],
		default: '',
	},
	...retrieveCreditsDescription,
];
