
# Anderson's Portfolio

## Project info

Personal portfolio website showcasing my skills, projects, and experience.

## How to run locally

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Clone the repository
git clone https://github.com/Anderson-s-Projects/anderson-portfolio.git

# Navigate to the project directory
cd anderson-portfolio

# Install the necessary dependencies
npm i

# Start the development server
npm run dev
```

## Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions. When you push changes to the main branch, the workflow will build and deploy your site.

### GitHub Pages Setup

1. Go to your repository's Settings
2. Navigate to Actions > General
3. Under "Workflow permissions", select "Read and write permissions"
4. Click "Save"
5. Navigate to Pages section
6. Under "Build and deployment":
   - Source: Select "GitHub Actions"
7. Your site will be available at: `https://anderson-s-projects.github.io/anderson-portfolio/`

### Manual Deployment

You can also deploy manually using:

```sh
npm run build
npm run deploy
```

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
