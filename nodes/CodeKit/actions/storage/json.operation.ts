import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'JSON Bin Storage',
	value: OperationType.JSON,
	description: 'Store JSONs online and access them on different szenarios through our api',
	action: 'Json bin storage',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Choose a JSON Bin Operation',
		name: 'jsonop',
		type: 'options',
		options: [
			{
				name: 'Add a New JSON Bin',
				value: 'add',
			},
			{
				name: 'Delete a Stored JSON Bin',
				value: 'del',
			},
			{
				name: 'Get a JSON',
				value: 'get',
			},
			{
				name: 'List All Your JSON Bins',
				value: 'list',
			},
			{
				name: 'Update a JSON Bin',
				value: 'put',
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
		displayName: 'JSON or JSON String',
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
		routing: {
			request: {
				method: 'POST',
				url: '=/storage/json/{{$parameter.jsonop}}',
				body: {
					json: '={{$parameter.json}}',
					binId: '={{$parameter.binId}}',
				},
			},
		},
	},
	{
		displayName: 'Bin ID of the JSON',
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
		routing: {
			request: {
				method: 'POST',
				url: '=/storage/json/{{$parameter.jsonop}}',
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
				url: '=/storage/json/{{$parameter.jsonop}}',
				body: {},
			},
		},
	},
];
