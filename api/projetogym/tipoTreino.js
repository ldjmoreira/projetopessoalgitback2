module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation
    

    const index = (req, res) => {
    
    app.db('tipo_treinos')
        .select('id', 'nome', 'cod_treino')
        .then(users => res.json(users))
        .catch(err => res.status(500).send(err))
        
    }

    const save = async (req, res) => {
        const tipoTreino = { ...req.body }
        if(req.params.id) tipoTreino.id = req.params.id



        try {
            existsOrError(tipoTreino.nome, 'Nome não informado')
            existsOrError(tipoTreino.cod_treino, 'E-mail não informado')


            const userFromDB = await app.db('tipo_treinos')
                .where({ cod_treino: tipoTreino.cod_treino }).first()
            if(!tipoTreino.id) {
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
        } catch(msg) {
            return res.status(400).send(msg)
        }



        if(tipoTreino.id) {
            app.db('tipo_treinos')
                .update(tipoTreino)
                .where({ id: tipoTreino.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('tipo_treinos')
                .insert(tipoTreino)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, 'Código  não informado.')
                
            const subcategory = await app.db('adm_treinos')
                .where({ tipo_treino: req.params.id })
            notExistsOrError(subcategory, ' Esta aula possui horários, delete-os primeiro')
            

            const rowsDeleted = await app.db('tipo_treinos')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, ' não foi encontrada.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }


    return { index, save, remove }


    //fim
}