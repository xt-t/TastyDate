FROM openjdk:17

LABEL Thuy="xt.trinh@gmx.de"

ADD backend/target/tastydate.jar tastydate.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGODB_URI -jar /tastydate.jar" ]