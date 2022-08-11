# docker-node
An express application to test docker compose.<br>
Api description is in ex1.json (open api).<br>
All valid api results will return jsons.<br>
All Errors will be reported to app console logs.<br>
Application is supported by PostgreSQL docker image.<br>
Sending requests via port 3000.<br> 
Note that migration of schema will be done 30 seconds after PostgreSQL init.<br> 

Running the actual application :<br>
<pre>
docker build -t ex1 .
docker-compose up -d
docker-compose down -v
</pre>
