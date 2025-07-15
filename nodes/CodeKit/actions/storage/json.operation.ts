import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'JSON Storage',
	value: OperationType.JSON,
	description: 'Store JSON data online and access it through the API',
	action: 'JSON storage operations',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'jsonop',
		type: 'options',
		options: [
			{
				name: 'Create',
				value: 'add',
				description: 'Create a new JSON bin',
				action: 'Create JSON bin',
			},
			{
				name: 'Delete',
				value: 'del',
				description: 'Delete a JSON bin permanently',
				action: 'Delete JSON bin',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a JSON bin',
				action: 'Get JSON bin',
			},
			{
				name: 'Get Many',
				value: 'list',
				description: 'Retrieve a list of JSON bins',
				action: 'Get many JSON bins',
			},
			{
				name: 'Update',
				value: 'put',
				description: 'Update an existing JSON bin',
				action: 'Update JSON bin',
			},
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.JSON],
			},
		},
		default: 'add',
	},
	{
		displayName: 'JSON Data',
		name: 'json',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.JSON],
				jsonop: ['add', 'put'],
			},
		},
		default: '',
		placeholder: 'e.g. {"name": "John", "age": 30}',
		description: 'The JSON data to store in the bin',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.STORAGE}/${OperationType.JSON}/{{$parameter.jsonop}}`,
				body: {
					json: '={{$parameter.json}}',
					binId: '={{$parameter.binId}}',
				},
			},
		},
	},
	{
		displayName: 'Bin ID',
		name: 'binId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.JSON],
				jsonop: ['get', 'del', 'put'],
			},
		},
		default: '',
		placeholder: 'e.g. 507f1f77bcf86cd799439011',
		description: 'The unique identifier of the JSON bin',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.STORAGE}/${OperationType.JSON}/{{$parameter.jsonop}}`,
				body: {
					binId: '={{$parameter.binId}}',
					json: '={{$parameter.json}}',
				},
			},
		},
	},
	// List operation without additional parameters
	{
		displayName: 'List Operation',
		name: 'listOperation',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.JSON],
				jsonop: ['list'],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.STORAGE}/${OperationType.JSON}/{{$parameter.jsonop}}`,
				body: {},
			},
		},
	},
];
