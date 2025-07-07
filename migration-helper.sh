#!/bin/bash

# n8n Node Migration Helper Script
# This script helps complete the remaining operation migrations

echo "🚀 n8n Node Migration Helper"
echo "================================"

# Function to create a new operation file
create_operation_file() {
    local resource_type=$1
    local operation_name=$2
    local operation_value=$3
    local display_name=$4
    local description=$5
    local action=$6

    local file_path="nodes/CodeKit/actions/${resource_type}/${operation_name}.operation.ts"

    cat > "$file_path" << EOF
import { INodeProperties } from 'n8n-workflow';
import { ResourceType } from '../resource.types';
import { OperationType } from './operation.types';

export const option = {
	name: '${display_name}',
	value: OperationType.${operation_value},
	description: '${description}',
	action: '${action}',
};

export const description: INodeProperties[] = [
	{
		displayName: 'Input',
		name: 'input',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [ResourceType.$(echo ${resource_type^^})],
				operation: [OperationType.${operation_value}],
			},
		},
		default: '',
		description: 'Input for the operation',
		routing: {
			request: {
				method: 'POST',
				url: \`/\${ResourceType.$(echo ${resource_type^^})}/\${OperationType.${operation_value}}\`,
				body: {
					input: '={{$value.input}}',
				},
			},
		},
	},
];
EOF

    echo "✅ Created: $file_path"
}

# Function to show remaining operations for a resource
show_remaining_operations() {
    local resource=$1
    echo ""
    echo "📋 Remaining operations for $resource:"
    echo "================================"

    case $resource in
        "generate")
            echo "- color.operation.ts"
            echo "- html-scrape.operation.ts"
            echo "- jsonwebtoken-decode.operation.ts"
            echo "- jsonwebtoken-encode.operation.ts"
            echo "- mockdata-user.operation.ts"
            echo "- name.operation.ts"
            echo "- picture.operation.ts"
            echo "- qrcode.operation.ts"
            echo "- shortenedurl.operation.ts"
            ;;
        "text")
            echo "- comparestring.operation.ts"
            echo "- extractor.operation.ts"
            ;;
        "code")
            echo "- async-python.operation.ts"
            echo "- javascript.operation.ts"
            echo "- python-b2.operation.ts"
            echo "- taskstatus.operation.ts"
            ;;
        "image")
            echo "- convert.operation.ts"
            echo "- crop.operation.ts"
            echo "- exif.operation.ts"
            echo "- flip.operation.ts"
            echo "- html.operation.ts"
            echo "- overlay.operation.ts"
            echo "- rotate.operation.ts"
            echo "- sharpen.operation.ts"
            ;;
        *)
            echo "Unknown resource: $resource"
            ;;
    esac
}

# Function to update index.ts file
update_index_file() {
    local resource=$1
    echo ""
    echo "📝 To update the index.ts file for $resource:"
    echo "============================================"
    echo "1. Import the new operation files"
    echo "2. Add the options to the options array"
    echo "3. Add the descriptions to the description array"
    echo ""
    echo "Example import:"
    echo "import {"
    echo "    description as newOperationDescription,"
    echo "    option as newOperationOption,"
    echo "} from './newoperation.operation';"
    echo ""
    echo "Add to options array: newOperationOption,"
    echo "Add to descriptions: ...newOperationDescription,"
}

# Main menu
while true; do
    echo ""
    echo "🎯 Migration Options:"
    echo "1. Show remaining operations for a resource"
    echo "2. Create a new operation file (template)"
    echo "3. Show index.ts update instructions"
    echo "4. Show migration progress"
    echo "5. Exit"
    echo ""
    read -p "Choose an option (1-5): " choice

    case $choice in
        1)
            echo "Available resources: generate, text, code, image"
            read -p "Enter resource name: " resource
            show_remaining_operations "$resource"
            ;;
        2)
            echo "Create new operation file:"
            read -p "Resource type (e.g., generate): " resource_type
            read -p "Operation name (e.g., color): " operation_name
            read -p "Operation value (e.g., COLOR): " operation_value
            read -p "Display name (e.g., Generate Color): " display_name
            read -p "Description: " description
            read -p "Action: " action
            create_operation_file "$resource_type" "$operation_name" "$operation_value" "$display_name" "$description" "$action"
            ;;
        3)
            read -p "Enter resource name: " resource
            update_index_file "$resource"
            ;;
        4)
            echo ""
            echo "📊 Migration Progress:"
            echo "====================="
            echo "✅ Completed: AI, Business, Crypto, Convert"
            echo "🔄 Partial: Generate (3/12), Text (2/4), Code (1/5), Image (2/10)"
            echo "❌ Not Started: PDF, Operator, Storage, Calculate, Chart, DateAndTime"
            echo ""
            echo "Total: ~50/150+ operations migrated"
            ;;
        5)
            echo "👋 Migration helper closed. Good luck with your migration!"
            exit 0
            ;;
        *)
            echo "❌ Invalid option. Please choose 1-5."
            ;;
    esac
done
