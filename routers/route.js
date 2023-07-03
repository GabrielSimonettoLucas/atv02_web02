const express = require ('express');
const controller = require('../controllers/controller');
const route = express.Router();

module.exports = route;

route.get("/menu",controller.getMenu);

route.get("/logar-candidato",controller.getTelalogincandidato);
route.get("/logar-ouvinte", controller.getTelaloginouvinte);
route.get("/logar-adm", controller.getTelaloginadm);

route.post("/validar-candidato", controller.getValidarcandidato);
route.post("/validar-ouvinte", controller.getValidarouvinte);
route.post("/validar-adm", controller.getValidaradm);

route.get("/candidato/:id", controller.getCandidatomenu);
route.get("/ouvinte/:id", controller.getOuvintemenu);
route.get("/adm/:id", controller.getAdmmenu);

route.get("/criar-apresentacoes/:id", controller.getCriarapresentacao);

route.get("/listar-candidatos", controller.getListcandidatos);
route.get("/listar-ouvintes", controller.getListouvintes);
route.get("/listar-minhas-apresentacoes/:id", controller.getListminhasparesentacoes)
route.get("/listar-todas-apresentacao", controller.getListtodasapresentacao)
route.get("/listar-votar-apresentacoes/:id", controller.getListvotarapresentacao)

route.get("/editarCandidato/:id", controller.getEditarcandidato)
route.get("/editarOuvinte/:id", controller.getEditarouvinte)
route.get("/editarMinhaapresentacao/:id", controller.getEditarminhasapresentacoes)
route.get("/editarApresentacao/:id", controller.getEditarapresentacao) 

route.get("/excluirCandidato/:id", controller.getExcluircandidato)
route.get("/excluirOuvinte/:id", controller.getExcluirouvinte)
route.get("/excluirMinhapresentacao/:id", controller.getExcluirminhapresentacao)
route.get("/excluirApresentacao/:id", controller.getExcluirapresentacao)

route.post("/post-edit-ouvintes", controller.postEditouvinte)
route.post("/post-edit-candidatos", controller.postEditcandidato)
route.post("/post-edit-minhas-apresentacao", controller.postEditarminhasapresentacao)
route.post("/post-edit-apresentacao", controller.postEditarapresentacao)

route.post("/post-criar-apresentacao", controller.postCriarapresentacao)

route.post("/post-excluir-candidatos", controller.postExcluircandidato)
route.post("/post-excluir-ouvintes", controller.postExcluirouvinte)
route.post("/post-excluir-minhaapresentacao", controller.postExcluirminhaapresentacao)
route.post("/post-excluir-apresentacao", controller.postExcluirapresentacao)
route.post("/post-votar-apresentacao", controller.postVotarapresentacao)

route.get("/votarApresentacao/:id", controller.getVotarapresentacao)

route.get("/alterar-votacao", controller.getAlterarvotacao);