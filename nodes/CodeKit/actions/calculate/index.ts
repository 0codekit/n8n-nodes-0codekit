import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { description as bmiDescription, option as bmiOption } from './bmi.operation';
import {
	description as geodistanceV2Description,
	option as geodistanceV2Option,
} from './geodistancev2.operation';

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
		options: [bmiOption, geodistanceV2Option],
		default: '',
	},
	...bmiDescription,
	...geodistanceV2Description,
];
