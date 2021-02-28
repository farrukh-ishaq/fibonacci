# fibonacci
NodeJS and Fibonacci repo.
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

