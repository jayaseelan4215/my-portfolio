<<<<<<< HEAD
# 1. BUILD STAGE
FROM node:20-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./

RUN npm ci
COPY . .

# Build the React.js application
RUN npm run build

# 2. RUN STAGE
FROM nginx:alpine as runner

COPY --from=builder /app/dist /usr/share/nginx/html

=======
# 1. BUILD STAGE
FROM node:20-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./

RUN npm ci
COPY . .

# Build the React.js application
RUN npm run build

# 2. RUN STAGE
FROM nginx:alpine as runner

COPY --from=builder /app/dist /usr/share/nginx/html

>>>>>>> 7983f6abab6fbb85def96e7f5b31a3bd51c6116c
EXPOSE 80