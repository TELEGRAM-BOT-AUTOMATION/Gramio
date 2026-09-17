# Vercel Integrations

This directory contains utilities for integrating Vercel services with projects using Drizzle ORM.

## Speed Insights

Vercel Speed Insights is included in this project to help track Core Web Vitals and performance metrics in web applications.

### Installation

The `@vercel/speed-insights` package is already installed as a dev dependency. No additional installation is required.

### Usage

#### For Web Applications

If you're building a web application that uses Drizzle ORM, you can add Speed Insights to track performance:

**Next.js (v13.5+)**
```typescript
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

**React / Create React App**
```typescript
// App.tsx
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div>
      {/* Your app content */}
      <SpeedInsights />
    </div>
  );
}
```

**Vue**
```vue
<!-- App.vue -->
<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <div>
    <!-- Your app content -->
    <SpeedInsights />
  </div>
</template>
```

**SvelteKit**
```typescript
// src/routes/+layout.ts
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

injectSpeedInsights();
```

**Vanilla JavaScript/TypeScript**
```typescript
import { initSpeedInsights } from './vercel-integrations/speed-insights';

// Initialize when your app starts
initSpeedInsights();
```

### Deployment

Speed Insights requires deployment to Vercel to collect metrics:

1. Connect your repository to Vercel
2. Deploy your application
3. Visit your project dashboard on Vercel
4. Navigate to "Speed Insights" in the sidebar to view metrics

### Documentation

For more information, visit:
- [Speed Insights Quickstart](https://vercel.com/docs/speed-insights/quickstart)
- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)

### Notes

- Speed Insights is available on all Vercel plans
- Data collection routes are automatically included at `/_vercel/speed-insights/*`
- Metrics appear after several days of visitor activity
- Upgrade to Speed Insights Plus for comprehensive Core Web Vitals and advanced features
