module.exports = app => {
    const fs = require('fs');


    const testget = async (req, res) => {

     //   res.status(204).send(req.originalUrl)
     //   res.json({ data: req.originalUrl})

        app.db('articles')
        .select('name')
        .then(politicos => res.json(politicos))
        .catch(err => res.status(500).send(err))

    }
    const getarchive = async (req, res) => {
        var file = __dirname + '/../data/invoices/invoice2.pdf';
            res.download(file); // Set disposition and send it.
       }

    return { testget ,getarchive }
}