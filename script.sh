#!/usr/bin/env bash

set -e

docker-compose down -v

./wait-until "docker-compose exec -T -e PGPASSWORD=postgres postgres psql -U postgres postgres -c 'select 1'"

docker-compose up -d