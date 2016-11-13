# HTTP-性能测试

> Apache ab

http://httpd.apache.org/docs/2.4/programs/ab.html

ab - Apache HTTP server benchmarking tool - Apache HTTP Server Version 2.4

http://www.imooc.com/video/7964




https://help.ubuntu.com/lts/serverguide/httpd.html

HTTPD - Apache2 Web 服务器


# ubuntu中安装apache ab命令进行简单压力测试

http://hikin.iteye.com/blog/866582

http://www.imooc.com/qadetail/181465?t=269385#id_269385


```sh
# install
$ sudo apt-get install apache2-utils -Y

# option
$ ab -h

# test
$ ab -n1000 -c10 http://www.xgqfrms.xyz:80/index.html

``` 



