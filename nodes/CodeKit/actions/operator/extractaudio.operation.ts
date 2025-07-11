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
	},
	{
		displayName: 'Audio Format',
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
		description: 'Format of the audio file to extract',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.EXTRACT_AUDIO],
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
				operation: [OperatorOperation.EXTRACT_AUDIO],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/${OperatorOperation.EXTRACT_AUDIO}`,
				body: {
					video: '={{$parameter.videoUrl}}',
					format: '={{$parameter.audioFormat}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];
