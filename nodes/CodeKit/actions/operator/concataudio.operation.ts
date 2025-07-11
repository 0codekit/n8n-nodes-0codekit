import {
	IDataObject,
	IExecuteSingleFunctions,
	IHttpRequestOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperatorOperation } from './operation.types';

export const option = {
	name: 'Concatenate Audio',
	value: OperatorOperation.CONCAT_AUDIO,
	description: 'Concatenate multiple audio files',
	action: 'Concatenate multiple audio files',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Audio URLs',
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
						description: 'URL of the audio file to concatenate',
					},
				],
			},
		],
		placeholder: 'Add Audio URL',
		description: 'Comma-separated list of audio file URLs. Minimum 2 URLs required.',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.CONCAT_AUDIO],
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
				operation: [OperatorOperation.CONCAT_AUDIO],
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
		displayName: 'Output File Name',
		name: 'fileName',
		type: 'string',
		default: 'concatenated-audio.mp3',
		description: 'Name of the output file after concatenating audio',
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
				operation: [OperatorOperation.CONCAT_AUDIO],
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
				operation: [OperatorOperation.CONCAT_AUDIO],
			},
		},
		default: '',
		routing: {
			send: {
				preSend: [setAudioFileUrls],
			},
			request: {
				method: 'POST',
				url: `/${ResourceType.OPERATOR}/${OperatorOperation.CONCAT_AUDIO}`,
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
