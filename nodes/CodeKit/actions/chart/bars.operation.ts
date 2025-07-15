import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { ChartOperation } from './operation.types';

export const option = {
	name: 'Bars Chart',
	value: ChartOperation.BARS,
	description: 'Generate a bar chart',
	action: 'Generate a bar chart',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Chart Data',
		name: 'chartData',
		type: 'json',
		required: true,
		default: '{}',
		description:
			'Chart data in JSON format. For more information, refer to the 0CodeKit API documentation.',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.BARS],
			},
		},
	},
	{
		displayName: 'Chart Options',
		name: 'chartOptions',
		type: 'json',
		default: '{}',
		description:
			'Chart options in JSON format. For more information, refer to the 0CodeKit API documentation.',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.BARS],
			},
		},
	},
	{
		displayName: 'Width',
		name: 'width',
		type: 'number',
		default: 800,
		description: 'Width of the chart in pixels',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.BARS],
			},
		},
	},
	{
		displayName: 'Height',
		name: 'height',
		type: 'number',
		default: 600,
		description: 'Height of the chart in pixels',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.BARS],
			},
		},
	},
	{
		displayName: '',
		name: 'routing',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.BARS],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/generate/${ResourceType.CHART}/${ChartOperation.BARS}`,
				body: {
					chartData: '={{$parameter.chartData}}',
					chartOptions: '={{$parameter.chartOptions}}',
					width: '={{$parameter.width}}',
					height: '={{$parameter.height}}',
				},
			},
		},
	},
];
