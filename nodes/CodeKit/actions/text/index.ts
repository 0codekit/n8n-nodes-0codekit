import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import {
	description as compareStringDescription,
	option as compareStringOption,
} from './comparestring.operation';
import { description as containsDescription, option as containsOption } from './contains.operation';
import {
	description as extractorDescription,
	option as extractorOption,
} from './extractor.operation';
import { description as regexDescription, option as regexOption } from './regex.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.TEXT],
			},
		},
		options: [compareStringOption, containsOption, extractorOption, regexOption],
		default: '',
	},
	...compareStringDescription,
	...containsDescription,
	...extractorDescription,
	...regexDescription,
];
