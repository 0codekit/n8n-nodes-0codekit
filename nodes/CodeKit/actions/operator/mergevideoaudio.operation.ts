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
	{
		displayName: 'Output File Name',
		name: 'fileName',
		type: 'string',
		default: 'merged-video-audio.mp4',
		description: 'Name of the output file after merging video and audio',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.MERGE_VIDEO_AUDIO],
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
				operation: [OperatorOperation.MERGE_VIDEO_AUDIO],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/${OperatorOperation.MERGE_VIDEO_AUDIO}`,
				body: {
					videoUrl: '={{$parameter.videoUrl}}',
					audioUrl: '={{$parameter.audioUrl}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];
