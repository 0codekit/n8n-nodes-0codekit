import { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';
export class CodeKitApi implements ICredentialType {
	name = 'codeKitApi';
	displayName = '0CodeKit API';
	documentationUrl = 'https://scalar.0codekit.com/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				auth: '={{$credentials.apiKey}}',
				ipaas: 'n8n',
			},
		},
	};
}
