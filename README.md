# docker-node
sample files for a small node project

direcory structure should be according to an express application.

running the actual application :

cd ..
docker build -t <dir name> .
docker run -it -p 3000:3000 <image name>
docker-compose run <image name> npm test
docker-compose up -d

<dir name> is ex1
<image name> is also ex1
