import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { description as barsDescription, option as barsOption } from './bars.operation';
import { description as doughnutDescription, option as doughnutOption } from './doughnut.operation';
import { description as lineDescription, option as lineOption } from './line.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
			},
		},
		options: [barsOption, doughnutOption, lineOption],
		default: '',
	},
	...barsDescription,
	...doughnutDescription,
	...lineDescription,
];
