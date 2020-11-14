const { Client } = require('@elastic/elasticsearch');

const pcdas_node = "https://dados-pcdas.icict.fiocruz.br";
const pcdas_username = "aluno.treinamento";
const pcdas_password = "aluno123456";
const consulta01 = {
    index: 'datasus-sinasc-dss',
    body: {
        query: {
            match_all: {}
        }
    }
};

// Cria objeto que representa a conexão com o serviço Elastic Search
const client = new Client({ 
    node: pcdas_node,
    auth: {
        username: pcdas_username,
        password: pcdas_password
    }
});

client
    .search(consulta01)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
;
