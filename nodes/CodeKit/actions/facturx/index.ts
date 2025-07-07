import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';

import * as embed from './embed.operation';
import * as validate from './validate.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.FACTURX],
			},
		},
		options: [embed.option, validate.option],
		default: '',
	},
];

export { embed, validate };
