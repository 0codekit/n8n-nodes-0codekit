import {
	IDataObject,
	IExecuteSingleFunctions,
	IHttpRequestOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: 'Concatenate Audio Files',
	value: OperationType.CONCAT_AUDIO,
	description: 'Combine multiple audio files into a single file',
	action: 'Combine multiple audio files into a single file',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Audio File URLs',
		name: 'audioUrls',
		type: 'fixedCollection',
		required: true,
		default: [],
		typeOptions: {
			multipleValues: true,
			multipleValueButtonText: 'Add Audio URL',
		},
		options: [
			{
				name: 'audioUrl',
				displayName: 'Audio URL',
				values: [
					{
						displayName: 'Audio URL',
						name: 'audioUrl',
						type: 'string',
						default: '',
						placeholder: 'https://example.com/audio.mp3',
						description: 'URL of the audio file to concatenate',
					},
				],
			},
		],
		placeholder: 'Add Audio URL',
		description: 'Audio file URLs to concatenate. Minimum 2 URLs required.',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.CONCAT_AUDIO],
			},
		},
	},
	{
		displayName: 'Audio URL',
		name: 'audioUrl',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'https://example.com/audio.mp3',
		description: 'URL of the audio file',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.CONCAT_AUDIO],
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
		description: 'Output format for the concatenated audio file',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.CONCAT_AUDIO],
			},
		},
	},
	{
		displayName: 'Output File Name',
		name: 'fileName',
		type: 'string',
		default: 'concatenated-audio.mp3',
		placeholder: 'my-audio-file.mp3',
		description: 'Name of the output file after concatenating audio',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperationType.CONCAT_AUDIO],
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
				operation: [OperationType.CONCAT_AUDIO],
			},
		},
		default: '',
		routing: {
			send: {
				preSend: [setAudioFileUrls],
			},
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/${OperationType.CONCAT_AUDIO}`,
				body: {
					audio: '={{$parameter.audioUrls}}',
					format: '={{$parameter.audioUrl}}',
					fileName: '={{$parameter.fileName}}',
				},
			},
		},
	},
];

export async function setAudioFileUrls(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const audioUrls = this.getNodeParameter('audioUrls') as IDataObject[];
	requestOptions.body.audio = audioUrls.map((url) => url.audioUrl).join(',');
	return requestOptions;
}
