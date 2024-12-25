# Episode 02: Igniting Our App

## Ep.02 - Part 01

### What is npm? What does it stand for?

- **NPM** does not stand for anything (not "Node Package Manager").
- It is a package manager for JavaScript and acts as a standard GitHub repository.
- Contains libraries and utilities that are part of the repository.

**Note:**

- `package.json` is a file that contains all the details about the project. It is a configuration file for npm itself.
- This file tracks the project’s dependencies (e.g., versions, dependencies).

### What is a bundler?

- A **bundler** is a tool that gathers all code (JS, CSS, images, etc.) and bundles it into a single file.
- Optimizes the files by:
  - Removing unnecessary code.
  - Compressing images.

**Example:**

- When we create a React app using `create-react-app`, it uses **webpack** as the bundler behind the scenes.

### Types of Dependencies

1. **Dev Dependencies:** Only used for development purposes.
2. **Normal Dependencies:** Required for production.

**Note:** We use **Parcel** as a dev dependency.

### What is "^" in package.json?

- The caret (`^`) ensures automatic updates to the latest **minor** version of a package.

### What is "~" in package.json?

- The tilde (`~`) ensures updates to the latest **patch** version of a package.

### What is package-lock.json?

- A file that contains the exact version of all the installed packages in the project.

### What are `node_modules`?

- A folder that:
  - Contains all installed packages.
  - Fetches code from the npm registry.
  - Contains all dependencies and their transitive dependencies.

### What is transitive dependency?

- A dependency required by another dependency.
- **Example:**  
  Installing Parcel installs its dependencies, which may have their own dependencies.

**Important:**

- Do not include `node_modules` in your Git repository.
- Add files to `.gitignore` that you do not want to commit to Git.

### Installing dependencies

- If `package.json` and `package-lock.json` are available, run `npm install` to install all dependencies.

---

## Ep.02 - Part 02

### Key Points

1. **npx:** Used to build the project.
2. **Avoid CDN Links:**
   - Bringing external libraries via CDN requires internet requests.
   - Installing them as packages helps track versions in `package.json`.
3. When `import React from 'react'`, it refers to the React package in `node_modules`.

### What is Parcel?

- A **bundler** for JavaScript applications.
- **Zero-configuration** build tool for modern web apps.

#### Features of Parcel:

- Dev Build and Local Server.
- **HMR (Hot Module Replacement):** Automatically rebuilds the app on changes.
- Caching for faster builds.
- Image optimization and code minification.
- **Consistent Hashing:** Efficient code splitting.
- Differential Bundling for older browser support.
- Diagnostic and error handling.
- **Tree Shaking:** Removes unused code.
- Generates separate dev and production builds.

**Why is Parcel fast?**

- Uses `.parcel-cache`.

### Commands:

- `npx parcel build index.html` - For production build.
  - **Note:** Remove the entry point from `package.json` to avoid errors.
- `npx parcel index.html` - For development build.
  - Generates the build in the `dist` folder.

---

### Making the app compatible with older browsers

- Use the **"browserlist"** package:
  - Add the following configuration to `package.json`:
    ```json
    "browserlist": ["last 2 versions"]
    ```
