FROM python:alpine

RUN apk add --no-cache gcc musl-dev sqlite-dev

RUN addgroup -S appusers && adduser -S appuser -G appusers

USER appuser

RUN pip3 install flask pyjwt pysqlite3

WORKDIR /var/www/app

CMD [ "python", "server.py" ]