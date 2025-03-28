const sequelize = require("../config/db");

// Models
const User = require("../database/models/User");
const Cargo = require("../database/models/Cargo");
const Categoria = require("../database/models/Categoria");
const Area = require("../database/models/Area");
const Curso = require("../database/models/Curso");
const Conteudo = require("../database/models/Conteudo");
const Inscricao_Curso = require("../database/models/Inscricao_Curso");
const Topico_Categoria = require("../database/models/Topico_Categoria");
const Comentario_Topico = require("../database/models/Comentario_Topico");
const Trabalho_Entregue = require("../database/models/Trabalho_Entregue");
const Avaliacao = require("../database/models/Avaliacao");

// Dados Teste
const fs = require('fs');
const path = require('path');
const sqlPath = path.join(__dirname, '../seeders/dados_teste.sql');
const dadosSQL = fs.readFileSync(sqlPath, 'utf-8');

(async () => {
  try {
    // Sincroniza e depois insere os dados
    await sequelize.sync({ alter: true });
    console.log("Base de dados sincronizada!");

    // Executa os dados de teste
    await sequelize.query(dadosSQL);
    console.log("Dados de teste inseridos!");

    process.exit();
  } catch (error) {
    console.error("Erro ao sincronizar ou carregar os dados de teste:", error.message);
    console.error("Detalhes do erro:", error);
    process.exit(1);
  }
})();
