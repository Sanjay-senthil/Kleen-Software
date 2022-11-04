FROM nginx:alpine

ARG NGINX_CONF=./apps/cloud/nginx.conf

# Create app directory
WORKDIR /app

# Bundle app source
COPY ${NGINX_CONF} /etc/nginx/nginx.conf
COPY ./dist/apps/cloud /usr/share/nginx/html
