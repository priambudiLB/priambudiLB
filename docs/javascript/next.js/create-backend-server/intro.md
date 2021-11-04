---
sidebar_position: 0
---

# Introduction

Next.JS has the ability to create its own Node.JS backend server. Any file under `pages/api` is mapped to `/api/[file-name]` and could be treated as an API endpoint. Those files are server-side only and won't have any impact on your client-side bundles.

Let's start by creating a sample Next.JS app:

```shell
npx create-next-app@latest
# or
yarn create next-app
```

Then change directory into the newly created project folder. Inside the project folder, you should have a similar project structure like below:

```
[project name]/
  ├─ 📁 node_modules/
  ├─ 📁 pages/
  ├─ 📁 public/
  ├─ 📁 styles/
  ├─ 📝 .eslintrc.json
  ├─ 📝 .gitignore
  ├─ 📝 next.config.js
  ├─ 📝 package.json
  ├─ 📝 README.md
  └─ 📝 yarn.lock
```

Inside `pages` folder you should have:

```
📁 pages/
  ├─ 📁 api/
  │     └─ 📝 hello.js
  ├─ 📝 _app.js
  └─ 📝 index.js
```

Now we are going to focus inside `pages/api` folder.

Create a new file `index.js`:

```
📁 api/
   ├─ 📝 hello.js
   └─ 📝 index.js
```

```javascript
// pages/api/index.js
export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    res.status(200).json("a POST request received");
  } else if (req.method === "GET") {
    // Process a GET request
    res.status(200).json("a GET request received");
    // Handle any other HTTP method
  } else {
    // Handle any other HTTP method
    res.status(200).json(`a ${req.method} request received`);
  }
}
```

Inside `index.js` file we have just created a handler function on our `/api` API endpoint. The next time you create a GET request to `/api`, the server will return response of `"a GET request received"`.

Now you have 2 existing endpoint: `/api` and `/api/hello`.

## Source
https://nextjs.org/docs/api-routes/introduction