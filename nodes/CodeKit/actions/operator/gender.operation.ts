import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Detect Gender From Name',
	value: OperatorOperation.GENDER,
	description: 'Determine gender based on first name',
	action: 'Determine gender based on first name',
};

export const description: INodeProperties[] = [
	{
		displayName: 'First Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'John',
		description: 'First name to determine gender for',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.GENDER],
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
				operation: [OperatorOperation.GENDER],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/gender`,
				body: {
					name: '={{$parameter.name}}',
				},
			},
		},
	},
];
