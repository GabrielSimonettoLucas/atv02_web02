const express = require ('express');
const controller = require('../controllers/controllerAPI');
const route = express.Router();

module.exports = route;

route.get("/menu",controller.getMenu);

route.get("/logar-candidatoA",controller.getTelalogincandidato);
route.get("/logar-responsavelA", controller.getTelaloginresponsavel);
route.get("/logar-adm", controller.getTelaloginadm);

route.post("/validar-candidatoA", controller.getValidarcandidato);
route.post("/validar-responsavelA", controller.getValidarresponsavel);
route.post("/validar-admA", controller.getValidaradm);

route.get("/candidatoA/:cpf", controller.getCandidatomenu);
route.get("/responsavelA/:cpf", controller.getResponsavelmenu);
route.get("/admA/:id", controller.getAdmmenu);

route.get("/listar-candidatosA", controller.getListcandidatos);
route.get("/listar-responsavelA", controller.getListresponsavel)
route.get("/listar-projetosA/:cpf", controller.getListmeusprojetos)
route.get("/listar-todos-projetosA/:cpf", controller.getListtodosprojetos)

route.get("/editarCandidatoA/:id", controller.getEditarcandidato)
route.get("/editarResponsavelA/:id", controller.getEditarresponsavel)
route.get("/editarMeuprojetoA/:id", controller.getEditarmeuprojeto)

route.get("/excluirCandidatoA/:id", controller.getExcluircandidato)
route.get("/excluirResponsavelA/:id", controller.getExcluirResponsavel)
route.get("/excluirMeuprojetoA/:id", controller.getExcluirmeuprojeto)

route.get("/cadastrar-candidatoA", controller.getCadastrarcandidato);
route.get("/cadastrar-responsavelA", controller.getCadastrarresponsavel)
route.get("/cadastrar-projetos/:cpfA", controller.getCadastrarprojetos)

route.post("/post-cadastrar-candidatoA", controller.postCadastrarcandidato);
route.post("/post-cadastrar-responsavelA", controller.postCadastrarresponsavel);
route.post("/post-cadastrar-projetoA", controller.postCadastrarprojeto);

route.get("/declararInteresseA/:id", controller.getTelainteresse)
route.post("/post-interesseA", controller.postInteresse)

route.get("/visualizarInteressadosA/:id", controller.getTelainteresse)
route.post("/post-time-interesseA", controller.postTimeinteresse)
