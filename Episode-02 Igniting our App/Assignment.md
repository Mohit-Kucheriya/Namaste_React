## Namaste React Course by Akshay Saini

# _Episode 02 - Igniting Our App_

## Theory :

- What is `npm`?
- What is `Parcel/Webpack`? Why do we need it?
- Why is `.parcel-cache`?
- What is `npx`?
- What is difference between `dependencies vs devDependencies`?
- What is Tree Shaking?
- What is Hot Module Replacement?
- List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
- What is `.gitignore`? What should we add and not add into it?
- What is the difference between `package.json` and `package-lock.json` files?
- Why should I not modify `package-lock.json`?
- What is `node_modules`? Is it a good idea to push that on git?
- What is the `dist` folder?
- What is `browserlists`? and Read about different bundlers: vite, webpack, parcel
- Read about: `^-caret` and `~-tilde`
- React about Script types in html(MDN Docs)

## Coding :

In your existing project

- initialize `npm` into your repo
- install `react and `react-dom`
- remove CDN links of react
- install parcel
- ignite your app with `parcel`
- add script for "start" and "build" with parcel commands
- add `.gitignore` file
- add `browserlists`
- build a production version of your code using `parcel build`

## References:

- [Parcel Documentation](https://parceljs.org/docs/)
- [Parcel on Production](https://parceljs.org/features/production/)
- [Browserlists](https://browserslist.dev/)

## Submission:

## Q: What is `npm`?

A: npm stands for nothing, it's simply a package manager which manages the packages.
To initalize npm in your project, run the command
`npm init`

`npm init y` will create a `package.json` file in your project which we need to configure.

`npm init -y` will automatically create a `package.json`. We don't need to set the name and version of the project manually.

## Q: What is `Parcel/Webpack`? Why do we need it?

A :Parcel and Webpack are tools(bundlers) that prepare our code for the browser.
When we write a code for a website, it often involves a many files like html, css, js, images, etc.
Browser can't always handle this directly in efficient way. Parcel and Webpack takes all these files
and bundle them into a single file which can be easily loaded in the browser.

### installation commands:

```
npm install -D parcel
```

`-D` is used for development and as a development dependency.

- Parcel Commands to run:
  - For development build:
  ```
  npx parcel <entry_point>
  ```
  - For production build :
  ```
  npx parcel build <entry_point>
  ```

## Q: Why is `.parcel-cache` folder?

A: `cache folder` (or `.parcel-cache in parcel v2`) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

## Q: What is `npx`?

A: `npx` stands for `Node Package eXecute`. It is simply an `npm` package runner. It allows developers to execute any Javascript Package available on the npm registry without even installing it. npx is installed automatically with npm version 5.2.

## Q: What is difference between `dependencies vs devDependencies`?

A: devDependencies are used for development purposes and dependencies are used for production.

## Q: What is Tree Shaking?

A: Tree Shaking is a way to remove unused code from our code when bundlimg to the production build.
It ensures that only the code that is actually used is included in the final bundle.

Why is it called Tree Shaking?
Think of your code aa a tree

- The main code is like the tree trunk and the branches you want to keep.
- Unused parts of the code are like dead leaves

Tree shaking “shakes” the tree and removes the unnecessary leaves (unused code). This makes our final bundle smaller and our website faster.

## Q: What is Hot Module Replacement?

A: Hot Module Replacement (HMR) is a feature of modern web development tools(like Webpack, Parcel, Vite) that allows us to see the changes immediately without refreshing the page.

How does it work?

- When we save a file, the bundler detects the change.
- Instead of reloading the whole page, it updates only the module(file) that has changed.

## Q: List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

A: - Dev Build and Local Server.

- **HMR (Hot Module Replacement):** Automatically rebuilds the app on changes.
- Caching for faster builds.
- Image optimization and code minification.
- **Consistent Hashing:** Efficient code splitting.
- Differential Bundling for older browser support.
- Diagnostic and error handling.
- **Tree Shaking:** Removes unused code.
- Generates separate dev and production builds.

## Q: What is `.gitignore`? What should we add and not add into it?

A: The `.gitignore` file is a file that tells git which files and folders to ignore.
In our code we shouldn't add the files, which we can re-generate in future e.g, `node_modules`, `dist` etc.

## Q: What is the difference between `package.json` and `package-lock.json` files?

A: Both package.json and package-lock.json are files used in Node.js projects to manage dependencies, but they serve different purposes.

`package.json` is a configuration file that contains information about the project, such as the project name, version, and dependencies.

`package-lock.json` is a file that contains the exact version of all the installed packages in the project. It is used to ensure that the project uses the same versions of packages across different environments.

## Q: Why should I not modify `package-lock.json`?

A: The `package-lock.json` file is automatically generated by npm and should not be modified manually. If you modify it, it can cause conflicts and errors when installing or updating dependencies.

## Q: What is `node_modules`? Is it a good idea to push that on git?

A: The `node_modules` folder is a folder that contains all the installed packages and their dependencies. As we can re-generate this folder, it is not a good idea to push it on git.

## Q: What is the `dist` folder?

The `dist` stands for distributable. The dist folder contains the minimized version of the source code. The code present in the dist folder is actually the code which is used on production web applications.

## Q: What is `browserlists`?

A: Browserlists is a tool that helps us to specify the browsers that our code should support. It helps us to create a bundle that can be used by older browsers.
