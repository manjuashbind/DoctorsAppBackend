//1)import json server
const jsonServer= require('json-server')

//2)cretae a server application using json-server
const doctServer = jsonServer.create()

//3)setup path for db.json
const router =jsonServer.router('db.json')

//4) return a middleware instance used by json-server
const middleware=jsonServer.defaults()

//5)setup port for db.json
const port =3001

//6)use in server
doctServer.use(middleware)
doctServer.use(router)

//7)to run the server(restServer)
doctServer.listen(port,()=>{
    console.log("doct server listing on port"+port);

})
