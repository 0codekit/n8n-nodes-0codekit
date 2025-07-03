import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import {
	description as detectAdultContentDescription,
	option as detectAdultContentOption,
} from './detectadultcontent.operation';
import {
	description as detectBrandDescription,
	option as detectBrandOption,
} from './detectbrand.operation';
import {
	description as detectColorDescription,
	option as detectColorOption,
} from './detectcolor.operation';
import {
	description as entityDetectionDescription,
	option as entityDetectionOption,
} from './entitydetection.operation';
import {
	description as generatePythonCodeDescription,
	option as generatePythonCodeOption,
} from './generatepythoncode.operation';
import {
	description as detectLanguageDescription,
	option as detectLanguageOption,
} from './languagedetection.operation';
import {
	description as pictureObjectRecognitionDescription,
	option as pictureObjectRecognitionOption,
} from './pictureobjectrecognition.operation';
import {
	description as pictureTextRecognitionDescription,
	option as pictureTextRecognitionOption,
} from './picturetextrecognition.operation';
import {
	description as removeBackgroundDescription,
	option as removeBackgroundOption,
} from './removebackground.operation';
import {
	description as transcribeDescription,
	option as transcribeOption,
} from './transcribe.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.AI],
			},
		},
		options: [
			detectAdultContentOption,
			pictureTextRecognitionOption,
			entityDetectionOption,
			removeBackgroundOption,
			detectBrandOption,
			generatePythonCodeOption,
			detectColorOption,
			detectLanguageOption,
			transcribeOption,
			pictureObjectRecognitionOption,
		],
		default: '',
	},
	...detectAdultContentDescription,
	...pictureTextRecognitionDescription,
	...entityDetectionDescription,
	...removeBackgroundDescription,
	...detectBrandDescription,
	...generatePythonCodeDescription,
	...detectColorDescription,
	...detectLanguageDescription,
	...transcribeDescription,
	...pictureObjectRecognitionDescription,
];
