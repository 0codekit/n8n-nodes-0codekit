import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Split Full Name',
	value: OperatorOperation.SPLIT_NAME,
	description: 'Split full name into first and last name components',
	action: 'Split full name into first and last name components',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Full Name',
		name: 'fullName',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'John Doe',
		description: 'Full name to split into first and last name',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.SPLIT_NAME],
			},
		},
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.SPLIT_NAME],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/splitname`,
				body: {
					fullName: '={{$parameter.fullName}}',
				},
			},
		},
	},
];
