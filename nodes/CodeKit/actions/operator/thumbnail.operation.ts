import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Get Video Thumbnail',
	value: OperatorOperation.THUMBNAIL,
	description: 'Get thumbnail for video',
	action: 'Get thumbnail for video',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Video URL',
		name: 'videoUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'Video URL to get thumbnail from',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.THUMBNAIL],
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
				operation: [OperatorOperation.THUMBNAIL],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/thumbnail`,
				body: {
					videoUrl: '={{$parameter.videoUrl}}',
				},
			},
		},
	},
];
