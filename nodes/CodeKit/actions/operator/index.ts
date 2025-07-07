import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import {
	description as advancedSwitchDescription,
	option as advancedSwitchOption,
} from './advancedswitch.operation';
import {
	description as duplicateDescription,
	option as duplicateOption,
} from './duplicate.operation';
import {
	description as extractAudioDescription,
	option as extractAudioOption,
} from './extractaudio.operation';
import { description as genderDescription, option as genderOption } from './gender.operation';
import {
	description as htmlParserGetDescription,
	option as htmlParserGetOption,
} from './htmlparserget.operation';
import { description as logoDescription, option as logoOption } from './logo.operation';
import {
	description as mergeVideoAudioDescription,
	option as mergeVideoAudioOption,
} from './mergevideoaudio.operation';
import {
	description as parseUrlQueryDescription,
	option as parseUrlQueryOption,
} from './parseurlquery.operation';
import {
	description as splitNameDescription,
	option as splitNameOption,
} from './splitname.operation';
import {
	description as thumbnailDescription,
	option as thumbnailOption,
} from './thumbnail.operation';
import {
	description as trafficLightDescription,
	option as trafficLightOption,
} from './trafficlight.operation';
import {
	description as urlExpanderDescription,
	option as urlExpanderOption,
} from './urlexpander.operation';
import { description as utmBuildDescription, option as utmBuildOption } from './utmbuild.operation';
import { description as utmParseDescription, option as utmParseOption } from './utmparse.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.OPERATOR],
			},
		},
		options: [
			advancedSwitchOption,
			duplicateOption,
			extractAudioOption,
			genderOption,
			htmlParserGetOption,
			logoOption,
			mergeVideoAudioOption,
			parseUrlQueryOption,
			splitNameOption,
			thumbnailOption,
			trafficLightOption,
			urlExpanderOption,
			utmBuildOption,
			utmParseOption,
		],
		default: '',
	},
	...advancedSwitchDescription,
	...duplicateDescription,
	...extractAudioDescription,
	...genderDescription,
	...htmlParserGetDescription,
	...logoDescription,
	...mergeVideoAudioDescription,
	...parseUrlQueryDescription,
	...splitNameDescription,
	...thumbnailDescription,
	...trafficLightDescription,
	...urlExpanderDescription,
	...utmBuildDescription,
	...utmParseDescription,
];
