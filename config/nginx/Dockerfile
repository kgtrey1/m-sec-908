FROM owasp/modsecurity-crs:nginx-alpine

COPY config/nginx/modsecurity.conf /etc/modsecurity.d/modsecurity.conf
COPY config/nginx/nginx.conf /etc/nginx/conf.d/proxy.conf
COPY config/nginx/certs /etc/nginx/certs
