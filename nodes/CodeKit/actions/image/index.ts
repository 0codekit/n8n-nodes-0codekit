import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';

import { description as blurDescription, option as blurOption } from './blur.operation';
import { description as convertDescription, option as convertOption } from './convert.operation';
import { description as cropDescription, option as cropOption } from './crop.operation';
import { description as exifDescription, option as exifOption } from './exif.operation';
import { description as flipDescription, option as flipOption } from './flip.operation';
import { description as htmlDescription, option as htmlOption } from './html.operation';
import { description as overlayDescription, option as overlayOption } from './overlay.operation';
import { description as resizeDescription, option as resizeOption } from './resize.operation';
import { description as rotateDescription, option as rotateOption } from './rotate.operation';
import { description as sharpenDescription, option as sharpenOption } from './sharpen.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.IMAGE],
			},
		},
		options: [
			blurOption,
			convertOption,
			cropOption,
			exifOption,
			flipOption,
			htmlOption,
			overlayOption,
			resizeOption,
			rotateOption,
			sharpenOption,
		],
		default: '',
	},
	...blurDescription,
	...convertDescription,
	...cropDescription,
	...exifDescription,
	...flipDescription,
	...htmlDescription,
	...overlayDescription,
	...resizeDescription,
	...rotateDescription,
	...sharpenDescription,
];
