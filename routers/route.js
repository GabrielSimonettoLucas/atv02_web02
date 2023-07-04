const express = require ('express');
const controller = require('../views/controller');
const route = express.Router();

module.exports = route;

route.get("/menu",controller.getMenu);

route.get("/logar-candidato",controller.getTelalogincandidato);
route.get("/logar-responsavel", controller.getTelaloginresponsavel);
route.get("/logar-adm", controller.getTelaloginadm);

route.post("/validar-candidato", controller.getValidarcandidato);
route.post("/validar-responsavel", controller.getValidarresponsavel);
route.post("/validar-adm", controller.getValidaradm);

route.get("/candidato/:cpf", controller.getCandidatomenu);
route.get("/responsavel/:cpf", controller.getResponsavelmenu);
route.get("/adm/:id", controller.getAdmmenu);

route.get("/listar-candidatos", controller.getListcandidatos);
route.get("/listar-responsavel", controller.getListresponsavel)
route.get("/listar-projetos/:cpf", controller.getListmeusprojetos)
route.get("/listar-todos-projetos/:cpf", controller.getListtodosprojetos)

route.get("/editarCandidato/:id", controller.getEditarcandidato)
route.get("/editarResponsavel/:id", controller.getEditarresponsavel)
route.get("/editarMeuprojeto/:id", controller.getEditarmeuprojeto)

route.get("/excluirCandidato/:id", controller.getExcluircandidato)
route.get("/excluirResponsavel/:id", controller.getExcluirResponsavel)
route.get("/excluirMeuprojeto/:id", controller.getExcluirmeuprojeto)

route.post("/post-edit-candidatos", controller.postEditcandidato)
route.post("/post-edit-responsavel", controller.postEditresponsavel)
route.post("/post-edit-meu-projeto", controller.postEditarmeuprojeto)

route.post("/post-excluir-candidatos", controller.postExcluircandidato)
route.post("/post-excluir-responsavel", controller.postExcluirresponsavel)
route.post("/post-excluir-meuprojeto", controller.postExcluirmeuprojeto)


route.get("/cadastrar-candidato", controller.getCadastrarcandidato);
route.get("/cadastrar-responsavel", controller.getCadastrarresponsavel)
route.get("/cadastrar-projetos/:cpf", controller.getCadastrarprojetos)

route.post("/post-cadastrar-candidato", controller.postCadastrarcandidato);
route.post("/post-cadastrar-responsavel", controller.postCadastrarresponsavel);
route.post("/post-cadastrar-projeto", controller.postCadastrarprojeto);

route.get("/declararInteresse/:id", controller.getTelainteresse)
route.post("/post-interesse", controller.postInteresse)

route.get("/visualizarInteressados/:id", controller.getTelatimeinteresse)
route.post("/post-time-interesse", controller.postTimeinteresse)