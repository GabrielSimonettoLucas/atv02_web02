const db = require('./db');

function popular_db(){
    /*
    db.Ouvinte.create({
        ra: 100,
        nome: 'Pedro',
    })
    db.Ouvinte.create({
        ra: 200,
        nome: 'Julia',
    })
    db.Ouvinte.create({
        ra: 300,
        nome: 'Amilton',
    })
    db.Ouvinte.create({
        ra: 400,
        nome: 'Rogerio',
    })
    db.Ouvinte.create({
        ra: 500,
        nome: 'Vitor',
    })
    db.Ouvinte.create({
        ra: 600,
        nome: 'Sergio',
    })
    db.Ouvinte.create({
        ra: 700,
        nome: 'Sherek',
    })
    db.Ouvinte.create({
        ra: 800,
        nome: 'Fiona',
    })
    db.Ouvinte.create({
        ra: 900,
        nome: 'Douglas',
    })
    db.Ouvinte.create({
        ra: 1000,
        nome: 'Antonio',
    })
    db.Ouvinte.create({
        ra: 2000,
        nome: 'Robert',
    })
    db.Ouvinte.create({
        ra: 3000,
        nome: 'Carol',
    })
    db.Ouvinte.create({
        ra: 4000,
        nome: 'Luiz',
    })
    db.Ouvinte.create({
        ra: 5000,
        nome: 'Porfilho',
    })
    db.Ouvinte.create({
        ra: 6000,
        nome: 'Igor',
    })
    */
    db.Candidato.create({
        cpf: 1,
        nome: 'Igor',
        idade: 1,
        email: 'teste',
        projetointeressado_id: 0
    })

    db.Candidato.create({
        cpf: 2,
        nome: 'Igor',
        idade: 1,
        email: 'teste',
        projetointeressado_id: 0
    })

    db.Candidato.create({
        cpf: 3,
        nome: 'Igor',
        idade: 1,
        email: 'teste',
        projetointeressado_id: 0
    })

    db.Adm.create({
        id: 90,
    })
}

module.exports = popular_db()