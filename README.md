### build image

**`docker build -t syedaismatfarjana09/event-bus .`**

### push image to docker hub

**`docker push syedaismatfarjana09/event-bus`**

### create deployment for event bus

1. create yaml file for event-bus, write all the configurations
   **`kubectl apply -f event-bus-depl.yaml`**

### create cluster ip for event bus and posts

### wire everything

write a url of http with thename of the clusterip service
