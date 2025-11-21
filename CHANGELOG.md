# Changelog

All notable changes to the Gmail MCP Server will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-11-21

### Added
- **Label Management Tools**
  - `create_label`: Create new Gmail labels with customizable visibility settings
  - `delete_label`: Delete user-created labels (prevents deletion of system labels)
  - `update_label`: Update label names and visibility settings
  - `remove_labels`: Remove labels from emails (complements existing `add_labels`)

### Improved
- **Error Handling**
  - `get_email_thread`: Now provides clear error message when Message ID is used instead of Thread ID
  - Added helpful guidance in error messages explaining difference between Message ID and Thread ID
  - Better validation and error messages for thread retrieval

- **Email Body Extraction**
  - Enhanced `extractEmailBody` to handle complex multi-part email structures
  - Added recursive parsing for nested email parts (e.g., multipart/alternative)
  - HTML fallback when text/plain is not available
  - Better handling of edge cases in email body extraction

- **Search Results**
  - `search_emails`: Now clearly labels Message ID vs Thread ID in output
  - Added inline hint "(use this for get_email_thread)" next to Thread ID
  - Helps prevent common confusion between Message ID and Thread ID

### Changed
- Increased thread body preview from 500 to 2000 characters for better context
- Updated version to 1.1.0 in both package.json and server
- Added `format: 'full'` to `get_email_thread` for more complete thread retrieval

### Documentation
- Updated README with new label management features
- Added "What's New in v1.1.0" section with feature highlights
- Reorganized "What You Can Ask Claude" section with categories
- Added examples for all new label management commands

## [1.0.0] - 2025-01-XX

### Added
- Initial release of Gmail MCP Server
- Email reading with filters and queries
- Email sending capability
- Email search with Gmail query syntax
- Draft creation
- Thread retrieval
- Label listing
- Mark emails as read
- Add labels to emails
- OAuth2 authentication flow
- Comprehensive documentation and installation guide
