import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Merge Video Audio',
	value: OperatorOperation.MERGE_VIDEO_AUDIO,
	description: 'Merge video and audio files',
	action: 'Merge video and audio files',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Video URL',
		name: 'videoUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'URL of the video file',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.MERGE_VIDEO_AUDIO],
			},
		},
		routing: {
			request: {
				method: 'POST',
				url: '/operator/merge-video-audio',
				body: {
					videoUrl: '={{$value.videoUrl}}',
					audioUrl: '={{$value.audioUrl}}',
				},
			},
		},
	},
	{
		displayName: 'Audio URL',
		name: 'audioUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'URL of the audio file',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.MERGE_VIDEO_AUDIO],
			},
		},
	},
];
