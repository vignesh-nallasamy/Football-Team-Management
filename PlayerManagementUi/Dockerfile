FROM node as build
WORKDIR /app

RUN npm install -g @angular/cli
COPY . .
RUN npm install
RUN ng build

FROM nginx as runtime
COPY --from=build /app/dist/player-management-ui /usr/share/nginx/html
