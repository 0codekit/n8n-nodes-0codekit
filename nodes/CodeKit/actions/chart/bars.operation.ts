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
		displayName: 'Data Points',
		name: 'data',
		type: 'json',
		required: true,
		default: '[10, 20, 30, 40, 50]',
		placeholder: '[10, 20, 30, 40, 50]',
		description: 'Data points for the bar chart',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.BARS],
			},
		},
	},
	{
		displayName: 'Labels',
		name: 'labels',
		type: 'json',
		required: true,
		default: '["Jan", "Feb", "Mar", "Apr", "May"]',
		placeholder: '["Jan", "Feb", "Mar", "Apr", "May"]',
		description: 'Labels corresponding to the data points',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.BARS],
			},
		},
	},
	{
		displayName: 'Chart Title',
		name: 'title',
		type: 'string',
		default: '',
		placeholder: 'Sales by Month',
		description: 'Title of the chart',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.BARS],
			},
		},
	},
	{
		displayName: 'Background Color',
		name: 'backgroundColor',
		type: 'color',
		default: '#ffffff',
		placeholder: '#ffffff',
		description: 'Background color of the chart image',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.BARS],
			},
		},
	},
	{
		displayName: 'Bar Colors',
		name: 'barsColors',
		type: 'json',
		default: '["#36A2EB"]',
		placeholder: '["#36A2EB", "#FF6384"]',
		description: 'Colors for the bars in the chart',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.BARS],
			},
		},
	},
	{
		displayName: 'Border Colors',
		name: 'bordersColors',
		type: 'json',
		default: '["#36A2EB"]',
		placeholder: '["#36A2EB", "#FF6384"]',
		description: 'Colors for the borders of the bars',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.BARS],
			},
		},
	},
	{
		displayName: 'Border Width',
		name: 'borderWidth',
		type: 'number',
		default: 1,
		description: 'Width of the borders around the bars',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.BARS],
			},
		},
	},
	{
		displayName: 'Return as URL',
		name: 'getAsUrl',
		type: 'boolean',
		default: false,
		description: 'Whether to return a URL instead of the chart image',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.BARS],
			},
		},
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		default: '',
		placeholder: 'bar-chart.png',
		description: 'Optional filename for the generated chart image',
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
					data: '={{$parameter.data}}',
					labels: '={{$parameter.labels}}',
					title: '={{$parameter.title}}',
					backgroundColor: '={{$parameter.backgroundColor}}',
					barsColors: '={{$parameter.barsColors}}',
					bordersColors: '={{$parameter.bordersColors}}',
					borderWidth: '={{$parameter.borderWidth}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					fileName: '={{$parameter.fileName}}',
					width: '={{$parameter.width}}',
					height: '={{$parameter.height}}',
				},
			},
		},
	},
];
