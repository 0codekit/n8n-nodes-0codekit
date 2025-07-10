import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { description as base64Description, option as base64Option } from './base64.operation';
import { description as compressDescription, option as compressOption } from './compress.operation';
import { description as countDescription, option as countOption } from './count.operation';
import { description as createDescription, option as createOption } from './create.operation';
import { description as decryptDescription, option as decryptOption } from './decrypt.operation';
import {
	description as docxtopdfDescription,
	option as docxtopdfOption,
} from './docxtopdf.operation';
import { description as drawDescription, option as drawOption } from './draw.operation';
import { description as encryptDescription, option as encryptOption } from './encrypt.operation';
import { description as htmlDescription, option as htmlOption } from './html.operation';
import { description as markdownDescription, option as markdownOption } from './markdown.operation';
import { description as mergeDescription, option as mergeOption } from './merge.operation';
import { description as metadataDescription, option as metadataOption } from './metadata.operation';
import { description as pagesDescription, option as pagesOption } from './pages.operation';
import {
	description as pdftoimageDescription,
	option as pdftoimageOption,
} from './pdftoimage.operation';
import { description as splitDescription, option as splitOption } from './split.operation';
import {
	description as watermarkDescription,
	option as watermarkOption,
} from './watermark.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.PDF],
			},
		},
		options: [
			compressOption,
			countOption,
			createOption,
			decryptOption,
			docxtopdfOption,
			drawOption,
			encryptOption,
			htmlOption,
			markdownOption,
			metadataOption,
			mergeOption,
			pagesOption,
			base64Option,
			pdftoimageOption,
			splitOption,
			watermarkOption,
		],
		default: '',
	},
	...base64Description,
	...compressDescription,
	...countDescription,
	...createDescription,
	...decryptDescription,
	...docxtopdfDescription,
	...drawDescription,
	...encryptDescription,
	...htmlDescription,
	...markdownDescription,
	...mergeDescription,
	...metadataDescription,
	...pagesDescription,
	...pdftoimageDescription,
	...splitDescription,
	...watermarkDescription,
];
