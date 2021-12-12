module.exports = app => {
    const fs = require('fs');


    const testget = async (req, res) => {

     //   res.status(204).send(req.originalUrl)
        res.json({ data: req.originalUrl})
    }
    const getarchive = async (req, res) => {
        var file = __dirname + '/../data/invoices/invoice2.pdf';
            res.download(file); // Set disposition and send it.
       }

    return { testget ,getarchive }
}