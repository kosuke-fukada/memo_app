FROM node:22.14-bullseye-slim

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends git

RUN npm install -g pnpm

RUN pnpm init

COPY . .
