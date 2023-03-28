TODO List:

1. Migrate to tRPC
2. Migrate to Monorepo and pnpm
3. Add good ESlint config
4. Check Terraform for deploy to Vercel and Mongo Atlas
5. Add db for Atlas
6. Deploy via site

Run one time after container setup
1 - docker exec -it your-spot-learn-mongo-1 mongosh
2 - rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'localhost:27017'}]})