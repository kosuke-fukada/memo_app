FROM node:22.14-bullseye-slim

WORKDIR /app

RUN npm install -g pnpm

RUN pnpm init

COPY . .
