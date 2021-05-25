# docker-node
An express application to test docker compose.<br>
Api description is in ex1.json ( open api).<br>
Application is supported by PostgreSQL docker image.<br>
Sending requests via port 3000.<br> 


Running the actual application :<br>
<pre>
cd ..
docker build -t "dir name" .
docker run -it -p 3000:3000 "image name"
docker-compose run "image name" npm test
docker-compose up -d


"dir name" is ex1
"image name" is also ex1

</pre>
