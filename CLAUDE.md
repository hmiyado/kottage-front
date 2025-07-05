# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the frontend for "kottage" - a Japanese blog platform built with Next.js 15, React 19, and TypeScript. The application uses a component-based architecture with a clear separation between pieces (atomic components), plurals (composite components), and presentation layers.

## Development Commands

### Setup
```bash
yarn initialize  # Initialize submodules and install dependencies
```

### Development
```bash
yarn dev         # Run development server with TypeScript watching
yarn dev:noTs    # Run development server without TypeScript checking
yarn ts          # Run TypeScript type checking
yarn ts --watch  # Run TypeScript type checking in watch mode
```

### Testing
```bash
yarn test        # Run Vitest tests
```

### Building
```bash
yarn build       # Build for production
yarn start       # Start production server
```

### Linting & Formatting
```bash
yarn lint              # Run both style and Next.js linting
yarn lint:style        # Run Stylelint for CSS modules
yarn lint:next         # Run Next.js ESLint
yarn format:style      # Auto-fix CSS style issues
```

### API Client Generation
```bash
yarn generate-client    # Generate OpenAPI client from spec
yarn regenerate-client  # Remove and regenerate OpenAPI client
```

### Component Generation
```bash
yarn create-component   # Generate new component using Hygen templates
```

## Architecture

### Component Structure
The codebase follows a hierarchical component architecture:

- **pieces/**: Atomic components (buttons, text fields, avatars)
- **plurals/**: Composite components that combine pieces (forms, lists, menus)
- **presentation/**: High-level page components
- **template/**: Layout components (headers, footers, column layouts)

### Key Technologies
- **Next.js 15**: React framework with App Router
- **React 19**: UI library with Suspense and concurrent features
- **TypeScript**: Type safety with strict configuration
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Vitest**: Testing framework with jsdom environment
- **SWR**: Data fetching with suspense support
- **MSW**: Mock Service Worker for API mocking

### State Management
- **UserContext**: Global user state management via React Context
- **SWR**: Server state management with automatic revalidation

### API Integration
- **OpenAPI Generated Client**: Auto-generated TypeScript client from backend spec
- **KottageClient**: Singleton API client with CSRF protection and logging middleware
- **Custom Middleware**: Handles CSRF tokens and request/response logging

### Configuration Files
- **tsconfig.json**: TypeScript configuration (switches between dev/production)
- **next.config.js**: Next.js configuration with i18n (Japanese locale)
- **tailwind.config.js**: Custom design system with primary colors and spacing
- **vitest.config.mts**: Test configuration with React and TypeScript paths

### Backend Integration
The project includes a Git submodule (`kottage/`) containing the backend API specification. The frontend generates its TypeScript client from this specification.

### Development Workflow
1. Use different TypeScript configurations for development and production
2. Run concurrent Next.js and TypeScript checking during development
3. Generate API clients from OpenAPI specifications
4. Use Hygen templates for consistent component creation
5. Lint both CSS modules and TypeScript code

### Testing Strategy
- **Unit Tests**: Components tested with React Testing Library
- **API Mocking**: MSW for intercepting API calls
- **Setup**: Global test configuration in `src/test/setupTests.tsx`