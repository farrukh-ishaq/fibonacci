#!/usr/bin/env bash

set -e

docker-compose down -v

./wait-until "docker run -d --name postgres-fibonacci -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=fibonacci -p 5430:5432 postgres:alpine -c 'select 1'"

docker-compose up -d