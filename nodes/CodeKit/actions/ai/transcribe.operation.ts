import { INodeProperties } from 'n8n-workflow';
import { languages } from '../../resources/languages';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Transcribe',
	value: OperationType.TRANSCRIBE,
	description: 'Transcribe audio',
	action: 'Transcribe',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Data Type',
		name: 'dataType',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.TRANSCRIBE],
			},
		},
		options: [
			{
				name: 'Use Audio File URL',
				value: 'audioUrl',
				description: 'Use an audio file URL for transcription',
				action: 'Use audio file URL for transcription',
			},
			{
				name: 'Use Audio File Buffer',
				value: 'audioBuffer',
				description: 'Use a Base64-encoded audio file for transcription',
				action: 'Use audio buffer for transcription',
			},
		],
		default: 'audioUrl',
	},
	{
		displayName: 'Audio File URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.TRANSCRIBE],
				dataType: ['audioUrl'],
			},
		},
		default: '',
		placeholder: 'https://example.com/audio.mp3',
		description: 'The URL of the audio file to transcribe',
	},
	{
		displayName: 'Audio Buffer',
		name: 'audioBuffer',
		type: 'string',
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.TRANSCRIBE],
				dataType: ['audioBuffer'],
			},
		},
		default: '',
		placeholder: 'The Base64-encoded audio file',
		description: 'The Base64-encoded audio file. Can be provided instead of URL.',
	},
	{
		displayName: 'Result Language',
		name: 'resultLang',
		type: 'options',
		options: languages,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.TRANSCRIBE],
			},
		},
		default: 'en',
		description: 'The audio language. Default is en.',
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
				operation: [OperationType.TRANSCRIBE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/${ResourceType.AI}/${OperationType.TRANSCRIBE}`,
				body: {
					dataType: '={{$parameter.dataType}}',
					url: '={{$parameter.url}}',
					audioBuffer: '={{$parameter.audioBuffer}}',
					resultLang: '={{$parameter.resultLang}}',
				},
			},
		},
	},
];
