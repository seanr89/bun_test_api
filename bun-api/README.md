# bun-api

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.8. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

To dockerise:
```bash
docker build --pull -t bun-hello-world .
```

to run container
```bash
docker run -d -p 3000:3000 bun-hello-world
```
