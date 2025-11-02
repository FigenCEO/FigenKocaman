# Figen Kocaman Landing Page

A modern landing page for figenkocaman.com, deployed on Cloudflare Pages with automatic deployments from GitHub.

## Setup Instructions

### 1. Initialize Git Repository

If you haven't already initialized the repository, run:

```bash
git init
git add .
git commit -m "Initial commit: Landing page setup"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name it (e.g., `figenkocaman-website`)
4. Choose public or private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 3. Connect Local Repository to GitHub

After creating the GitHub repository, GitHub will show you commands. Run these in your terminal:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name.

### 4. Connect Cloudflare Pages to GitHub

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Select your account
3. In the left sidebar, click **Pages**
4. Click **Create a project**
5. Click **Connect to Git**
6. You'll be prompted to authorize Cloudflare to access your GitHub account:
   - Click **Authorize Cloudflare Pages** (or similar button)
   - Select your GitHub account if prompted
   - Authorize Cloudflare Pages to access your repositories
7. Select the repository you just created
8. Click **Begin setup**

### 5. Configure Build Settings

For this static site, configure:
- **Project name**: `figenkocaman` (or any name you prefer)
- **Production branch**: `main` (or `master` if that's your default branch)
- **Build command**: Leave empty (static site, no build needed)
- **Build output directory**: `/` (root directory)

Click **Save and Deploy**

### 6. Connect Custom Domain

1. Once your site is deployed, go to your project in Cloudflare Pages
2. Click on **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter: `figenkocaman.com`
5. Cloudflare will automatically configure DNS records (if your domain is on Cloudflare) or provide you with DNS settings to update

### 7. Automatic Deployments

Once connected:
- Every push to the `main` branch will automatically trigger a new deployment
- You can view deployment history in the Cloudflare Pages dashboard
- Each deployment gets a preview URL for testing

## Local Development

Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── _redirects          # Cloudflare Pages routing rules
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Updating the Site

1. Make changes to the files locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```
3. Cloudflare Pages will automatically detect the push and deploy the changes (usually takes 1-2 minutes)

## Notes

- The site uses modern CSS with no build process required
- Cloudflare Pages provides free SSL certificates automatically
- The `_redirects` file ensures proper routing for Cloudflare Pages
