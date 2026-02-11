# Getting started with Vercel Web Analytics

This guide will help you get started with using Vercel Web Analytics on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.

## Implementation Status

✅ **Vercel Web Analytics is already implemented in this project!**

The `@vercel/analytics` package (v1.6.1) is installed and the `Analytics` component is properly integrated in `src/App.jsx`.

## Prerequisites

- A Vercel account. If you don't have one, you can [sign up for free](https://vercel.com/signup).
- A Vercel project. If you don't have one, you can [create a new project](https://vercel.com/new).
- The Vercel CLI installed. If you don't have it, you can install it using the following command:

### Install Vercel CLI

```bash
# Using npm
npm i vercel

# Using pnpm
pnpm i vercel

# Using yarn
yarn i vercel

# Using bun
bun i vercel
```

## Setup Steps

### 1. Enable Web Analytics in Vercel

On the [Vercel dashboard](https://vercel.com/dashboard), select your Project and then click the **Analytics** tab and click **Enable** from the dialog.

> **💡 Note:** Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*`) after your next deployment.

### 2. Add `@vercel/analytics` to your project

✅ **Already completed** - The package is already installed in this project.

For reference, this was done using:

```bash
# Using npm
npm i @vercel/analytics

# Using pnpm
pnpm i @vercel/analytics

# Using yarn
yarn i @vercel/analytics

# Using bun
bun i @vercel/analytics
```

### 3. Add the `Analytics` component to your app

✅ **Already completed** - The Analytics component is properly integrated.

For this React application, the Analytics component has been added to `src/App.jsx`:

```jsx
import { Analytics } from '@vercel/analytics/react';
// ... other imports

function App() {
  return (
    <div className="App">
      {/* ... other components */}
      <Analytics />
    </div>
  );
}

export default App;
```

> **💡 Note:** The `Analytics` component is a wrapper around the tracking script, offering more seamless integration with React.

### 4. Deploy your app to Vercel

Deploy your app using the following command:

```bash
vercel deploy
```

If you haven't already, we also recommend [connecting your project's Git repository](https://vercel.com/docs/git#deploying-a-git-repository), which will enable Vercel to deploy your latest commits to main without terminal commands.

Once your app is deployed, it will start tracking visitors and page views.

> **💡 Note:** If everything is set up properly, you should be able to see a Fetch/XHR request in your browser's Network tab from `/_vercel/insights/view` when you visit any page.

### 5. View your data in the dashboard

Once your app is deployed, and users have visited your site, you can view your data in the dashboard.

To do so, go to your [dashboard](https://vercel.com/dashboard), select your project, and click the **Analytics** tab.

After a few days of visitors, you'll be able to start exploring your data by viewing and [filtering](https://vercel.com/docs/analytics/filtering) the panels.

Users on Pro and Enterprise plans can also add [custom events](https://vercel.com/docs/analytics/custom-events) to their data to track user interactions such as button clicks, form submissions, or purchases.

Learn more about how Vercel supports [privacy and data compliance standards](https://vercel.com/docs/analytics/privacy-policy) with Vercel Web Analytics.

## Next steps

Now that you have Vercel Web Analytics set up, you can explore the following topics to learn more:

- [Learn how to use the `@vercel/analytics` package](https://vercel.com/docs/analytics/package)
- [Learn how to set update custom events](https://vercel.com/docs/analytics/custom-events)
- [Learn about filtering data](https://vercel.com/docs/analytics/filtering)
- [Read about privacy and compliance](https://vercel.com/docs/analytics/privacy-policy)
- [Explore pricing](https://vercel.com/docs/analytics/limits-and-pricing)
- [Troubleshooting](https://vercel.com/docs/analytics/troubleshooting)

## Verification

To verify the implementation is working:

1. Build the project:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

3. Open your browser's Developer Tools (Network tab)

4. Visit the site and look for requests to `/_vercel/insights/view` or `/_vercel/insights/script.js`

If you see these requests, your analytics are properly configured and will work when deployed to Vercel.
