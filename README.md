Nextjs + some other technologies playground.

TODO:
1. Use next-auth sign-in/up pages + customize them.

Run one time after container setup
1 - docker exec -it your-spot-learn-mongo-1 mongosh
2 - rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'localhost:27017'}]})