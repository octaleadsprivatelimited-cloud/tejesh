# Vercel Deployment Fix Instructions

## Issue
Git author `octaleadsprivatelimited-cloud` must have access to the project on Vercel to create deployments.

## Solution Steps

### 1. Connect GitHub Organization to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your profile icon (top right)
3. Go to **Settings** → **Git**
4. Under **Git Providers**, ensure GitHub is connected
5. If not connected, click **Connect GitHub** and authorize Vercel

### 2. Grant Organization Access
1. In Vercel Settings → **Git** → **GitHub**
2. Click on **Configure** next to GitHub
3. Under **Organization Access**, ensure `octaleadsprivatelimited-cloud` is listed
4. If not listed, click **Grant Access** and select the organization
5. Grant the necessary permissions (at minimum: read access to repositories)

### 3. Reconnect Project
1. Go to your project in Vercel Dashboard
2. Click on **Settings** → **Git**
3. Under **Connected Git Repository**, click **Disconnect** (if needed)
4. Click **Connect Git Repository**
5. Select the `octaleadsprivatelimited-cloud/tejesh` repository
6. Ensure the correct branch (`main`) is selected

### 4. Update Project Settings
1. In project **Settings** → **General**
2. Ensure **Git Repository** shows: `octaleadsprivatelimited-cloud/tejesh`
3. Ensure **Production Branch** is set to `main`

### 5. Trigger New Deployment
1. After reconnecting, go to **Deployments** tab
2. Click **Redeploy** on the latest deployment, OR
3. Make a new commit and push to trigger automatic deployment

## Alternative: Use Vercel CLI
If dashboard access is restricted, you can deploy via CLI:

```bash
npm install -g vercel
vercel login
vercel link
vercel --prod
```

## Notes
- The git author name has been updated to match the GitHub organization: `octaleadsprivatelimited-cloud`
- The `vercel.json` has been updated with explicit framework setting
- Ensure the GitHub organization has proper permissions in Vercel

