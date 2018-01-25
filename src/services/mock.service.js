let _ = require('underscore');
let unsortedContatos = require('../../database/mock_data/contatos.mock');
let contatos = _.sortBy(unsortedContatos, contato => contato.nome);

let operadoras = [
	{nome: 'Oi', codigo: 14, categoria: 'Celular', preco: 2.0},
	{nome: 'Tim', codigo: 15, categoria: 'Celular', preco: 2.1},
	{nome: 'Vivo', codigo: 41, categoria: 'Celular', preco: 2.2},
	{nome: 'GVT', codigo: 25, categoria: 'Fixo', preco: 2.3},
	{nome: 'Embratel', codigo: 21, categoria: 'Fixo', preco: 2.4}
];

module.exports = {
    getServiceDescription: () => {
        return 'javascript mock';
    },

    getContatos: (req, res) => { 		
        let pageNumber = req.query.pagenumber;
        let limit = req.query.limit;
        let findName = req.query.findname || '';

        if (pageNumber && limit) { 
            pageNumber = parseInt(pageNumber);
            limit = parseInt(limit);
            const skipNumber = (pageNumber -1) * limit;
            
            let filteredData;
            if (findName.length > 0) {
                let regx = new RegExp(findName, "i");
                filteredData = contatos.filter(contato => {
                    return regx.test(contato.nome);
                });
            } else {
                filteredData = contatos;
            }

            const totalCount = filteredData.length;
            const totalPages = Math.ceil(totalCount / limit);
            
            const paginatedData = _.first(_.rest(filteredData, skipNumber), limit); 
            
            res.json({
                totalCount: totalCount,
                totalPages: totalPages,
                pageNumber: pageNumber,
                paginatedData: paginatedData
            });
        } else {
            res.json(contatos);
        }
    },

    getContato: (req, res) => { 	
        let contatoId = (req.params.contatoId || 0);
    
        let busca = contatos.filter(contato => contato.serial == contatoId);
    
        if (busca.length == 0) {	
            res.status(404).send('Not found');
            return;	
        }	
    
        res.json(busca[0]);
    },

    saveContato: (req, res) => { 	
        contatos.push(req.body);
        res.json(req.body);
    },

    deleteContato: (req, res) => {
        let contatoId = (req.params.contatoId || 0);
    
        let busca = contatos.filter(contato => contato.serial == contatoId);

        if (busca.length == 0) {
            res.json({deleted: false});	
            return;	
        }
    
        contatos = contatos.filter(contato => contato.serial != contatoId);
    
        res.json({deleted: true});
    },

    getOperadoras: (req, res) => { 		
        res.json(operadoras);
    }
};
