FROM dart:stable

RUN mkdir -p /var/www/wall.powerzio.net

COPY ./apps/wall-app /var/www/wall.powerzio.net

WORKDIR /var/www/wall.powerzio.net

RUN apt-get update && apt-get install -y imagemagick
RUN dart pub get
RUN dart compile exe bin/social_wall.dart -o /var/www/wall.powerzio.net/app

CMD [ "./app" ]