
## 🚀 Gatsby Project Setup & Editing Guide

### ✅ 1. **Clone the Repository**

Open your terminal and run:

```bash
git clone {url to this repo}
cd your-gatsby-repo
```

---

### 📦 2. Install Dependencies

Make sure you have **Node.js (v14+ recommended)** installed. Then run:

```bash
npm install
```

or if you're using Yarn:

```bash
yarn
```

---

### 📝 3. Edit Files

You can now open the project in your code editor (e.g., VS Code or Atom):

Typical files to edit:

* `src/data/news-data.ts`: News content
* `content/pages/projects/team/team.json`: Add new member profiles (please add relevant images in `static/team` folder)
* `content/pages/projects/labprojects/projects.json`: Projects content (please add relevant images in `static` folder)
* `

---

### 💻 4. Preview Locally

To start a local development server with hot reloading:

```bash
gatsby develop
```

Then open your browser and visit:
👉 `http://localhost:8000`

---

### 🧹 5. Clean the Cache (Optional but Important)

If you’re facing **weird errors**, plugin bugs, or stale content, run:

```bash
gatsby clean
```

This will:

* Remove `.cache/` and `public/` folders
* Ensure a fresh build environment

---

### 🏗️ 6. Build the Production Version

To generate optimized static files for deployment:

```bash
gatsby build
```

This generates the optimized static files in the `public/` directory.

---

### 🚀 7. Deploy the Site

Since our `package.json` includes a `deploy` script like:

```json
"scripts": {
  "deploy": "gh-pages -d public"
}
```

You can deploy using:

```bash
npm run deploy
```

This publishes the contents of the `public/` folder (your built Gatsby site) to **GitHub Pages** (or another static host, depending on how your deploy script is configured).

---








=============================

Website creating using the Gatsby Theme [`@lekoarts/gatsby-theme-emma`](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emma).

## ✨ Features

- MDX
- react-spring page animations
- Optional MDX pages which automatically get added to the navigation
- Fully customizable through the usage of Gatsby Themes (and Theme UI)
- Light Mode / Dark Mode
- SEO (Sitemap, OpenGraph tags, Twitter tags)
- WebApp Manifest

## 🚀 How to edit pages

### 1. **Clone the repo.**

```sh
git clone {repo url}
```

### 2.  **Open the code and start customizing**

Start the site by running `npm run develop`.

Your site is now running at `http://localhost:8000`

### Adding content

#### Adding a new project

New projects will be shown on the index page of this theme and can be added by creating MDX files inside `content/projects`. General setup:

1. Create a new folder inside `content/projects`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add an image to the created folder (from step 1)
1. Reference this image as your `cover` in the frontmatter
1. Use `defer` to opt-in into Deferred Static Generation (DSG)
1. Write your content below the frontmatter

**Frontmatter reference:**

```md
---
client: "LekoArts"
title: "Theme"
cover: "./image.jpg"
date: "2019-06-10"
service: "Theme"
color: "#8e9d31"
defer: false
---
```

#### Adding a new page

Additional pages will be shown in the navigation (left side) and allow you to display content other than projects, e.g. a "Contact" or "About Me" page. General setup:

1. Create a new folder inside `content/pages`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add an image to the created folder (from step 1)
1. Reference this image as your `cover` in the frontmatter
1. Use `defer` to opt-in into Deferred Static Generation (DSG) (optional)
1. Write your content below the frontmatter

**Frontmatter reference:**

```md
---
title: "Name"
slug: "/name"
cover: "./name.jpg"
defer: false
---
```

### Change your `static` folder

The `static` folder contains the icons, social media images and `robots.txt`. Don't forget to change these files, too! You can use [Real Favicon Generator](https://realfavicongenerator.net/) to generate the image files inside `static`.
