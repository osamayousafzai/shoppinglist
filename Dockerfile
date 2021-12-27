# Frontend
FROM node:15-alpine AS build
WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install --production
COPY . .
RUN yarn build

# Nginx to serve the Frontend
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]