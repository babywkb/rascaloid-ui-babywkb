FROM nginx

ADD build /usr/share/nginx/html

ADD default.conf.template /etc/nginx/conf.d/default.conf.template

ENV RASCALOID_URL=http://rascaloid-api:3000

ENTRYPOINT [ "/bin/bash", "-c", "envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'" ]
