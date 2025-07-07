import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'String',
	value: OperationType.STRING,
	description: 'Generate a random String',
	action: 'Generate a random string',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Length',
		name: 'length',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.STRING],
			},
		},
		default: 10,
		description: 'Length of the string to generate',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.GENERATE}/${OperationType.STRING}`,
				body: {
					length: '={{$value.length}}',
				},
			},
		},
	},
	{
		displayName: 'Include Numbers',
		name: 'includeNumbers',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.STRING],
			},
		},
		default: true,
		description: 'Whether to include numbers in the generated string',
	},
	{
		displayName: 'Include Uppercase',
		name: 'includeUppercase',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.STRING],
			},
		},
		default: true,
		description: 'Whether to include uppercase letters in the generated string',
	},
	{
		displayName: 'Include Lowercase',
		name: 'includeLowercase',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.STRING],
			},
		},
		default: true,
		description: 'Whether to include lowercase letters in the generated string',
	},
	{
		displayName: 'Include Symbols',
		name: 'includeSymbols',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
				operation: [OperationType.STRING],
			},
		},
		default: false,
		description: 'Whether to include symbols in the generated string',
	},
];
