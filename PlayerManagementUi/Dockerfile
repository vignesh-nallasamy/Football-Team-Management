# Stage 1
FROM node:14.15.4 as node
WORKDIR /apps
COPY . .
RUN npm install
RUN npm run build --prod
# Stage 2
FROM nginx:alpine
COPY --from=node /apps/dist/angular-app /usr/share/nginx/html
