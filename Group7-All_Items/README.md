# UIDD2023-Group7

## Getting Started
To get started with the project, you will need to have Node.js and npm installed on your machine. Once you have those installed, you can run the following commands to build and start the server.

```shell
$ npm run build
$ npm run start
```
## Why Nextjs?

We chose Nextjs as the framework in this project. Nextjs is a popular framework which is derived from the Reactjs library and provides SSR (Server Side Rendering). React can manage the state of each component easily and be used widely, and the SSR technology is more friendly for SEO (Search Engine Optimization). Furthermore, Nextjs also introduces the rust compiler (SWR) to replace the traditional babel compiler to further improve the efficiency and reduce the size of bundles.  However, we disabled SWR to support the styled-components plugin in this project, but overall, it's still easier than configuring and building a PHP backend.
