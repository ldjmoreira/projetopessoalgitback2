const schedule = require('node-schedule')
/*
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(4, 6)];
rule.hour = 17;
rule.minute = 0;
*/
module.exports = app => {
    schedule.scheduleJob(' * */1 * * *', async function () {
       // const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation
       let today = new Date();
       let dd = String(today.getDate()).padStart(2, '0');
       let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
       let yyyy = today.getFullYear();
       
           today = yyyy + '/' + mm + '/' + dd;

           let d = new Date();
           let h = d.getHours();
           let M = d.getMinutes();
//---------------------------------------------------------
        const erasee = await app.db('listas').where({ 
            work_date: today,
            horario: h-1
        }).del()
        .catch(err => console.log(err))
//---------------------------------------------------------
        const updates = await app.db('working_hours').where({ 
            work_date: today,
            time1: h-1,
            is_shown: 0
        })
        .update({
            is_shown: 2
        })
        .catch(err => console.log(err))
//---------------------------------------------------------
        const updates2 = await app.db('adm_treinos').where({ 
            horario: h-1
        })
        .update({
            estado: 0
        })
        .catch(err => console.log(err))

       

    console.log(h)

    })
}