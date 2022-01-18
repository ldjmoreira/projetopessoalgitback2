const bcrypt = require('bcrypt-nodejs')
module.exports = app => {

    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation
    
    
    const index = (req, res) => {
        console.log(req.user)
        app.db('passwords')
            .select('id', 'usuario', 'email','site','datap')
            .where({ user_id: req.user.id })
            .then(passwords => res.json(passwords))
            .catch(err => res.status(500).send(err))
    }

    const create = async (req, res) => {
        const userFetch = { ...req.body }
        console.log(userFetch)
        const user = await app.db('users')
        .where({ email: req.user.email })
        .first()
        
        if (!user) return res.status(400).send('Usuário não encontrado!')
        
        if (!req.body.senhaMestra ) {
            return res.status(400).send('dados não fornecidos!')
        }

        
        const isMatch = bcrypt.compareSync(userFetch.senhaMestra, user.password)
        if (!isMatch) return res.status(401).send('senha mestra inválida!')
        
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        
        today = yyyy + '/' + mm + '/' + dd;
        
        userFetch.datap = today
        userFetch.user_id = req.user.id
        delete userFetch.confirmPassword
        delete userFetch.senhaMestra

        console.log(userFetch)
        try {

            existsOrError(userFetch.email, 'site não informada')
            existsOrError(userFetch.site, 'site não informada')
            existsOrError(userFetch.datap, 'data no servidor')
            existsOrError(userFetch.password, 'password no servidor')

        } catch(msg) {
            res.status(400).send(msg)
        }
        if(userFetch.datap) {
            app.db('passwords')
                .insert(userFetch)
                .then(_ => res.status(204).send())
                .catch(err => {res.status(500).send(err)
                console.log(err)
                })
        } 
    }

    const getEdit = (req, res) => {
        app.db('passwords')
            .where({ id: req.params.id,
                user_id: req.user.id  
            })
            .first()
            .then(password => res.json(password))
            .catch(err => res.status(500).send(err))
    }  

    const  update = async (req, res) => {
        
        const password = { ...req.body }
        //--        
        const user = await app.db('users')
        .where({ email: req.user.email })
        .first()
        
        if (!user) return res.status(400).send('Usuário não encontrado!')
        
        if (!req.body.senhaMestra ) {
            return res.status(400).send('dados não fornecidos!')
        }

        
        const isMatch = bcrypt.compareSync(password.senhaMestra, user.password)
        if (!isMatch) return res.status(401).send('senha mestra inválida!')
        //--
        
        
        //--
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        
        today = yyyy + '/' + mm + '/' + dd;
        //--

        password.datap = today
        delete password.confirmPassword
        delete password.senhaMestra
      //  if(req.params.id) password.id = req.params.id

        try {
            existsOrError(password.id, 'Nome não informado')


        } catch(msg) {
            res.status(400).send(msg)
        }

        if(password.id) {
            app.db('passwords')
                .update(password)
                .where({ id: password.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            console.log("Erro de escrita no banco de dados")
        }


    }

    const deletePost = async (req, res) => {
        const reqRemove = { ...req.body }
        console.log(reqRemove)
        //--        
        const user = await app.db('users')
        .where({ email: req.user.email })
        .first()
        
        if (!user) return res.status(400).send('Usuário não encontrado!')
        
        if (!req.body.senhaMestra ) {
            return res.status(400).send('dados não fornecidos!')
        }

        
        const isMatch = bcrypt.compareSync(reqRemove.senhaMestra, user.password)
        if (!isMatch) return res.status(401).send('senha mestra inválida!')
        //--

        
        try {

            const userExcluded = await app.db('passwords')
                .where({ id: reqRemove.id }).del()
           // notExistsOrError(userExcluded, 'não foi possivel excluir.')
            
            
            res.status(204).send()
        } catch(msg) {
            console.log(msg)
            res.status(408).send(msg)
        }
    }


    return {create, index, getEdit, update, deletePost }


    //fim
}