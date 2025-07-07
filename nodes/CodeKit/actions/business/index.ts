import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import {
	description as isFreeMailDescription,
	option as isFreeMailOption,
} from './isfreemail.operation';
import {
	description as lookupVatRatesDescription,
	option as lookupVatRatesOption,
} from './lookupvatrates.operation';
import {
	description as validateBicDescription,
	option as validateBicOption,
} from './validatebic.operation';
import {
	description as validateEmailDescription,
	option as validateEmailOption,
} from './validateemail.operation';
import {
	description as validateGeoLocationDescription,
	option as validateGeoLocationOption,
} from './validategeolocation.operation';
import {
	description as validateIbanDescription,
	option as validateIbanOption,
} from './validateiban.operation';
import {
	description as validatePhoneNumberDescription,
	option as validatePhoneNumberOption,
} from './validatephonenumber.operation';
import {
	description as validateVatDescription,
	option as validateVatOption,
} from './validatevat.operation';
import {
	description as verifyDomainDescription,
	option as verifyDomainOption,
} from './verifydomain.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [ResourceType.BUSINESS],
			},
		},
		options: [
			isFreeMailOption,
			lookupVatRatesOption,
			validateBicOption,
			validateEmailOption,
			validateGeoLocationOption,
			validateIbanOption,
			validatePhoneNumberOption,
			validateVatOption,
			verifyDomainOption,
		],
		default: '',
	},
	...isFreeMailDescription,
	...lookupVatRatesDescription,
	...validateBicDescription,
	...validateEmailDescription,
	...validateGeoLocationDescription,
	...validateIbanDescription,
	...validatePhoneNumberDescription,
	...validateVatDescription,
	...verifyDomainDescription,
];
