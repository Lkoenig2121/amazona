# Amazona
> a full-stack amazon clone

## Quick Start 🚀

1. Start your mongo database by running `npm run dc:up`
2. Start your backend by running `npm run start:backend`
   1. Navigate to `http://localhost:5000`, should see `"Server is ready"`
3. Start your frontend by running `npm run start:frontend`
   1. Navigate to `http://localhost:3000`, should see your app!

## Development

Runs the frontend

```
npm run start:frontend
```

Runs the backend

```
npm run start:backend
```

Starts MongoDB via Docker

```
npm run dc:up
```

## Seed the Database

1. Start the server
2. Seed DB with Users by navigating to `http://localhost:5000/api/users/seed`
3. Seed DB with Products by navigating to `http://localhost:5000/api/products/seed`
