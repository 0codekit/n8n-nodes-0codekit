import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Generate Video Thumbnail',
	value: OperationType.THUMBNAIL,
	description: 'Generate thumbnail image from video',
	action: 'Generate thumbnail image from video',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Video URL',
		name: 'videoUrl',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'https://example.com/video.mp4',
		description: 'Video URL to generate thumbnail from',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.THUMBNAIL],
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
				operation: [OperationType.THUMBNAIL],
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
