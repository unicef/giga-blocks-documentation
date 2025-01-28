# Base Nginx image
FROM nginx:1.25.0-alpine3.17

# Remove default configuration and copy custom config
RUN rm -rf /etc/nginx/conf.d
COPY conf.d /etc/nginx/conf.d

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy static build files to the web root
COPY build /usr/share/nginx/html
COPY .env /usr/share/nginx/html/.env

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
