# docker-node
Sample files for a small node project

Direcory structure should be according to an express application.

Running the actual application :
<pre>
cd ..
docker build -t "dir name" .
docker run -it -p 3000:3000 "image name"
docker-compose run "image name" npm test
docker-compose up -d


"dir name" is ex1
"image name" is also ex1

</pre>
