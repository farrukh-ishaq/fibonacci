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

