const sequelize = require('sequelize');
const db = require('../config/db');
const path = require('path');
const candidato = require('../models/candidato');
const periodovotacao = require('../models/periodovotacao');
const projeto = require('../models/projeto');
const unirest = require("unirest");

module.exports = {
    async getValidarcandidato(req,res){
        var pessoas= await db.Candidato.findOne({where: {cpf: req.body.cpf}});
        console.log("==============================")
        return res.json({"data": {"status": "success", pessoas}})
    },

    async getValidarresponsavel(req,res){
        var pessoas = await db.Responsavel.findOne({where: {cpf: req.body.cpf}});
        console.log("==============================")
        return res.json({"data": {"status": "success", pessoas}})
    },
    async getValidaradm(req,res){  //<== Alterado
        console.log("==============================")
        var pessoas = await db.Adm.findOne({where: {id: req.body.id}});
        console.log("==============================")
        return res.json({"data": {"status": "success", pessoas}})
    },
    async getListcandidatos(req,res){ 
        var temp = await db.Candidato.findAll()
        console.log("==============================")
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
        
    },

    async getListmeusprojetos(req,res){ 
        var temp = await db.Projeto.findAll()
        if (temp === null){
            return res.status(204).json();
        }
        console.log("==============================")
        return res.json({"data": {"status": "success", temp}})
    },

    async getListtodosprojetos(req,res){ 
        var temp = await db.Projeto.findAll()
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },

    async getEditarcandidato(req,res){ 
        var temp = await db.Candidato.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
        console.log("==============================")
    },

    async getEditarresponsavel(req,res){ 
        var temp = await db.Responsavel.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },

    async getListresponsavel(req,res){ 
        var temp = await db.Responsavel.findAll()
        console.log("==============================")
        console.log("==============================")
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
        
    },
    async getEditarmeuprojeto(req,res){ 
        var temp = await db.Projeto.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },
    async getExcluircandidato(req,res){ 
        var temp = await db.Projeto.findOne({where: {id: req.params.id}})
        console.log("==============================")
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },
    async getExcluirResponsavel(req,res){ 
        var temp = await db.Responsavel.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },

    async getExcluirmeuprojeto(req,res){ 
        console.log("==============================")
        var temp = await db.Projeto.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },

    async getExcluircandidato(req,res){ 
        var temp = await db.Candidato.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },
    async getExcluirresponsavel(req,res){ 
        console.log("==============================")
        var temp = await db.Responsavel.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },
    async getExcluirmeuprojeto(req,res){ 
        var temp = await db.Projeto.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },

    async getEditcandidato(req,res){ 
        var temp = await db.Candidato.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },

    async getEditresponsavel(req,res){ 
        var temp = await db.Responsavel.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },

    async getEditmeuprojeto(req,res){ 
        var temp = await db.Projeto.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },

    async getCadastrarcandidato(req,res){ 
        var temp = await db.Candidato.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },

    async getCadastrarresponsavel(req,res){ 
        var temp = await db.Candidato.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },
    async getCadastrarprojetos(req,res){ 
        var temp = await db.Projeto.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },
    async getCadastcandidato(req,res){ 
        var temp = await db.candidato.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },
    async getCadastrarprojetos(req,res){ 
        var temp = await db.Projeto.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },

    async getCadastrarprojetos(req,res){ 
        var temp = await db.Projeto.findOne({where: {id: req.params.id}})
        if (temp === null){
            return res.status(204).json();
        }
        return res.json({"data": {"status": "success", temp}})
    },


}