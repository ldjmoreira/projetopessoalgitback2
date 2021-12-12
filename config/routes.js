const admin = require('./admin')

module.exports = app => {

    app.get('/testget', app.api.teste.testget)
    
    app.get('/getarchive', app.api.teste.getarchive)

 

}