import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Detect Gender From Name',
	value: OperationType.GENDER,
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
				operation: [OperationType.GENDER],
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
				operation: [OperationType.GENDER],
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
