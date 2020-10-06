var pdf = require('html-pdf')
var ejs = require('ejs')

var nome_usuario = 'Raul'
var curso = 'Ciência da Computação'
var categoria = 'Teste'

ejs.renderFile('./arquivo.ejs', { nome: nome_usuario, categoria: categoria, curso: curso }, (err, html) => {
    if (err) {
        console.error(err)
    } else {
        pdf.create(html, {}).toFile('./meupdf.pdf', (err, res) => {
            if (err) {
                console.log('Um erro aconteceu!')
            } else {
                console.log(res)
            }
        })
    }
})