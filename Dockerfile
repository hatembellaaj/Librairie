# we will use openjdk 8 with alpine as it is a very small linux distro
FROM fabric8/java-alpine-openjdk11-jre
# copy the packaged jar file into our docker image
COPY target/CRUD-0.0.1-SNAPSHOT.jar /demo.jar
# set the startup command to execute the jar
CMD ["java", "-jar", "/demo.jar"]
