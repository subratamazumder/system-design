# Proxy
## Key Concepts
### Forward proxy
### Reverse proxy
## Hands On
### Set Up
- `npm install express`
- `PORT=3000 node http-server.js`
- `PORT=3001 node http-server.js`
- `brew install ngninx`
- replace `/usr/local/etc/nginx/nginx.conf` with `system-design/load-balancer/nginx.conf`
- `brew services start nginx`

### Run
```
curl -i http://localhost:8080/resource

brew services stop nginx
```

### Notes

Add configs in -> /usr/local/etc/nginx/servers/
Default config -> /usr/local/etc/nginx/nginx.conf
Logs will be in -> /usr/local/var/log/nginx/
Default webroot is -> /usr/local/var/www/
Default listen address -> http://localhost:8080
To reflect any changes of `nginx.conf` use `brew services restart nginx`
