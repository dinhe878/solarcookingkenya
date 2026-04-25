# Solar Cooking Kenya

A static informational website about integrated solar cooking in Kenya, built with Next.js 16.

## Requirements

- Node.js 20+
- npm 10+

## Local Development

```bash
npm ci          # install exact dependencies
npm run lint    # check for errors before pushing (ESLint 9 + Next.js rules)
npm run dev     # start dev server at http://localhost:3000
```

> [!NOTE]
> Always run lint before pushing. The CI pipeline does not gate on lint, so catching errors locally prevents broken deployments.

## Deployment

Two GitHub Actions workflows handle deployment automatically on push.

### Production — `solarcookingkenya.co.ke`

Triggered by pushes to `main`, then automatically executes:

1. Checks out code and sets up Node.js 20.9.0
2. Runs `npm ci && npm run build`
3. Uploads `./out/` to `/domains/solarcookingkenya.co.ke/public_html/` via FTP

### Test — `new.solarcookingkenya.co.ke`

Triggered by pushes to `test`, then automatically executes:

1. Checks out code
2. Runs `npm ci && npm run build`
3. Uploads `./out/` to `/domains/new.solarcookingkenya.co.ke/public_html/` via FTP

### Required GitHub secrets

| Secret | Description |
|---|---|
| `FTP_SERVER` | FTP host address |
| `FTP_USERNAME` | FTP username |
| `FTP_PASSWORD` | FTP password |

## Project Structure

```
src/
  app/          # Next.js App Router pages
  components/   # Reusable UI components
  constants/    # Static data (cookers, locations, routes)
  lib/          # Utility functions
public/         # Static assets (images, GeoJSON)
```
