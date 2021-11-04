---
sidebar_position: 2
---

# Dynamic API Routes

You may want to create a dynamic route such add `/api/users/:id`, Next.JS is capable of doing this. API routes support dynamic routes and follows the same file naming rules used for `pages`.

By creating `pages/api/users/[id].js`:

```javascript
// pages/api/users/[id].js
export default function handler(req, res) {
  const { id } = req.query;
  res.end(`id: ${id}`);
}
```

Any requests to the endpoint `/api/users/1` will respond with `id: 1`.

## Combining with Index Route

Usually there is a case where you want to have `/api/users` to get all of the users data. We have 2 options to do this:

1. Create `index.js` file inside `users` folder.

```
📁 api/
└─ 📁 pages/
  │  📝 [id].js
  └─ 📝 index.js
```
```javascript
// pages/api/users/index.js
export default function handler(req, res) {
  res.status(200).json(`a ${req.method} request received`);
}
```

2. Create `users.js` file inside `api` folder.

```
📁 api/
└─ 📁 pages/
│ └─  📝 [id].js
└─ 📝 users.js
```
```javascript
// pages/api/users.js
export default function handler(req, res) {
  res.status(200).json(`a ${req.method} request received`);
}
```

## Source

https://nextjs.org/docs/api-routes/dynamic-api-routes
