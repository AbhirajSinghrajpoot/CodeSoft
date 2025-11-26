# GitHub Pages Setup Instructions

This guide will help you enable GitHub Pages for your portfolio website.

## Prerequisites

- GitHub account with admin access to the repository
- This PR merged to the main branch

## Steps to Enable GitHub Pages

### 1. Navigate to Repository Settings

1. Go to your repository: `https://github.com/AbhirajSinghrajpoot/Wizards-Portfolio`
2. Click on the **Settings** tab (near the top-right)

### 2. Enable GitHub Pages

1. In the left sidebar, scroll down and click on **Pages** (under "Code and automation")
2. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** from the dropdown menu
   - This allows the deployment workflow to automatically publish your site

### 3. Merge This Pull Request

1. Go to the Pull Requests tab
2. Review and merge this PR to the `main` branch
3. The deployment workflow will automatically trigger

### 4. Monitor Deployment

1. After merging, go to the **Actions** tab
2. You'll see a "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 1-2 minutes)
4. A green checkmark indicates successful deployment

### 5. Access Your Website

Once deployment is complete, your website will be live at:

**🌐 https://abhirajsinghrajpoot.github.io/Wizards-Portfolio/**

## Troubleshooting

### Workflow Not Running

- Ensure GitHub Pages source is set to "GitHub Actions"
- Check that the workflow file exists at `.github/workflows/deploy.yml`
- Verify you have merged the changes to the `main` branch

### 404 Error

- Wait a few minutes after deployment
- Clear your browser cache
- Check that the `index.html` file is in the root directory

### Permission Errors

- Go to Settings → Actions → General
- Under "Workflow permissions", ensure "Read and write permissions" is selected
- Save changes and re-run the workflow

## Manual Deployment

You can manually trigger deployment anytime:

1. Go to the **Actions** tab
2. Select "Deploy to GitHub Pages" workflow
3. Click **Run workflow** button
4. Select the `main` branch
5. Click **Run workflow**

## Updating Your Website

After initial setup, updates are automatic:

1. Make changes to your files
2. Commit and push to the `main` branch
3. GitHub Actions automatically deploys the changes
4. Your website updates within 1-2 minutes

## Custom Domain (Optional)

To use a custom domain like `wizards-portfolio.com`:

1. Go to Settings → Pages
2. Under "Custom domain", enter your domain
3. Follow GitHub's instructions to configure DNS
4. Wait for DNS propagation (can take up to 24 hours)

## Questions?

If you encounter any issues:

1. Check the Actions tab for error messages
2. Review the workflow logs for details
3. Ensure all files are committed correctly
4. Verify repository permissions

---

**Need Help?** Open an issue in the repository or contact the contributor who set up this deployment.
