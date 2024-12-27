# Deployer
FROM nginx:1.25.0-alpine3.17

# Remove default configs and copy your custom config
RUN rm -rf /etc/nginx/conf.d
COPY conf.d /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html
# Copy build static
COPY build /usr/share/nginx/html/doc
COPY .env /usr/share/nginx/html/doc/.env

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
