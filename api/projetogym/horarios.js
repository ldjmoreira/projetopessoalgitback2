module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation
    let {todayfun}  = app.api.date_utils
    const horarios = {}


    const index = (req, res) => {
                
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        
            today = yyyy + '/' + mm + '/' + dd;
        
            const subquery1 = app.db('listas')
            .where('work_date', today)//colocar para passar depois
            .select('horario');

            app.db('adm_treinos')
            .join('tipo_treinos', 'adm_treinos.tipo_treino', '=', 'tipo_treinos.id')
                .select('adm_treinos.id', 'adm_treinos.tipo_treino', 'adm_treinos.horario',
                 'adm_treinos.qtd','adm_treinos.ativo','tipo_treinos.nome')
                 .where('adm_treinos.horario', 'not in', subquery1)
                .then(users => res.json(users))
                .catch(err => res.status(500).send(err))
        
        /*
        let v = (new Date()).getHours()
        for(var i = v; i < 23; i++){
       // if (!horario.id) horario.id = sequence.id
            let horario = {
                id: i,
                atribute: i,
                hora: i+':00:00'
            }
            horarios[i] = horario
        }
       res.send(horarios)
        */
        

    }

    const marcacao =  (req, res) => {
        //incremento em adm_treino
        //insert em working_hour
      //  console.log(req.body.atribute)
        /*
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        
            today = yyyy + '/' + mm + '/' + dd;
        */
        const hor_marc = {
            user_id: req.user.id,
            work_date: req.body.dataag,
            time1: req.body.horario,
            tipotreino: req.body.tipo_treino,
            is_shown: false
        }
    

        app.db('adm_treinos')
        .where({ horario: req.body.horario, 
                tipo_treino: req.body.tipo_treino,
        })
        .increment('estado', 1)
        .then(_ => res.status(204).send())
        .catch(err => res.status(401).send(err))
        /*
        try {
            existsOrError(category.name, 'Nome não informado')
        } catch(msg) {
            return res.status(400).send(msg)
        }
        */
       
        if(1) {
            app.db('working_hours')
            .insert(hor_marc)
            .then(_ => res.status(204).send())
            .catch(err => res.status(401).send(err))
        } 
        
    }
    const lista = (req, res) => {
        // insert  em lista
        //  console.log(req.body.atribute)
            /*
          let today = new Date();
          let dd = String(today.getDate()).padStart(2, '0');
          let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
          let yyyy = today.getFullYear();
          
              today = yyyy + '/' + mm + '/' + dd;
            */
          const hor_marc = {
              cliente_smart: req.user.id,
              work_date: req.body.dataag,
              horario: req.body.horario,
              tipotreino: req.body.tipo_treino,
              is_shown: false
          }
      
      
          /*
          try {
              existsOrError(category.name, 'Nome não informado')
          } catch(msg) {
              return res.status(400).send(msg)
          }
          */
          if(1) {
              app.db('listas')
              .insert(hor_marc)
              .then(_ => res.status(204).send())
              .catch(err => res.status(401).send(err))
          } 
      }

      const getlista = (req, res) => {

        let d = new Date();
        let n = d.getHours();
        app.db('listas')
            .join('users', 'listas.cliente_smart', '=', 'users.id')
            .join('tipo_treinos', 'listas.tipotreino', '=', 'tipo_treinos.id')
            .select('listas.id', 'listas.cliente_smart', 'listas.work_date',
             'listas.horario','listas.is_shown','listas.tipotreino','users.name',
             'tipo_treinos.nome')
             .where({ horario: (n+3)+':00:00' ,
                     work_date: todayfun()
            })
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const listadel = async (req, res) => {
        try {
            const rowsDeleted = await app.db('listas')
                .where({ id: req.params.id }).del()
                
                try {
                    existsOrError(rowsDeleted, 'Erro na base de dados.')
                } catch(msg) {
                    return res.status(400).send(msg)    
                }

            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
        //-----------------------------------


    }

    const listaworking = async (req, res) => {
        const worgingupdate = { 
            is_shown: 1
         }
         const datacs = req.body.work_date.slice(0, 10);

        if(req.params.id) worgingupdate.id = req.params.id

        try {
            existsOrError(worgingupdate.id, 'Nome não informado')

        } catch(msg) {
            return res.status(400).send(msg)
        }

        if(worgingupdate.id) {
            app.db('working_hours')
                .update(worgingupdate)
                .where({ 
                        work_date: datacs, 
                         time1: req.body.horario
                })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } 
    }

    const getworking = (req, res) => {


        app.db('working_hours')
            .select('id', 'user_id', 'tipotreino',
             'work_date','time1','is_shown')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getlistaidx = (req, res) => {


        app.db('listas')
            .select('cliente_smart', 'work_date', 'horario',
             'tipotreino','is_shown')
             .where({ cliente_smart: req.user.id, 
            
            })
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        
            today = yyyy + '/' + mm + '/' + dd;

        try {
            const rowsDeleted = await app.db('working_hours')
                .where({ 
                    id: req.params.id, 
                    work_date: today
                }).del()
            
            try {
                existsOrError(rowsDeleted, 'Artigo não foi encontrado.')
            } catch(msg) {
                return res.status(400).send(msg)    
            }

            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    const save = async (req, res) => {
        const hourConf = { ...req.body }
        if(req.params.id) hourConf.id = req.params.id



        try {
            existsOrError(hourConf.tipo_treino, 'Nome não informado')
            existsOrError(hourConf.horario, 'E-mail não informado')
            existsOrError(hourConf.qtd, 'Senha não informada')


        } catch(msg) {
            return res.status(400).send(msg)
        }


        if(hourConf.id) {
            app.db('adm_treinos')
                .update(hourConf)
                .where({ id: hourConf.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('adm_treinos')
                .insert(hourConf)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }
    const updateativo = (req, res) => {

        const arq = {
            ativo: 0
        }

        
        if(req.params.id) arq.id = req.params.id

        if(arq.id) {
            app.db('adm_treinos')
                .update(arq)
                .where({ id: arq.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }

    }

    const get = (req, res) => {
        app.db('adm_treinos')
        .join('tipo_treinos', 'adm_treinos.tipo_treino', '=', 'tipo_treinos.id')
            .select('adm_treinos.id', 'adm_treinos.tipo_treino', 'adm_treinos.horario',
             'adm_treinos.qtd','adm_treinos.ativo','tipo_treinos.nome')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const removeconf = async (req, res) => {
        try {
            const rowsDeleted = await app.db('adm_treinos')
                .where({ id: req.params.id }).del()
            
            try {
                existsOrError(rowsDeleted, 'Erro na base de dados.')
            } catch(msg) {
                return res.status(400).send(msg)    
            }

            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }


    return {  index,marcacao, remove, save, get,removeconf, 
        lista,getlista,listadel,listaworking, getworking, getlistaidx, updateativo }


    //fim
}