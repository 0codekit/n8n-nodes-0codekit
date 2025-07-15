import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Temporary Storage',
	value: OperationType.TEMP,
	description: 'Store and manage temporary data that expires after a set time',
	action: 'Manage temporary storage',
};

export const description: INodeProperties[] = [
	{
		displayName: 'File Data',
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
		placeholder: 'Binary file data in base64 format',
		description: 'Binary file data in base64 format',
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
		description: 'Include the file extension to maintain the proper file type',
	},
	{
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
				url: `/${ResourceType.STORAGE}/${OperationType.TEMP}`,
				body: {
					buffer: '={{$parameter.buffer}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];
