FROM nginx:alpine

RUN mkdir -p /var/log/nginx

# nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# copy all static
COPY . /usr/share/nginx/html

# open 80 and 443
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
