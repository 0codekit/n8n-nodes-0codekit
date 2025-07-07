import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Global Variables',
	value: OperationType.GLOBAL_VARIABLES,
	description:
		'Store global variables online and access them on different szenarios through our api',
	action: 'Store global variables',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Choose a Global Variables Operation',
		name: 'globalvariablesop',
		type: 'options',
		options: [
			{
				name: 'Add a New Global Variable',
				value: 'add',
			},
			{
				name: 'Get a Global Variable',
				value: 'get',
			},
			{
				name: 'Delete a Global Variable',
				value: 'del',
			},
			{
				name: 'List All Your Global Variables',
				value: 'list',
			},
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.GLOBAL_VARIABLES],
			},
		},
		default: 'add',
	},
	{
		displayName: 'Variable Name',
		name: 'variableName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.GLOBAL_VARIABLES],
				globalvariablesop: ['add', 'get'],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: '=/storage/globalvariables/{{$parameter.globalvariablesop}}',
				body: {
					variableName: '={{$parameter.variableName}}',
					variableValue: '={{$parameter.variableValue}}',
				},
			},
		},
	},
	{
		displayName: 'Variable Value',
		name: 'variableValue',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.GLOBAL_VARIABLES],
				globalvariablesop: ['add'],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: '=/storage/globalvariables/{{$parameter.globalvariablesop}}',
				body: {
					variableValue: '={{$parameter.variableValue}}',
					variableName: '={{$parameter.variableName}}',
				},
			},
		},
	},
	{
		displayName: 'Variable ID',
		name: 'variableId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.GLOBAL_VARIABLES],
				globalvariablesop: ['del'],
			},
		},
		default: '',
		description:
			'Global variables can only be deleted with the matching variableId. You can list them with the "list" operation.',
		routing: {
			request: {
				method: 'POST',
				url: '=/storage/globalvariables/{{$parameter.globalvariablesop}}',
				body: {
					variableId: '={{$parameter.variableId}}',
				},
			},
		},
	},
	{
		displayName: 'List Operation',
		name: 'listOperation',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.GLOBAL_VARIABLES],
				globalvariablesop: ['list'],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: '=/storage/globalvariables/{{$parameter.globalvariablesop}}',
				body: {},
			},
		},
	},
];
