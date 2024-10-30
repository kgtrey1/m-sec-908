FROM python:alpine

COPY ./apps/bank-app /var/www/bank.powerzio.net

RUN apk add --no-cache gcc musl-dev sqlite-dev
RUN pip3 install flask pyjwt pysqlite3

WORKDIR /var/www/bank.powerzio.net

CMD [ "python", "server.py" ]