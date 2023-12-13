# Deployer
FROM nginx:1.25.0-alpine3.17
RUN rm -rf /etc/nginx/conf.d
COPY conf.d /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html
# Copy build static
COPY build /usr/share/nginx/html
COPY .env /usr/share/nginx/html/.env
CMD ["nginx", "-g", "daemon off;"]
