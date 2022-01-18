const admin = require('./admin')

module.exports = app => {
    //--------------------------------- user e autenticação
    app.get('/testget', app.api.teste.testget)
    app.post('/login', app.api.auther.auth.signin)
    app.post('/validateToken', app.api.auther.auth.validateToken)
    app.post('/signup', app.api.auther.auth.save)
    //------------------------------------- validação de senha
    app.get('/getarchive', app.api.teste.getarchive)

    app.route('/testsecret')
    .all(app.config.passport.authenticate())
    .get(admin(app.api.teste.testget2))

    //---------------------------------------projetopassword
        app.route('/projetos/password/create')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.projetosenhas.password.create))
    
        app.route('/projetos/password/deletePost')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.projetosenhas.password.deletePost))
    
        app.route('/projetos/password/index')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.projetosenhas.password.index))
    
        app.route('/projetos/password/:id/edit')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.projetosenhas.password.getEdit))
    
        app.route('/projetos/password/update/:id')
        .all(app.config.passport.authenticate())
        .put(admin(app.api.projetosenhas.password.update))
}