import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { description as addDescription, option as addOption } from './add.operation';
import { description as delDescription, option as delOption } from './del.operation';
import { description as listDescription, option as listOption } from './list.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.SCHEDULER],
			},
		},
		options: [addOption, delOption, listOption],
		default: '',
	},
	...addDescription,
	...delDescription,
	...listDescription,
];
