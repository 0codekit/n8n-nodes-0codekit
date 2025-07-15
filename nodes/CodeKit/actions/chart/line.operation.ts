import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { ChartOperation } from './operation.types';

export const option = {
	name: 'Line Chart',
	value: ChartOperation.LINE,
	description: 'Generate a line chart',
	action: 'Generate a line chart',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Data Points',
		name: 'data',
		type: 'json',
		required: true,
		default: '[10, 20, 30, 40, 50]',
		placeholder: '[10, 20, 30, 40, 50]',
		description: 'Data points for the line chart',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.LINE],
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
				operation: [ChartOperation.LINE],
			},
		},
	},
	{
		displayName: 'Chart Title',
		name: 'title',
		type: 'string',
		default: '',
		placeholder: 'Sales Over Time',
		description: 'Title of the chart',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.LINE],
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
				operation: [ChartOperation.LINE],
			},
		},
	},
	{
		displayName: 'Line Colors',
		name: 'barsColors',
		type: 'json',
		default: '["#36A2EB"]',
		placeholder: '["#36A2EB", "#FF6384"]',
		description: 'Colors for the line in the chart',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.LINE],
			},
		},
	},
	{
		displayName: 'Border Colors',
		name: 'bordersColors',
		type: 'json',
		default: '["#36A2EB"]',
		placeholder: '["#36A2EB", "#FF6384"]',
		description: 'Colors for the borders of the line',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.LINE],
			},
		},
	},
	{
		displayName: 'Border Width',
		name: 'borderWidth',
		type: 'number',
		default: 2,
		description: 'Width of the borders around the line',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.LINE],
			},
		},
	},
	{
		displayName: 'Fill Under Line',
		name: 'fill',
		type: 'boolean',
		default: false,
		description: 'Whether to fill the color under the line',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.LINE],
			},
		},
	},
	{
		displayName: 'Line Tension',
		name: 'tension',
		type: 'number',
		default: 0.1,
		description: 'Tension of the line (0 = straight lines, 1 = very curved)',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.LINE],
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
				operation: [ChartOperation.LINE],
			},
		},
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		default: '',
		placeholder: 'line-chart.png',
		description: 'Optional filename for the generated chart image',
		displayOptions: {
			show: {
				resource: [ResourceType.CHART],
				operation: [ChartOperation.LINE],
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
				operation: [ChartOperation.LINE],
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
				operation: [ChartOperation.LINE],
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
				operation: [ChartOperation.LINE],
			},
		},
		default: '',
		routing: {
			request: {
				method: 'POST',
				url: `/generate/${ResourceType.CHART}/${ChartOperation.LINE}`,
				body: {
					data: '={{$parameter.data}}',
					labels: '={{$parameter.labels}}',
					title: '={{$parameter.title}}',
					backgroundColor: '={{$parameter.backgroundColor}}',
					barsColors: '={{$parameter.barsColors}}',
					bordersColors: '={{$parameter.bordersColors}}',
					borderWidth: '={{$parameter.borderWidth}}',
					fill: '={{$parameter.fill}}',
					tension: '={{$parameter.tension}}',
					getAsUrl: '={{$parameter.getAsUrl}}',
					fileName: '={{$parameter.fileName}}',
					width: '={{$parameter.width}}',
					height: '={{$parameter.height}}',
				},
			},
		},
	},
];
