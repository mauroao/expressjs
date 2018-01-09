let operadoras = [
	{nome: 'Oi', codigo: 14, categoria: 'Celular', preco: 2.0},
	{nome: 'Tim', codigo: 15, categoria: 'Celular', preco: 2.1},
	{nome: 'Vivo', codigo: 41, categoria: 'Celular', preco: 2.2},
	{nome: 'GVT', codigo: 25, categoria: 'Fixo', preco: 2.3},
	{nome: 'Embratel', codigo: 21, categoria: 'Fixo', preco: 2.4}
];

let contatos = [
	{serial: 123456, nome: 'Pedro', telefone: '9999-8888', data: new Date(), operadora: operadoras[0]},
	{serial: 234567, nome: 'Ana', telefone: '9999-8877', data: new Date(), operadora: operadoras[1]},
	{serial: 891234, nome: 'Maria', telefone: '9999-8866', data: new Date(), operadora: operadoras[2]},
	{serial: 923450, nome: 'Antonio da Silva', telefone: '9999-2888', data: new Date(), operadora: operadoras[3]},
	{serial: 934560, nome: 'Ana da Silva', telefone: '9999-8872', data: new Date(), operadora: operadoras[4]},
	{serial: 991230, nome: 'Rubens da Silva', telefone: '9999-8826', data: new Date(), operadora: operadoras[0]}
];

module.exports = {
    getServiceDescription: () => {
        return 'javascript mock';
    },
    getContatos: (req, res) => { 		
        res.json(contatos);
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
