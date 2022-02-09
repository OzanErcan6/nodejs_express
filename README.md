# nodejs_express
**REST for my react.js application**


**conFusionServer uses mongodb, you can run mongodb in traditional way or using docker as explained below:**

Create and run a mongodb container in port 27017 with the command:  <br />
*  docker run --name mongodb -d -p 27017:27017 mongo

mongodb container should appear in the list when you run the command
* docker ps

Start the container if the container is not working : <br />
* docker  start <CONTAINER-ID>

Access mongodb shell with command: <br />
* docker exec -it <CONTAINER-ID> mongo

Run node.js server with: <br />
* npm start


user can post, update and delete comments (admin cannot change comments)

admin can query /users  ask for registered users

to check if user is admin first check if user is registered 
authenticate.js içerisindeki auth admine de uygulanmalı
verifyAdmin diye bir fonksiyonu authenticate.js e yaz 

rec.user'da admin flag setlenmesini kontrol et
eğer rec.user admin değilse error mesaj gönder 

bir user bir comment'i silmek isterse, commenti yazan kisi aynı user mi kontrol et
rec.user._id ?= author._id mı kontrol et   eğer yetkisi yoksa 403 dön




