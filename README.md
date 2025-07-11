# n8n-nodes-0codekit

> ⚠️ **PRE-RELEASE VERSION** - This is a pre-release version of the 0CodeKit n8n community nodes. Some features may be incomplete or subject to change. Use with caution in production environments.

This is an n8n community node. It lets you use 0CodeKit in your n8n workflows.

0CodeKit brings you the tool platform for all your projects when working with low-code, no-code, APIs and automation. With over 100+ operations across multiple resources, 0CodeKit provides essential utilities for data processing, AI operations, image manipulation, PDF handling, and much more.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage Examples](#usage-examples)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### Community Installation

1. Go to **Settings > Community Nodes** in your n8n instance
2. Select **Install** and enter `@0codekit/n8n-nodes-0codekit`
3. Click **Install** and restart n8n

### Manual Installation

```bash
# In your n8n root directory
npm install @0codekit/n8n-nodes-0codekit
```

## Operations

This node provides access to 0CodeKit's comprehensive API with the following resource categories:

### 🤖 AI Operations

- **Advanced OCR**: Extract text from images with high accuracy
- **Generate JavaScript Code**: AI-powered code generation
- **Too Long To Read**: Summarize long texts
- **Check Content Policy**: Validate content against policies
- **Detect Face/Brand/Color**: Image analysis capabilities
- **Entity Detection**: Extract entities from text
- **Sentiment Analysis**: Analyze text sentiment

### 🖼️ Image Operations

- **Resize/Crop/Rotate**: Basic image transformations
- **Blur/Sharpen**: Image effects
- **Convert**: Change image formats
- **Overlay**: Add overlays to images
- **EXIF Data**: Extract image metadata
- **HTML to Image**: Convert HTML to images

### 📄 PDF Operations

- **Create/Merge/Split**: PDF manipulation
- **HTML/Markdown to PDF**: Convert content to PDF
- **Encrypt/Decrypt**: PDF security
- **Compress**: Reduce PDF file size
- **Extract Pages**: Get specific pages

### 🔢 Generate Operations

- **QR Code Encode/Decode**: Generate and read QR codes
- **Barcode Encode/Decode**: Handle various barcode formats
- **Mock Data**: Generate test data (users, names, etc.)
- **JWT Encode/Decode**: JSON Web Token operations
- **Random Data**: Generate random numbers, strings, colors

### 🔐 Crypto Operations

- **Encrypt/Decrypt**: Data encryption
- **Hash**: Generate hashes (MD5, SHA, etc.)

### 💼 Business Operations

- **Validate Email/Phone**: Verify contact information
- **Validate IBAN/BIC**: Banking validation
- **VAT Validation**: Tax number verification
- **Domain Verification**: Check domain status

### 🔧 Code Operations

- **JavaScript**: Execute JavaScript code
- **Python**: Run Python scripts
- **Async Python**: Asynchronous Python execution

### 📊 Chart Operations

- **Bar Charts**: Create bar visualizations
- **Line Charts**: Generate line graphs
- **Doughnut Charts**: Create pie charts

### 📝 Text Operations

- **Regex**: Pattern matching and extraction
- **String Comparison**: Compare text strings
- **Text Extraction**: Extract specific content

### 🔄 Convert Operations

- **Message to JSON**: Convert messages to JSON
- **Data Format Conversion**: Transform data between formats

### 🗄️ Storage Operations

- **Temporary Storage**: Store files for 24 hours
- **Permanent Storage**: Long-term file storage
- **JSON Storage**: Store JSON data
- **Global Variables**: Manage global data

### 🔗 Shortened URL Operations

- **Create/Update/Delete**: Manage short URLs
- **Analytics**: Track URL usage

### ⚙️ Operator Operations

- **Advanced Switch**: Complex conditional logic
- **HTML Parser**: Extract data from HTML
- **Duplicate Detection**: Find duplicate content
- **Extract Audio**: Get audio from video files

For a complete list of operations, visit the [0CodeKit API Documentation](https://docs.0codekit.com/api-documentation).

## Credentials

You need a 0CodeKit API key to use this node.

### Getting Your API Key

1. Sign up at [0CodeKit](https://my.0codekit.com/en/dashboard/account?utm_source=github&utm_medium=readme&utm_campaign=n8n-integration)
2. Navigate to your dashboard
3. Go to API section and generate your API key
4. Copy the API key for use in n8n

### Setting up Credentials in n8n

1. In your n8n workflow, add the 0CodeKit node
2. Click on the credential dropdown
3. Select "Create New Credential"
4. Enter your API key in the "API Key" field
5. Save the credential

For detailed setup instructions, check out our [introduction video](https://docs.0codekit.com/).

## Usage Examples

### Example 1: Generate QR Code

```json
{
	"resource": "Generate",
	"operation": "QR Code Encode",
	"text": "Hello World",
	"size": "200x200"
}
```

### Example 2: OCR Text Extraction

```json
{
	"resource": "AI",
	"operation": "Advanced OCR",
	"imageSource": "url",
	"url": "https://example.com/image.jpg"
}
```

### Example 3: Execute JavaScript

```json
{
	"resource": "Code",
	"operation": "Javascript",
	"code": "return { result: 2 + 2 };"
}
```

### Example 4: Create PDF from HTML

```json
{
	"resource": "PDF",
	"operation": "HTML to PDF",
	"html": "<h1>Hello PDF</h1><p>This is a test.</p>",
	"getAsUrl": false
}
```

## Troubleshooting

### Common Issues

**Authentication Error**: Ensure your API key is correct and has sufficient credits.

**Rate Limiting**: 0CodeKit has rate limits. Check your plan limits if you encounter 429 errors.

**Large Files**: For large file operations, consider using the temporary storage feature first.

## Support

- **Documentation**: [0CodeKit Docs](https://docs.0codekit.com/)
- **FAQ**: [Frequently Asked Questions](https://docs.0codekit.com/start)
- **Community**: [Slack Channel](https://docs.0codekit.com/)
- **Issues**: Report bugs in this repository's issues section

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [0CodeKit API Documentation](https://docs.0codekit.com/api-documentation)
- [0CodeKit Sign Up](https://my.0codekit.com/en/dashboard/account?utm_source=github&utm_medium=readme&utm_campaign=n8n-integration)
- [Interactive API Explorer](https://scalar.0codekit.com/)

## License

MIT License - see [LICENSE.md](LICENSE.md) for details.
