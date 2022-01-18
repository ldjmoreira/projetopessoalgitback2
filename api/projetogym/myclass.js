module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

        const index = (req, res) => {
        

        app.db('working_hours')
            .join('users', 'working_hours.user_id', '=', 'users.id')
            .join('tipo_treinos', 'working_hours.tipotreino', '=', 'tipo_treinos.id')
            .select('working_hours.id', 'working_hours.user_id', 'working_hours.work_date',
             'working_hours.time1','working_hours.is_shown','users.name','tipo_treinos.nome')
             .where({ user_id: req.user.id })
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))





        }
        
    return { index  }

    
    //fim
}