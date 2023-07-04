const sequelize = require('sequelize');
const db = require('../config/db');
const path = require('path');
const candidato = require('../models/candidato');
const periodovotacao = require('../models/periodovotacao');
const projeto = require('../models/projeto');
const unirest = require("unirest");

module.exports = {
    async getMenu(req,res){
        res.render('menu');
    },
    async getTelalogincandidato(req,res){
        res.render('logar-candidato');
    },
    async getTelaloginresponsavel(req, res){
        res.render('logar-responsavel');
    },
    async getTelaloginadm(req,res){
        res.render('logar-adm');
    },

    async getValidarcandidato(req,res){  //<====== apizado
        var pessoas= await db.Candidato.findOne({where: {cpf: req.body.cpf}});
        //var pessoas = await unirest.get('http://localhost:8000/validar-candidatoaA')
        if (pessoas === null){
            res.redirect('/logar-candidato');
        }else{
            res.redirect("/candidato/" + req.body.cpf);
        }
    },
    async getValidarresponsavel(req,res){ //<====== apizado
        var pessoas = await db.Responsavel.findOne({where: {cpf: req.body.cpf}});
        //var pessoas = await unirest.get('http://localhost:8000/validar-responsavelA')
        console.log("=============passou aqui" + req.body.cpf)
        if (pessoas === null){
            res.redirect('/logar-responsavel');
        }else{
            res.redirect("/responsavel/" + req.body.cpf);
        }
    },
    async getValidaradm(req,res){  //<== Alterado
        var pessoas = await db.Adm.findOne({where: {id: req.body.id}});
        //var pessoas = await unirest.get('http://localhost:8000/validar-admA')
        console.log("aqui")
        if (pessoas === null){
            res.redirect('/logar-adm');
        }else{
            res.redirect("/adm/" + req.body.id);
        }
    },
    async getCandidatomenu(req,res){
        db.Candidato.findOne({where: {cpf: req.params.cpf}}).then((candidato) => {
            res.render('menu-candidato', {candidato: candidato.toJSON()});
        });
    },
    async getResponsavelmenu(req,res){
        db.Responsavel.findOne({where: {cpf: req.params.cpf}}).then((responsavel) => {
            res.render('menu-responsavel', {responsavel: responsavel.toJSON()});
        });
    },
    async getAdmmenu(req,res){
        res.render('menu-adm');
    },
    async getListcandidatos(req,res){  //<=== certo a principio
        db.Candidato.findAll().then((candidato) => {
            res.render('lista-candidatos', {candidato: candidato.map(candidato => candidato.toJSON())});
        });
    },

    async getListmeusprojetos(req,res){
        db.Projeto.findAll({where: {cpf_criador: req.params.cpf}}).then((projetos) => {
            res.render('lista-meus-projetos', {projetos: projetos.map(projetos => projetos.toJSON())});
        });
    },

    async getListtodosprojetos(req,res){
        db.Projeto.findAll().then((projetos) => {
            res.render('lista-todos-projetos', {projetos: projetos.map(projetos => projetos.toJSON())});
        });
    },

    async getEditarcandidato(req, res){  //<=== editado a principio
        db.Candidato.findOne({where: {id: req.params.id}}).then((candidato) => {
            res.render('editar-candidatos', {candidato: candidato.toJSON()});
        });
        //var candidato = await db.Candidato.findAll();
        //res.render('editar-candidatos', {candidato: candidato.toJSON()});
    },

    async getEditarresponsavel(req, res){  //<=== editado a principio
        db.Responsavel.findOne({where: {id: req.params.id}}).then((responsavel) => {
            res.render('editar-responsavel', {responsavel: responsavel.toJSON()});
        });
        //var candidato = await db.Candidato.findAll();
        //res.render('editar-candidatos', {candidato: candidato.toJSON()});
    },

    async getListresponsavel(req,res){  //<=== certo a principio
        db.Responsavel.findAll().then((responsavel) => {
            res.render('lista-responsavel', {responsavel: responsavel.map(responsavel => responsavel.toJSON())});
        });
    },

    async getEditarmeuprojeto(req, res){
        db.Projeto.findOne({where: {id: req.params.id}}).then((projeto) => {
            res.render('editar-meu-projeto', {projeto: projeto.toJSON()});
        });
    },

    async getExcluircandidato(req, res){ //<=== editado
        db.Candidato.findOne({where: {id: req.params.id}}).then((candidato) => {
            res.render('excluir-candidato', {candidato: candidato.toJSON()});
        });
    },

    async getExcluirResponsavel(req, res){ //<=== editado
        db.Responsavel.findOne({where: {id: req.params.id}}).then((responsavel) => {
            res.render('excluir-responsavel', {responsavel: responsavel.toJSON()});
        });
    },

    async getExcluirmeuprojeto(req, res){
        db.Projeto.findOne({where: {id: req.params.id}}).then((projeto) => {
            res.render('excluir-meu-projeto', {projeto: projeto.toJSON()});
        });
    },

    async postExcluircandidato(req, res){ //<=== editado
        await db.Candidato.destroy({
            where: {id: req.body.id},
        });
        res.redirect('/listar-candidatos');
    },

    async postExcluirresponsavel(req, res){ //<=== editado
        await db.Responsavel.destroy({
            where: {id: req.body.id},
        });
        res.redirect('/listar-responsavel');
    },

    async postExcluirmeuprojeto(req, res){ 
        var temp = await db.Projeto.findOne({where: {id: req.body.id}});
        var racriador = temp.cpf_criador;
        await db.Projeto.destroy({
            where: {id: req.body.id},
        });
        res.redirect("/listar-projetos/" + racriador);
    },

    async postEditcandidato(req, res) { //<=== editado
        var candidato = await db.Candidato.findOne({where: {id: req.body.id}});
        if (candidato) {
            candidato.cpf = req.body.cpf;
            candidato.nome = req.body.nome;
            candidato.idade = req.body.idade;
            candidato.email = req.body.email;
            await candidato.save();
        }
        res.redirect('/listar-candidatos');
    },

    async postEditresponsavel(req, res) { //<=== editado
        var responsavel = await db.Responsavel.findOne({where: {id: req.body.id}});
        if (responsavel) {
            responsavel.cpf = req.body.cpf;
            responsavel.nome = req.body.nome;
            responsavel.idade = req.body.idade;
            responsavel.email = req.body.email;
            await responsavel.save();
        }
        res.redirect('/listar-candidatos');
    },

    async postEditarmeuprojeto(req,res){
        var projeto = await db.Projeto.findOne({where: {id: req.body.id}});
        console.log("PASSOU POR AQUI")
        console.log(projeto)
        console.log("=====================================================================================")
        if (projeto) {
            projeto.participante1 = req.body.participante1;
            projeto.participante2 = req.body.participante2;
            projeto.participante3 = req.body.participante3;
            projeto.descricao = req.body.descricao;
            await projeto.save();
        }
        res.redirect("/listar-projetos/" + req.body.cpf_c);
    },


    async getCadastrarcandidato(req, res){  //<=== novo
        res.render('cadastrar-candidatos');
    },

    async getCadastrarresponsavel (req,res){ //<=== novo
        res.render('cadastrar-responsavel-projetos')
    },

    async getCadastrarprojetos (req,res){ //<=== novo
        db.Responsavel.findOne({where: {cpf: req.params.cpf}}).then((responsavel) => {
            res.render('cadastrar-projetos', {responsavel: responsavel.toJSON()});
        });
    },

    async postCadastrarcandidato(req, res){  //<=== novo
        db.Candidato.create({
            cpf: req.body.cpf,
            nome: req.body.nome,
            idade: req.body.idade,
            email: req.body.idade,
            projetointeressado_id: 0,
            projetoparticipando_id: 0
        })
        res.redirect("/adm/90")
    },

    async postCadastrarresponsavel(req, res){  //<=== novo
        db.Responsavel.create({
            cpf: req.body.cpf,
            nome: req.body.nome,
            idade: req.body.idade,
            email: req.body.idade,
        })
        res.redirect("/adm/90")
    },

    async postCadastrarprojeto(req, res){  //<=== novo
        db.Projeto.create({
            cpf_criador: req.body.cpf_c,
            nome_criador: req.body.nome_c,
            descricao: req.body.descricao,
            interessados: 0,
            p1: null,
            p2: null,
            p3: null
        })
        res.redirect("/responsavel/" + req.body.cpf_c)
    },

    async getTelainteresse(req, res){
        db.Projeto.findOne({where: {id: req.params.id}}).then((projeto) => {
            res.render('interesse', {projeto: projeto.toJSON()});
        });
    },

    async postInteresse(req, res){
        var projeto = await db.Projeto.findOne({where: {id: req.body.id}})
        console.log("=========1======================" + req.body.id)
        if(projeto.p1 === null){
            console.log("===========2====================")
            projeto.p1 = req.body.nome
            projeto.interessados = projeto.interessados + 1
            await projeto.save();
            res.redirect("http://localhost:8081/menu")
        }else if(projeto.p2 === null){
            console.log("===========3====================")
            projeto.p2 = req.body.nome
            projeto.interessados = projeto.interessados + 1
            await projeto.save();
            res.redirect("http://localhost:8081/menu")
        }else if(projeto.p3 === null){
            console.log("=============4==================")
            projeto.p3 = req.body.nome
            projeto.interessados = projeto.interessados + 1
            await projeto.save();
            res.redirect("http://localhost:8081/menu")
        }

    },

    async getTelainteresse(req, res){
        db.Projeto.findOne({where: {id: req.params.id}}).then((projeto) => {
            res.render('definir-interesse', {projeto: projeto.toJSON()});
        });
    },

    async postTimeinteresse(req, res){
        var projeto = await db.Projeto.findOne({where: {id: req.body.id}})
        projeto.participante1 = projeto.p1
        projeto.participante2 = projeto.p2
        projeto.participante3 = projeto.p3
        await projeto.save();
    },

}