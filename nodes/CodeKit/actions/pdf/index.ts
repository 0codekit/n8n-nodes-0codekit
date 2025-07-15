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
import {
	description as drawImageDescription,
	option as drawImageOption,
} from './drawimage.operation';
import { description as drawTextDescription, option as drawTextOption } from './drawtext.operation';
import { description as encryptDescription, option as encryptOption } from './encrypt.operation';
import { description as htmlDescription, option as htmlOption } from './html.operation';
import { description as markdownDescription, option as markdownOption } from './markdown.operation';
import { description as mergeDescription, option as mergeOption } from './merge.operation';
import { description as metadataDescription, option as metadataOption } from './metadata.operation';
import { description as pagesAddDescription, option as pagesAddOption } from './pagesadd.operation';
import {
	description as pagesRemoveDescription,
	option as pagesRemoveOption,
} from './pagesremove.operation';
import {
	description as pagesResizeDescription,
	option as pagesResizeOption,
} from './pagesresize.operation';
import {
	description as pagesRotateDescription,
	option as pagesRotateOption,
} from './pagesrotate.operation';
import {
	description as pdftoimageDescription,
	option as pdftoimageOption,
} from './pdftoimage.operation';
import { description as splitDescription, option as splitOption } from './split.operation';
import {
	description as watermarkImageDescription,
	option as watermarkImageOption,
} from './watermarkimage.operation';
import {
	description as watermarkTextDescription,
	option as watermarkTextOption,
} from './watermarktext.operation';

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
			drawImageOption,
			drawTextOption,
			encryptOption,
			htmlOption,
			markdownOption,
			metadataOption,
			mergeOption,
			pagesAddOption,
			pagesRemoveOption,
			pagesResizeOption,
			pagesRotateOption,
			base64Option,
			pdftoimageOption,
			splitOption,
			watermarkImageOption,
			watermarkTextOption,
		],
		default: '',
	},
	...base64Description,
	...compressDescription,
	...countDescription,
	...createDescription,
	...decryptDescription,
	...docxtopdfDescription,
	...drawImageDescription,
	...drawTextDescription,
	...encryptDescription,
	...htmlDescription,
	...markdownDescription,
	...mergeDescription,
	...metadataDescription,
	...pagesAddDescription,
	...pagesRemoveDescription,
	...pagesResizeDescription,
	...pagesRotateDescription,
	...pdftoimageDescription,
	...splitDescription,
	...watermarkImageDescription,
	...watermarkTextDescription,
];
