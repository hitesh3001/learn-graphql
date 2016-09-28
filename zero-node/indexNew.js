import express from "express";
import graphqlHTTP from "express-graphql";

import schema from "./schemaNew";

const app = express();

app.use(graphqlHTTP({
	schema,
	graphiql : true,

}));

app.listen(5001 , function(){
	console.log("server started on port : 5001");
});