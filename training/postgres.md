Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package.


- **Containerization** is the process of distributing and deploying applications in a portable and predictable way. It accomplishes this by packaging components and their dependencies into standardized, isolated, lightweight process environments called containers.  Many organizations are now interested in designing applications and services that can be easily deployed to distributed systems, allowing the system to scale easily and survive machine and application failures. 

Docker’s main advantages are:

Lightweight resource utilization: instead of virtualizing an entire operating system, containers isolate at the process level and use the host’s kernel.
Portability: all of the dependencies for a containerized application are bundled inside of the container, allowing it to run on any Docker host.
Predictability: The host does not care about what is running inside of the container and the container does not care about which host it is running on.  The interfaces are standardized and the interactions are predictable.


 


Docker is a tool that packages, provisions and runs containers independent of the OS. Container technology is available through the operating system: A container packages the application service or function with all of the libraries, configuration files, dependencies and other necessary parts to operate. Each container shares the services of one underlying operating system.

Docker benefits include efficient application development, lower resource use and faster deployment compared to VMs.


The Docker Engine is the underlying client-server tool that supports container technology to handle the tasks and workflows involved in building container-based applications. The engine creates a server-side daemon process that hosts images, containers, networks and storage volumes. The daemon also provides a client-side command-line interface (CLI) that allows users to interact with the daemon through the Docker application programming interface. Containers created by Docker are called Dockerfiles. Docker Compose files define the composition of components in a Docker container.

Docker Hub is a software-as-a-service tool that enables users to publish and share container-based applications through a common library.$ sudo docker pull postgres

$ sudo docker network create --driver bridge postgres-network


$ sudo docker run -it --rm --network postgres-network postgres psql -h postgres1 -U postgres


$ sudo docker network create --driver bridge postgres-network

