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

Deployment is automated via GitHub Actions on every push to `main`. The workflow:

1. Runs `npm ci && npm run build`
2. Uploads the `./out/` folder to the host via FTP

Required GitHub secrets:

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
