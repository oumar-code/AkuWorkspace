# Aku Workspace

## Overview
Aku Workspace is a microservice in the Aku platform ecosystem. It provides collaborative workspace and productivity features for users and other services.

## Features
- REST API for workspace management
- Scalable Node.js backend

## Getting Started

### Prerequisites
- Node.js 20+
- Docker (optional)

### Development
```bash
git clone <repo-url>
cd AkuWorkspace
npm install
npm run dev
```

### Docker
```bash
docker build -t aku-workspace:latest .
docker run -p 8080:8080 aku-workspace:latest
```

### Testing
```bash
npm test
```

## Deployment
See `.github/workflows/ci.yml` for CI/CD pipeline.

## License
MIT
# AkuWorkspace
## Features - REST API for workspace management - Scalable Node.js backend
