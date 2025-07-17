import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Extract Audio From Video',
	value: OperationType.EXTRACT_AUDIO,
	description: 'Extract audio track from video file',
	action: 'Extract audio track from video file',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Video URL',
		name: 'videoUrl',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'https://example.com/video.mp4',
		description: 'URL of the video file to extract audio from',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.EXTRACT_AUDIO],
			},
		},
	},
	{
		displayName: 'Output Audio Format',
		name: 'audioFormat',
		type: 'options',
		required: true,
		options: [
			{
				name: 'FLAC',
				value: 'flac',
			},
			{
				name: 'M4A',
				value: 'm4a',
			},
			{
				name: 'MP3',
				value: 'mp3',
			},
			{
				name: 'OGG',
				value: 'ogg',
			},
			{
				name: 'WAV',
				value: 'wav',
			},
		],
		default: 'mp3',
		description: 'Format of the extracted audio file',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.EXTRACT_AUDIO],
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
				operation: [OperationType.EXTRACT_AUDIO],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/${OperationType.EXTRACT_AUDIO}`,
				body: {
					video: '={{$parameter.videoUrl}}',
					format: '={{$parameter.audioFormat}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];
