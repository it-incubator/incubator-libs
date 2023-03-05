FROM nginx:1.15.9-alpine
ENV PORT = 9678
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
COPY /packages/ui-kit/storybook-static /usr/share/nginx/html
EXPOSE 9678
CMD ["nginx", "-g", "daemon off;"]
