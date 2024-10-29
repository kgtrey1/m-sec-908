FROM dart:stable

RUN mkdir -p /var/www/wall

COPY ./apps/wall-app /var/www/wall

WORKDIR /var/www/wall

RUN apt-get update && apt-get install -y imagemagick
RUN dart pub get
RUN dart compile exe bin/social_wall.dart -o /var/www/wall/app

CMD [ "./app" ]