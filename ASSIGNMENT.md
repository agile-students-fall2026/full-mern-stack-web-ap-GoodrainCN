# About Us assignment

The completed implementation is in this workspace, copied from the original Desktop project.

- React page: `/about`, also linked from the header.
- Express endpoint: `GET http://localhost:5002/about`.
- All profile content (title, name, paragraphs, image URL and alt text) is returned as JSON from `back-end/data/about.json`.
- The page supports loading, errors, retry, and narrow screens.

## Run locally

Start MongoDB using the Docker command in README.md, or configure a MongoDB Atlas connection in `back-end/.env`.

On this machine, MongoDB Community 8.0.26 has also been downloaded from the official MongoDB distribution and is running locally with authentication. Its files and persistent data are in `/Users/guyu/Documents/ChatGPT/cs430/.local/` (excluded from Git). To restart this database after it has stopped:

```sh
cd /Users/guyu/Documents/ChatGPT/cs430
.local/mongodb-macos-aarch64--8.0.26/bin/mongod --dbpath .local/mongodb-data --bind_ip 127.0.0.1 --port 27017 --auth --logpath .local/mongodb.log
```

The database uses the assignment's `admin` / `secret` local development credentials. The implementation has been synchronized to the original Desktop repository as well.

In one terminal:

```sh
cd back-end
npm ci
npm start
```

In a second terminal:

```sh
cd front-end
npm ci
npm run dev
```

Open http://localhost:7002/about. Keep `VITE_SERVER_HOSTNAME=http://localhost:5002` in `front-end/.env`, and `PORT=5002` in `back-end/.env`.

## Personal photo

The supplied portrait is saved as `front-end/public/images/guyu-sun.png`. Its URL and descriptive alt text are supplied by the back-end JSON endpoint. Restart the back-end after changing the JSON file.

## Validation

- `npm run build` passes (TypeScript and Vite).
- Both development servers were launched locally.
- `/about` returns the supplied Guyu Sun profile as JSON.
- The About Us page was checked in the browser and displays the fetched profile.
- The original Testing Library dependency was upgraded for compatibility with React 19.
- MongoDB connected successfully. Message save, list, and detail endpoints passed a database round-trip check; the temporary test message was removed afterward.
