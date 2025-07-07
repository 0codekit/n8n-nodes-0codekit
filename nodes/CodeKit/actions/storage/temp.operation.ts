import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Temporary Storage',
	value: OperationType.TEMP,
	description: 'Store files temporary for 24 hours',
	action: 'Temporary file storage',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Binary File Data',
		name: 'buffer',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.TEMP],
			},
		},
		default: '',
		description: 'Binary file data in base64 format',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.STORAGE}/${OperationType.TEMP}`,
				body: {
					buffer: '={{$parameter.buffer}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.TEMP],
			},
		},
		default: 'Test.txt',
		description: 'Important: If you want to keep the filetype. Add the extension to the filename.',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.STORAGE}/${OperationType.TEMP}`,
				body: {
					fileName: '={{$parameter.fileName}}',
					buffer: '={{$parameter.buffer}}',
				},
			},
		},
	},	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.STORAGE],
				operation: [OperationType.TEMP],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: /ResourceType.STORAGE/OperationType.TEMP,
				body: {
					
				},
			},
		},
	},
];