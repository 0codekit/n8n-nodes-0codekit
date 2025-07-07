import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import {
	description as advancedOcrDescription,
	option as advancedOcrOption,
} from './advancedocr.operation';
import {
	description as checkContentPolicyDescription,
	option as checkContentPolicyOption,
} from './checkcontentpolicy.operation';
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
	description as detectEmailTypeDescription,
	option as detectEmailTypeOption,
} from './detectemailtype.operation';
import {
	description as detectFaceDescription,
	option as detectFaceOption,
} from './detectface.operation';
import {
	description as entityDetectionDescription,
	option as entityDetectionOption,
} from './entitydetection.operation';
import {
	description as extractContactInformationDescription,
	option as extractContactInformationOption,
} from './extractcontactinformation.operation';
import {
	description as extractFromTextDescription,
	option as extractFromTextOption,
} from './extractfromtext.operation';
import {
	description as fuzzyMatchDescription,
	option as fuzzyMatchOption,
} from './fuzzymatch.operation';
import {
	description as generateImageDescription,
	option as generateImageOption,
} from './generateimage.operation';
import {
	description as generateJavascriptCodeDescription,
	option as generateJavascriptCodeOption,
} from './generatejavascriptcode.operation';
import {
	description as generatePythonCodeDescription,
	option as generatePythonCodeOption,
} from './generatepythoncode.operation';
import {
	description as detectLanguageDescription,
	option as detectLanguageOption,
} from './languagedetection.operation';
import {
	description as moodDetectionDescription,
	option as moodDetectionOption,
} from './mooddetection.operation';
import { description as pdfOcrDescription, option as pdfOcrOption } from './pdfocr.operation';
import {
	description as pictureObjectRecognitionDescription,
	option as pictureObjectRecognitionOption,
} from './pictureobjectrecognition.operation';
import {
	description as pictureTextRecognitionDescription,
	option as pictureTextRecognitionOption,
} from './picturetextrecognition.operation';
import {
	description as redactPdfDescription,
	option as redactPdfOption,
} from './redactpdf.operation';
import {
	description as removeBackgroundDescription,
	option as removeBackgroundOption,
} from './removebackground.operation';
import {
	description as toolongtoreadDescription,
	option as toolongtoreadOption,
} from './toolongtoread.operation';
import {
	description as transcribeDescription,
	option as transcribeOption,
} from './transcribe.operation';
import {
	description as translateDescription,
	option as translateOption,
} from './translate.operation';

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
			advancedOcrOption,
			checkContentPolicyOption,
			detectAdultContentOption,
			detectBrandOption,
			detectColorOption,
			detectEmailTypeOption,
			detectFaceOption,
			entityDetectionOption,
			extractContactInformationOption,
			extractFromTextOption,
			fuzzyMatchOption,
			generateImageOption,
			generateJavascriptCodeOption,
			generatePythonCodeOption,
			detectLanguageOption,
			moodDetectionOption,
			pdfOcrOption,
			pictureObjectRecognitionOption,
			pictureTextRecognitionOption,
			redactPdfOption,
			removeBackgroundOption,
			toolongtoreadOption,
			transcribeOption,
			translateOption,
		],
		default: '',
	},
	...advancedOcrDescription,
	...checkContentPolicyDescription,
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
	...detectEmailTypeDescription,
	...detectFaceDescription,
	...extractContactInformationDescription,
	...extractFromTextDescription,
	...fuzzyMatchDescription,
	...generateImageDescription,
	...generateJavascriptCodeDescription,
	...moodDetectionDescription,
	...pdfOcrDescription,
	...redactPdfDescription,
	...toolongtoreadDescription,
	...translateDescription,
];
