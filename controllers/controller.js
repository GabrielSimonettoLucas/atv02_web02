const sequelize = require('sequelize');
const db = require('../config/db');
const path = require('path');
const candidato = require('../models/candidato');
const periodovotacao = require('../models/periodovotacao');

module.exports = {
    async getMenu(req,res){
        res.render('menu');
    },
    async getTelalogincandidato(req,res){
        res.render('logar-candidato');
    },
    async getTelaloginouvinte(req, res){
        res.render('logar-ouvinte');
    },
    async getTelaloginadm(req,res){
        res.render('logar-adm');
    },
    async getValidarcandidato(req,res){
        var pessoas = await db.Candidato.findOne({where: {ra: req.body.ra}});
        if (pessoas === null){
            res.redirect('/logar-candidato');
        }else{
            res.redirect("/candidato/" + req.body.ra);
        }
    },
    async getValidarouvinte(req,res){
        var pessoas = await db.Ouvinte.findOne({where: {ra: req.body.ra}});
        if (pessoas === null){
            res.redirect('/logar-ouvinte');
        }else{
            res.redirect("/ouvinte/" + req.body.ra);
        }
    },
    async getValidaradm(req,res){
        var pessoas = await db.Adm.findOne({where: {ra: req.body.ra}});
        if (pessoas === null){
            res.redirect('/logar-adm');
        }else{
            res.redirect("/adm/" + req.body.ra);
        }
    },
    async getCandidatomenu(req,res){
        db.Candidato.findOne({where: {ra: req.params.id}}).then((candidato) => {
            res.render('menu-candidato', {candidato: candidato.toJSON()});
        });
    },
    async getOuvintemenu(req,res){
        db.Ouvinte.findOne({where: {ra: req.params.id}}).then((ouvinte) => {
            res.render('menu-ouvinte', {ouvinte: ouvinte.toJSON()});
        });
    },
    async getAdmmenu(req,res){
        res.render('menu-adm');
    },
    async getListcandidatos(req,res){
        db.Candidato.findAll().then((candidato) => {
            res.render('lista-candidatos', {candidato: candidato.map(candidato => candidato.toJSON())});
        });
    },
    async getListouvintes(req,res){
        db.Ouvinte.findAll().then((ouvinte) => {
            res.render('lista-ouvintes', {ouvinte: ouvinte.map(ouvinte => ouvinte.toJSON())});
        });
    },
    async getListminhasparesentacoes(req,res){
        db.Apresentacao.findAll({where: {ra_criador: req.params.id}}).then((apresentacao) => {
            res.render('lista-minhas-apresentacoes', {apresentacao: apresentacao.map(apresentacao => apresentacao.toJSON())});
        });
    },

    async getListtodasapresentacao(req,res){
        db.Apresentacao.findAll({order: [['votos', 'DESC']]}).then((apresentacao) => {
            res.render('listar-todas-apresentacao', {apresentacao: apresentacao.map(apresentacao => apresentacao.toJSON())});
        });
    },

    async getListvotarapresentacao(req,res){
        db.Apresentacao.findAll().then((apresentacao) => {
            res.render('lista-votar-apresentacao', {apresentacao: apresentacao.map(apresentacao => apresentacao.toJSON())});
        });
    },

    async getEditarcandidato(req, res){
        db.Candidato.findOne({where: {ra: req.params.id}}).then((candidato) => {
            res.render('editar-candidatos', {candidato: candidato.toJSON()});
        });
        //var candidato = await db.Candidato.findAll();
        //res.render('editar-candidatos', {candidato: candidato.toJSON()});
    },

    async getEditarouvinte(req, res){
        db.Ouvinte.findOne({where: {ra: req.params.id}}).then((ouvinte) => {
            res.render('editar-ouvintes', {ouvinte: ouvinte.toJSON()});
        });
    },

    async getEditarminhasapresentacoes(req, res){
        db.Apresentacao.findOne({where: {id: req.params.id}}).then((apresentacao) => {
            res.render('editar-minhas-apresentacoes', {apresentacao: apresentacao.toJSON()});
        });
    },

    async getEditarapresentacao(req, res){
        db.Apresentacao.findOne({where: {id: req.params.id}}).then((apresentacao) => {
            res.render('editar-apresentacao', {apresentacao: apresentacao.toJSON()});
        });
    },

    async getExcluircandidato(req, res){
        db.Candidato.findOne({where: {ra: req.params.id}}).then((candidato) => {
            res.render('excluir-candidato', {candidato: candidato.toJSON()});
        });
    },

    async getExcluirminhapresentacao(req, res){
        db.Apresentacao.findOne({where: {id: req.params.id}}).then((apresentacao) => {
            res.render('excluir-minha-apresentacao', {apresentacao: apresentacao.toJSON()});
        });
    },

    async getExcluirapresentacao(req, res){
        db.Apresentacao.findOne({where: {id: req.params.id}}).then((apresentacao) => {
            res.render('excluir-apresentacao', {apresentacao: apresentacao.toJSON()});
        });
    },


    async getExcluirouvinte(req, res){
        db.Ouvinte.findOne({where: {ra: req.params.id}}).then((ouvinte) => {
            res.render('excluir-ouvinte', {ouvinte: ouvinte.toJSON()});
        });
    },

    async postExcluircandidato(req, res){ 
        await db.Candidato.destroy({
            where: {ra: req.body.id},
        });
        res.redirect('/listar-candidatos');
    },

    async postExcluirouvinte(req, res){ 
        await db.Ouvinte.destroy({
            where: {ra: req.body.id},
        });
        res.redirect('/listar-ouvintes');
    },

    async postExcluirminhaapresentacao(req, res){ 
        var temp = await db.Apresentacao.findOne({where: {id: req.body.id}});
        var racriador = temp.ra_criador;
        await db.Apresentacao.destroy({
            where: {id: req.body.id},
        });
        res.redirect("/listar-minhas-apresentacoes/" + racriador);
    },

    async postExcluirapresentacao(req, res){ 
        var temp = await db.Apresentacao.findOne({where: {id: req.body.id}});
        await db.Apresentacao.destroy({
            where: {id: req.body.id},
        });
        res.redirect("/listar-todas-apresentacao/");
    },


    async postEditcandidato(req, res) {
        var candidato = await db.Candidato.findOne({where: {ra: req.body.id}});
        if (candidato) {
            candidato.ra = req.body.ra;
            candidato.nome = req.body.nome;
            await candidato.save();
        }
        res.redirect('/listar-candidatos');
    },

    async postEditouvinte(req, res) {
        var ouvinte = await db.Ouvinte.findOne({where: {ra: req.body.id}});
        console.log("PASSOU POR AQUI")
        if (ouvinte) {
            ouvinte.ra = req.body.ra;
            ouvinte.nome = req.body.nome;
            await ouvinte.save();
        }
        res.redirect('/listar-ouvintes');
    },

    async postEditarminhasapresentacao(req,res){
        var apresentacao = await db.Apresentacao.findOne({where: {id: req.body.id}});
        console.log("PASSOU POR AQUI")
        console.log(apresentacao)
        console.log("=====================================================================================")
        if (apresentacao) {
            apresentacao.participante1 = req.body.participante1;
            apresentacao.participante2 = req.body.participante2;
            apresentacao.participante3 = req.body.participante3;
            apresentacao.participante4 = req.body.participante4;
            apresentacao.participante5 = req.body.participante5;
            apresentacao.participante6 = req.body.participante6;
            apresentacao.musica = req.body.musica;
            await apresentacao.save();
        }
        res.redirect("/listar-minhas-apresentacoes/" + req.body.ra_criador);
    },

    async postEditarapresentacao(req,res){
        var apresentacao = await db.Apresentacao.findOne({where: {id: req.body.id}});
        console.log("PASSOU POR AQUI")
        console.log(apresentacao)
        console.log("=====================================================================================")
        if (apresentacao) {
            apresentacao.participante1 = req.body.participante1;
            apresentacao.participante2 = req.body.participante2;
            apresentacao.participante3 = req.body.participante3;
            apresentacao.participante4 = req.body.participante4;
            apresentacao.participante5 = req.body.participante5;
            apresentacao.participante6 = req.body.participante6;
            apresentacao.musica = req.body.musica;
            await apresentacao.save();
        }
        res.redirect("/listar-todas-apresentacao");
    },

    async getAlterarvotacao(req,res){
        var votacao = await db.Periodovotacao.findOne({where: {identificador: 3}});
        console.log(typeof votacao.periodofotacaoiniciado)
        if (votacao.periodofotacaoiniciado == false){
            votacao.periodofotacaoiniciado = true;
            res.render('periodo-votacao-iniciado')
            await votacao.save();
        }else{
            votacao.periodofotacaoiniciado = false;
            res.render('periodo-votacao-encerrado')
            await votacao.save();
        }
    },

    async getCriarapresentacao(req,res){
        db.Candidato.findOne({where: {ra: req.params.id}}).then((candidato) => {
            res.render('criar-apresentacao', {candidato: candidato.toJSON()});
        });
    },

    async postCriarapresentacao(req,res){
        var candidato = await db.Candidato.findOne({where: {ra: req.body.id}});
        db.Apresentacao.create({
            ra_criador: req.body.id,
            nome_criador: candidato.nome,
            participante1: req.body.participante1,
            participante2: req.body.participante2,
            participante3: req.body.participante3,
            participante4: req.body.participante4,
            participante5: req.body.participante5,
            participante6: req.body.participante6,
            musica: req.body.musica,
            votos: 0,
        });

        res.redirect('/candidato/' + req.body.id);

    },

    async getVotarapresentacao(req, res){
        db.Apresentacao.findOne({where: {id: req.params.id}}).then((apresentacao) => {
            res.render('votar-apresentacao', {apresentacao: apresentacao.toJSON()});
        });
    },

    async postVotarapresentacao(req, res){ 
        var periodovotacao = await db.Periodovotacao.findOne({where: {identificador: 3}});

        console.log("PASSOU POR AQUI")
        console.log("==================================================================")

        if(periodovotacao.periodofotacaoiniciado == false){
            res.render('votacao-periodo-nao-iniciado')
        }else{
            var temp = await db.Apresentacao.findOne({where: {id: req.body.id}});
            temp.votos = temp.votos + 1;
            await temp.save();
            res.redirect("/menu");
        }
    },

}

