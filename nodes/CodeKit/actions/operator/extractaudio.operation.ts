import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Extract Audio',
	value: OperatorOperation.EXTRACT_AUDIO,
	description: 'Extract audio from video file',
	action: 'Extract audio from video file',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Video URL',
		name: 'videoUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'URL of the video file to extract audio from',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.EXTRACT_AUDIO],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/operator/extract-audio',
				body: {
					videoUrl: '={{$value.videoUrl}}',
				},
			},
		},
	},
];
