import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import {
	description as barcodeDecodeDescription,
	option as barcodeDecodeOption,
} from './barcodedecode.operation';
import {
	description as barcodeEncodeDescription,
	option as barcodeEncodeOption,
} from './barcodeencode.operation';
import { description as cityDescription, option as cityOption } from './city.operation';
import { description as colorDescription, option as colorOption } from './color.operation';
import {
	description as htmlScrapeDescription,
	option as htmlScrapeOption,
} from './htmlscrape.operation';
import {
	description as jsonwebtokenDecodeDescription,
	option as jsonwebtokenDecodeOption,
} from './jsonwebtokendecode.operation';
import {
	description as jsonwebtokenEncodeDescription,
	option as jsonwebtokenEncodeOption,
} from './jsonwebtokenencode.operation';
import {
	description as mockdataUserDescription,
	option as mockdataUserOption,
} from './mockdatauser.operation';
import { description as nameDescription, option as nameOption } from './name.operation';
import { description as numberDescription, option as numberOption } from './number.operation';
import { description as qrCodeDescription, option as qrCodeOption } from './qrcode.operation';
import {
	description as shortenedUrlDescription,
	option as shortenedUrlOption,
} from './shortenedurl.operation';
import { description as stringDescription, option as stringOption } from './string.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.GENERATE],
			},
		},
		options: [
			barcodeDecodeOption,
			barcodeEncodeOption,
			cityOption,
			colorOption,
			htmlScrapeOption,
			jsonwebtokenDecodeOption,
			jsonwebtokenEncodeOption,
			mockdataUserOption,
			nameOption,
			numberOption,
			qrCodeOption,
			shortenedUrlOption,
			stringOption,
		],
		default: '',
	},
	...barcodeDecodeDescription,
	...barcodeEncodeDescription,
	...cityDescription,
	...colorDescription,
	...htmlScrapeDescription,
	...jsonwebtokenDecodeDescription,
	...jsonwebtokenEncodeDescription,
	...mockdataUserDescription,
	...nameDescription,
	...numberDescription,
	...qrCodeDescription,
	...shortenedUrlDescription,
	...stringDescription,
];
