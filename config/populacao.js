const db = require('./db');

function popular_db(){
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
    db.Candidato.create({
        ra: 6000,
        nome: 'Igor'
    })
    db.Candidato.create({
        ra: 7000,
        nome: 'Sherek',
    })
    db.Candidato.create({
        ra: 8000,
        nome: 'Fiona',
    })
    db.Candidato.create({
        ra: 600,
        nome: 'Sergio'
    })
    db.Candidato.create({
        ra: 300,
        nome: 'Amilton'
    })
    db.Candidato.create({
        ra: 100,
        nome: 'Pedro'
    })
    db.Adm.create({
        ra: 9999999,
    })

    db.Apresentacao.create({
        ra_criador: 100,
        nome_criador: 'Pedro',
        participante1: 'Pedro',
        musica: 'Mein Herz Brennt',
        votos: 15,
    })

    db.Apresentacao.create({
        ra_criador: 100,
        nome_criador: 'Pedro',
        participante1: 'Pedro',
        musica: 'Sonne',
        votos: 10,
    })

    db.Apresentacao.create({
        ra_criador: 100,
        nome_criador: 'Pedro',
        participante1: 'Pedro',
        musica: 'Dutchland',
        votos: 11,
    })

    db.Apresentacao.create({
        ra_criador: 200,
        nome_criador: 'Julia',
        participante1: 'Julia',
        musica: 'Nothing Else Matters',
        votos: 13,
    })

    db.Periodovotacao.create({
        identificador: 3,
        periodofotacaoiniciado: false,
    })
}

module.exports = popular_db()