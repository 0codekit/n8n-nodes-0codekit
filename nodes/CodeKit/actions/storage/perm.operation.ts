import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Permanent Storage',
	value: OperationType.PERM,
	description: 'Store and manage permanent data that persists indefinitely',
	action: 'Manage permanent storage',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Operation Type',
		name: 'permfilesop',
		type: 'options',
		options: [
			{
				name: 'Store File',
				value: 'add',
			},
			{
				name: 'Get File',
				value: 'get',
			},
			{
				name: 'Delete File',
				value: 'del',
			},
			{
				name: 'List Files',
				value: 'list',
			},
		],
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.PERM],
			},
		},
		default: 'add',
	},
	{
		displayName: 'File Data',
		name: 'fileBuffer',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.PERM],
				permfilesop: ['add'],
			},
		},
		default: '',
		placeholder: 'Binary file data in base64 format',
		description: 'Binary file data in base64 format',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.STORAGE}/${OperationType.PERM}/{{$parameter.permfilesop}}`,
				body: {
					fileBuffer: '={{$parameter.fileBuffer}}',
					uploadName: '={{$parameter.uploadName}}',
				},
			},
		},
	},
	{
		displayName: 'File Name',
		name: 'uploadName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.PERM],
				permfilesop: ['add'],
			},
		},
		default: 'Test.txt',
		description: 'Important: If you want to keep the filetype. Add the extension to the filename.',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.STORAGE}/${OperationType.PERM}/{{$parameter.permfilesop}}`,
				body: {
					uploadName: '={{$parameter.uploadName}}',
					fileBuffer: '={{$parameter.fileBuffer}}',
				},
			},
		},
	},
	{
		displayName: 'File ID',
		name: 'fileId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.PERM],
				permfilesop: ['del', 'get'],
			},
		},
		default: '',
		description: 'You can list your files and file IDs with the "list" operation',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.STORAGE}/${OperationType.PERM}/{{$parameter.permfilesop}}`,
				body: {
					fileId: '={{$parameter.fileId}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
				},
			},
		},
	},
	{
		displayName: 'Get File as URL',
		name: 'getAsUrl',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.PERM],
				permfilesop: ['get'],
			},
		},
		default: false,
		description: 'Whether you want the file as an URL',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.STORAGE}/${OperationType.PERM}/{{$parameter.permfilesop}}`,
				body: {
					getAsUrl: '={{$parameter.getAsUrl}}',
					fileId: '={{$parameter.fileId}}',
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
				operation: [OperationType.PERM],
				permfilesop: ['list'],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `=/${ResourceType.STORAGE}/${OperationType.PERM}/{{$parameter.permfilesop}}`,
				body: {},
			},
		},
	},
];
