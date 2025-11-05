# AlfaDev Astro Starter
![https://astro.build/](https://img.shields.io/badge/astro-4.16.9-orange?style=flat&logo=astro&logoColor=orange&link=https%3A%2F%2Fastro.build%2F)
![https://www.typescriptlang.org/](https://img.shields.io/badge/typescript-5.6.3-blue?style=flat&logo=typescript&link=https%3A%2F%2Fwww.typescriptlang.org%2F)
![https://tailwindcss.com/](https://img.shields.io/badge/tailwind-3.4.14-cyan?style=flat&logo=tailwindcss&link=https%3A%2F%2Ftailwindcss.com%2F)


**An Astro Starter** 🛠️ - *batteries-included* - designed for content-driven pages like portfolios, landing pages, showcases, and more.

With a focus on simplicity, speed, and developer happiness, this starter helps you skip the repetitive boilerplate setup and dive straight into creating.  

---

## 🎨 Design Philosophy

The mantra is simple: **"Don't make me think"**. This starter is designed to be as **unobtrusive as possible**, providing you with the tools and guidelines needed to focus on what's important, and with the minimal amount of code to get you started.

Our goals are:
- **Ready in minutes:** Get started quickly with a pre-configured setup.
- **Don't make me think:** Spend your time building, not understanding the template.
- **Simple and clean:** The codebase is minimal and clean.



## ✨ Features

Why choose **alfadev-astro-starter**?

The starter is designed to be **the less intrusive as possible**, providing you with the tools and guidelines needed to focus on what's important, and with the minimal amount of code to get you started, because **you don't want another template that you have to spend hours removing unnecessary code**.

- **Simple:** Lightweight and easy to use. No unnecessary complexity.
- **Up-to-Date:** Built with the latest versions of **Astro**, **TailwindCSS**, and **Sass**, following best practices.
- **SEO Friendly:** Boost your site's visibility with built-in SEO configurations for each page and automatic [sitemap](https://docs.astro.build/es/guides/integrations-guide/sitemap). generation.
- **Extendable:** Easily add or edit content using markdown files with the power of [Astro]
- **Focused:** Spend your time building, do not waste your time understanding the template.
- **Intuitive:** Project structure is designed to be easy to understand and navigate. And the built-in codebase is minimal and clean.
- **Customizable:** Adapt every corner of the template to fit your needs. The code is yours to change. The 
- **Themable:** Fully supports dark theme with a simple and extensible system.  
- **Lightweight:** Assets are optimized for minimal load times with [sharp](https://sharp.pixelplumbing.com/).
- **Content-Centric:** Perfect for showcasing content like services, portfolios, or products.  
- **Developer-Friendly:** Built for developers who value simplicity, flexibility, and modern tools.
- **Reduced Boilerplate:** Get started quickly with a pre-configured setup.

---

## 🚀 Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/diego-alfadev/alfadev-astro-starter.git
   cd alfadev-astro-starter
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
    npm run dev
    ```

4. **Open your browser and visit [http://localhost:4321](http://localhost:4321)**

5. **Start customizing your site!**

---

## 📚 Documentation

1. Project structure
2. Built-in components
3. Theme customization

### 1. 📂 Project Structure

The project structure is designed to be easy to understand and navigate. Here's a quick overview of the directories and files you'll find in this project:

```bash
/
├── public/             # Static assets (images, icons, etc.)
├── src/
│   └── config/         # Site configuration
│       └── config.json # Top-level site configuration, like title, description, metas, some astro settings, etc.
│       └── menu.json   # Configure the site visible navigation in header and footer
│       └── social.json # Social links and icons
│       └── theme.json  # Your theme names and font settings (used in tailwind.config.js, related to styles/theme.css)
│   ├── content/        # Markdown and mdx files for dynamic content following the Astro conventions (see below)
│   ├── components/     # Reusable components
│       └── react/      # React components
│   ├── layouts/        # Astro Reutilizable Layout components
│   ├── pages/          # Site pages (follows Astro conventions)
│   ├── styles/         # Global and component-specific styles
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # TailwindCSS configuration
├── package.json        # No need to explain
└── [editor cfg files]  # Project dependencies and scripts
```

### 2. 🧩 Built-in Components

The starter comes with a set of components that you can use to build your site basic structure.
Ideally, you should use them as a starting point and modify them to fit your needs.

There's only a few of them that are considered **core and generic**:

```bash
/
├── components/
│   └── Logo.astro      # The site logo. Reused across the site, every page has it.
│   └── Section.astro   # A section with a title, content and an optional image. Is a standard content block that every page has.
└── └── PageHeader.astro # Used to display the page title and description, intended to bind with the page `mdx` data.

```

Every other component is considered **specific** and is used in the demo site. You can use them as inspiration or modify them to fit your needs.

### 3. 🎨 Theme Customization

The starter comes with a default theme that you can customize to fit your needs.
There's 3 files involved in the theme customization:

```bash
/
├── src/
│   └── styles/
│       └── theme.css    # The main theme file, where you can define your colors.
│   └── config/
│       └── theme.json    # A JSON file used for theme domain names and font settings. Define your theme color names and font settings here.
├── tailwind.config.js   # The tailwind configuration file, you know what it is, the other two files are used here.
```
 


## 🧞 Commands (by Astro)

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
