FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage

# RUN rm -rf /etc/nginx/conf.d/*
# COPY configs/nginx/conf.d/ /etc/nginx/conf.d/
# COPY configs/nginx/nginx.conf /etc/nginx/nginx.conf
# COPY configs/nginx/ssl/ /etc/nginx/ssl/

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]