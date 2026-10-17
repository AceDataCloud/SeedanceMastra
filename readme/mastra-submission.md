# Proposed community integration: Seedance by Ace Data Cloud

Prepared 2026-10-18; not submitted and not officially listed.

## Integration surface

An independent `@acedatacloud/mastra-seedance` ToolProvider, registering as **Seedance by Ace Data Cloud** under `seedance`. Users can search Seedance video, AI video, image animation, image-to-video, generation, and task queries. Branding describes the service and identifies Ace Data Cloud as the maintainer; it does not claim a Seedance or Mastra partnership.

Source: https://github.com/AceDataCloud/SeedanceMastra

The adapter reuses the existing canonical Seedance MCP protocol/schemas instead of duplicating its API client. It supports server-owned API-key authentication, catalog/search/pagination, exact tool allowlists, original JSON schemas, description overrides and executable Mastra tools. It calls tools once, preserves async task IDs, and rejects JSON/MCP errors and explicit failed tasks. It has no per-user OAuth capability.

## Proposed official documentation entry

Suggested title: **Seedance by Ace Data Cloud**.

Suggested description: **Add Seedance video generation, image-to-video, and same-task result queries to Mastra agents through an independent ToolProvider.**

Proposed path, subject to maintainer feedback: `docs/src/content/en/integrations/tools/seedance.mdx`. Do not hand-edit generated model documentation. Link the real released package and the bilingual onboarding guide after release; include server configuration and generation/query tool examples. Keep pricing on the live service page.

## Contribution and admission gates

Mastra's CONTRIBUTING.md requires a linked issue for every PR and maintainer feedback before a new feature PR. No public self-service ToolProvider marketplace uploader or arbitrary Connect admission manifest has been established. Do not invent one or equate npm publication with official listing. Submit a concise technical documentation/integration request under the normal contribution process once the package is publicly released and the Studio entry has been visually checked. Do not submit a competing models.dev provider PR; #8873 has a separate owner.

## Free verification recipe for the UI owner

Use a disposable existing Mastra project with core 1.75.0, editor 0.16.0, database storage and an existing code-defined agent. Install the candidate tarball, register SeedanceToolProvider in MastraEditor, and use the existing authorized server key only for MCP discovery. Open Studio → Agents → agent → Editor → Tools → Integration Tools. Search/select Seedance by Ace Data Cloud, inspect the toolkit, select `seedance_list_actions` and `seedance_get_task`, and save a draft. Capture the real service name, tool list and schema; redact keys. Call only `seedance_list_actions`; do not call generation or query arbitrary customer tasks. This verifies local registered UI, not global official discovery.

For an offline screen capture, use an existing local MCP fixture with dummy credentials. Label that capture as a local fixture, not a hosted authorization test. GUI services/screens are coordinated elsewhere; this package task does not start Studio.
