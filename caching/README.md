# Caching
## Key Concepts
[Redis](https://hub.docker.com/_/redis) is one of the most popular in memory caching technology (`key-value data store`) for best effort caching solution.
## Hands On
### Set Up
- `docker pull redis`
- `docker run -d -p 6379:6379 --name local-redis redis`
- `npm install redis`
- `PORT=3000 node http-server.js`

### Run
- Response data gets from local server : `curl -i http://localhost:3000/resource/pepapig`

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 36
ETag: W/"24-SGlYsnKxRsY6lNo+bCPFE9gcINs"
Date: Sun, 30 Aug 2020 20:41:44 GMT
Connection: keep-alive

Hello pepapig with love from express
```

- Response gets from cache server redis : `curl -i http://localhost:3000/resource/pepapig`

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 36
ETag: W/"24-SGlYsnKxRsY6lNo+bCPFE9gcINs"
Date: Sun, 30 Aug 2020 20:41:44 GMT
Connection: keep-alive

Hello pepapig with love from redis
```

### Notes

`redis-cli` can be used to verify cache data inside redis docker container
````
docker exec -it local-redis sh
redis-cli
127.0.0.1:6379> ping
PONG
127.0.0.1:6379> get pepapig
"Hello pepapig with love from redis\n\n"
127.0.0.1:6379> exit
exit
````
### Reference
https://markheath.net/post/exploring-redis-with-docker

