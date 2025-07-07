import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Name',
	value: OperationType.NAME,
	description: 'Get random Name',
	action: 'Generate a random name',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		options: [
			{ name: 'First Name', value: 'firstname' },
			{ name: 'Last Name', value: 'lastname' },
			{ name: 'Full Name', value: 'fullname' },
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.NAME],
			},
		},
		default: 'fullname',
		description: 'Type of name to generate',
	},
	{
		displayName: 'Gender',
		name: 'gender',
		type: 'options',
		options: [
			{ name: 'Any', value: 'any' },
			{ name: 'Male', value: 'male' },
			{ name: 'Female', value: 'female' },
		],
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.NAME],
			},
		},
		default: 'any',
		description: 'Gender for the name',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.NAME],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.GENERATE}/${OperationType.NAME}`,
				body: {
					type: '={{$parameter.type}}',
					gender: '={{$parameter.gender}}',
				},
			},
		},
	},
];
