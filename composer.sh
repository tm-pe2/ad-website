#!/bin/bash
CMD="composer bash"
if [ "$1" == "serve" ]; then CMD="composer php artisan serve"; fi

sudo docker run --rm --interactive --tty --net=host \
  --volume ${PWD}:/app \
  --user $(id -u ${USER}):$(id -g ${USER}) \
  $CMD