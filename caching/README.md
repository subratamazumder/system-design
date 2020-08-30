# Caching
## Key Concepts
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

Add configs in -> /usr/local/etc/nginx/servers/
Default config -> /usr/local/etc/nginx/nginx.conf
Logs will be in -> /usr/local/var/log/nginx/
Default webroot is -> /usr/local/var/www/
Default listen address -> http://localhost:8080
To reflect any changes of `nginx.conf` use `brew services restart nginx`

