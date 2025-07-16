# n8n-nodes-0codekit

This is an n8n community node. It lets you use 0CodeKit in your n8n workflows.

0CodeKit brings you the tool platform for all your projects when working with low-code, no-code, APIs and automation. With over 100+ operations across multiple resources, 0CodeKit provides essential utilities for data processing, AI operations, image manipulation, PDF handling, and much more.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Troubleshooting](#troubleshooting)
[Support](#support)
[Resources](#resources)
[License](#license)

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

1. Sign up at [0CodeKit](https://my.0codekit.com/en/auth/login?utm_source=github&utm_medium=readme&utm_campaign=n8n-integration)
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

## Troubleshooting

### Common Issues

**Authentication Error**: Ensure your API key is correct and has sufficient credits.

**Rate Limiting**: 0CodeKit has rate limits. Check your plan limits if you encounter 429 errors.

**Large Files**: For large file operations, consider using the temporary storage feature first.

## Support

- **Documentation**: [0CodeKit Docs](https://docs.0codekit.com/)
- **Support Ticket**: [Open a Ticket](https://www.0codekit.com/support)
- **Community**: [Slack Channel](https://join.slack.com/t/limitless1saasco/shared_invite/zt-10ep0xau8-fu_iMjqcw_o67~bD_zhWtw)
- **Issues**: Report bugs in this repository's issues section

## Resources

- [0CodeKit Website](https://www.0codekit.com/)
- [0CodeKit API Documentation](https://docs.0codekit.com/api/0-codekit-api/)
- [0CodeKit Sign Up](https://my.0codekit.com/en/auth/login?utm_source=github&utm_medium=readme&utm_campaign=n8n-integration)
- [Tutorial Videos](https://docs.0codekit.com/main/tutorials)
- [Youtube Channel](https://www.youtube.com/@0CodeKit)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)

## License

MIT License - see [LICENSE.md](LICENSE.md) for details.
