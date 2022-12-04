# Multi-stage
# 1) Node image for building static assets
# 2) Nginx stage to serve static assets

# BUILD
# -----

# Name the node stage "build"
FROM node:slim AS build

# Set working directory
WORKDIR /app

#  Copy `package.json` and `package-local.json` files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from current directory to working directory in image
COPY . .

# Get build-time variables
ARG API_KEY=DEFAULT_API_KEY
ENV VITE_API_KEY $API_KEY

# Run build script
RUN npm run build

# PRODUCTION
# ----------

# Nginx state for serving content
FROM nginx:alpine AS prod

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from build stage
COPY --from=build /app/dist .
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Explore port 80
EXPOSE 80

# Container run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]