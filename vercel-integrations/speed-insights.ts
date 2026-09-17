/**
 * Vercel Speed Insights Integration
 *
 * This file provides a utility to integrate Vercel Speed Insights into web applications
 * that use Drizzle ORM. Speed Insights helps track Core Web Vitals and performance metrics.
 *
 * Usage:
 *
 * For framework-specific implementations, import the appropriate module:
 *
 * Next.js:
 *   import { SpeedInsights } from '@vercel/speed-insights/next';
 *   // Add <SpeedInsights /> to your root layout
 *
 * React:
 *   import { SpeedInsights } from '@vercel/speed-insights/react';
 *   // Add <SpeedInsights /> to your App component
 *
 * Vue:
 *   import { SpeedInsights } from '@vercel/speed-insights/vue';
 *   // Add <SpeedInsights /> to your main component
 *
 * SvelteKit:
 *   import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
 *   // Call injectSpeedInsights() in your layout
 *
 * Generic/Vanilla JS:
 *   Use the injectSpeedInsights function below
 *
 * @see https://vercel.com/docs/speed-insights/quickstart
 */

import { injectSpeedInsights } from '@vercel/speed-insights';

/**
 * Initialize Vercel Speed Insights for vanilla JavaScript/TypeScript applications
 *
 * Call this function once in your application's entry point to start tracking
 * Core Web Vitals and performance metrics.
 *
 * @example
 * ```typescript
 * import { initSpeedInsights } from './vercel-integrations/speed-insights';
 *
 * // Initialize when your app starts
 * initSpeedInsights();
 * ```
 */
export function initSpeedInsights(): void {
	injectSpeedInsights();
}

/**
 * Re-export the inject function for direct access if needed
 */
export { injectSpeedInsights };
