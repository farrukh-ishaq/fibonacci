# fibonacci
NodeJS and Fibonacci repo. Working in docker and seperating each of them in a branch, once the concept is proof a main branch will be created to merge in master with all the required containers configurations and nodejs application runing fibonacci. 
# Initilisation 
## Docker
docker -v 
If docker is installed proceed. If docker not found the run sudo install docker.io, to check docker installation docker -v. 
To check docker status: sudo systemctl docker, if status is active !!! fine. If status is inactive sudo systemctl enable -- now docker. 
To test docker is working with docker hub, docker run hello-world. 

## implement docker
touch Dockerfile and add in file Dockerfile: 
From alpine is an image to lay the base of the image container. 
CMD []: ["params"] like this ["echo hello-world"] 
USING SCRIPT.SH: give read write premission on script file, and rebuild.

to delete docker rm "contaier name"
to name and run sudo docker run --name test "build id"

## feature/dockerFromScript
PID > 1 == script.sh if exist whole docker shuts...
won't exit on ctrl +c so
use new terminal docker stop imageName. 
check docker ps to see status.

## docker-compose.yml
to install sudo install docker-compose.io
Is a config file to run multiple containers. 

## docker config/ commands
to map the docker network with the container port. 
to start a docker
docker run -it -p 9000:3000 node-docker
to start a docker in background
docker run -d -p 9000:3000 node-docker

here node-docker is container name
here 9000 is docker port
here 3000 is node container port

to rebuild a docker container 
   docker build -t node-docker .

docker postgres background 
sudo docker run --name postgres-docker -e POSTGRES_PASSWORD=postgres -d -p 5430:5432  postgres:alpine
starting interface: 
    sudo docker exec -it postgres-docker bash
    few command pwd || ls || psql --help || psql -U postgres || \c fibonacci "fibonacci is a db created.. connect db" || select version();