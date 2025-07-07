import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import {
	description as globalvariablesDescription,
	option as globalvariablesOption,
} from './globalvariables.operation';
import { description as jsonDescription, option as jsonOption } from './json.operation';
import { description as permDescription, option as permOption } from './perm.operation';
import { description as tempDescription, option as tempOption } from './temp.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
			},
		},
		options: [jsonOption, globalvariablesOption, tempOption, permOption],
		default: '',
	},
	...jsonDescription,
	...globalvariablesDescription,
	...tempDescription,
	...permDescription,
];
