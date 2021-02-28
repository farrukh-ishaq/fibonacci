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

