import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { description as addDescription, option as addOption } from './add.operation';
import { description as deleteDescription, option as deleteOption } from './delete.operation';
import { description as getDescription, option as getOption } from './get.operation';
import { description as listDescription, option as listOption } from './list.operation';
import { description as updateDescription, option as updateOption } from './update.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.SHORTENED_URL],
			},
		},
		options: [addOption, deleteOption, getOption, listOption, updateOption],
		default: '',
	},
	...addDescription,
	...deleteDescription,
	...getDescription,
	...listDescription,
	...updateDescription,
];
