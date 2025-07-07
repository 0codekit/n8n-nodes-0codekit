import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import {
	description as asyncPythonDescription,
	option as asyncPythonOption,
} from './asyncpython.operation';
import {
	description as javascriptDescription,
	option as javascriptOption,
} from './javascript.operation';
import { description as pythonDescription, option as pythonOption } from './python.operation';
import { description as pythonB2Description, option as pythonB2Option } from './pythonb2.operation';
import {
	description as taskStatusDescription,
	option as taskStatusOption,
} from './taskstatus.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.CODE],
			},
		},
		options: [asyncPythonOption, javascriptOption, pythonOption, pythonB2Option, taskStatusOption],
		default: '',
	},
	...asyncPythonDescription,
	...javascriptDescription,
	...pythonDescription,
	...pythonB2Description,
	...taskStatusDescription,
];
