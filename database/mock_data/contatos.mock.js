/*
https://www.json-generator.com/#

[
  '{{repeat(100, 100)}}',
  {
    serial: function(tags, index) {
      return tags.integer(100000, 999999).toString();
    },
    nome: '{{firstName()}} {{surname()}}',
    telefone: '{{integer(10000, 20000)}}-{{integer(1000, 2000)}}',
    data: '{{date(new Date(2014, 0, 1), new Date(), "ISODateTime")}}',
    operadora: {
      categoria: 'Celular',
      codigo: '14',
      nome: 'Oi',
      preco: 2
    }    
  }
]
*/

let contatos_json = `
[
  {
    "serial": "761961",
    "nome": "Mitzi Mason",
    "telefone": "18006-1186",
    "data": "2014-09-09T03:25:58",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "770938",
    "nome": "Turner Todd",
    "telefone": "12592-1382",
    "data": "2016-06-28T11:22:23",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "348064",
    "nome": "Lidia Key",
    "telefone": "10884-1538",
    "data": "2017-01-08T11:52:40",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "887608",
    "nome": "Nanette Holcomb",
    "telefone": "13437-1974",
    "data": "2014-06-25T02:02:43",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "377194",
    "nome": "Wells Skinner",
    "telefone": "18981-1809",
    "data": "2015-04-06T07:15:03",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "272439",
    "nome": "Natalia Dawson",
    "telefone": "11150-1125",
    "data": "2015-11-30T01:27:13",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "631063",
    "nome": "Mercedes Duffy",
    "telefone": "14008-1267",
    "data": "2016-03-11T05:35:13",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "684068",
    "nome": "Lawanda Stephens",
    "telefone": "19473-1069",
    "data": "2016-04-25T01:20:41",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "578352",
    "nome": "Ginger Pate",
    "telefone": "11265-1850",
    "data": "2015-10-31T08:21:46",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "784706",
    "nome": "Rose Sosa",
    "telefone": "15117-1613",
    "data": "2017-02-05T10:10:29",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "771753",
    "nome": "Hayden Witt",
    "telefone": "15390-1877",
    "data": "2014-04-28T12:05:23",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "667696",
    "nome": "Katie Beck",
    "telefone": "13103-1718",
    "data": "2014-11-17T12:30:20",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "660881",
    "nome": "Mattie Garrison",
    "telefone": "19954-1290",
    "data": "2016-02-11T02:20:28",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "109873",
    "nome": "Diane Buchanan",
    "telefone": "17011-1211",
    "data": "2015-09-13T06:34:26",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "583250",
    "nome": "Savage Kemp",
    "telefone": "18419-1533",
    "data": "2015-03-17T04:48:19",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "658037",
    "nome": "Todd Stafford",
    "telefone": "19060-1638",
    "data": "2018-01-05T10:37:42",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "322619",
    "nome": "Mayer Coleman",
    "telefone": "19450-1658",
    "data": "2014-12-13T10:54:51",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "310571",
    "nome": "Monique Shannon",
    "telefone": "13323-1944",
    "data": "2015-01-29T09:39:56",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "479745",
    "nome": "Cochran Bolton",
    "telefone": "18239-1559",
    "data": "2015-08-22T02:27:58",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "573692",
    "nome": "Holly Cline",
    "telefone": "19343-1161",
    "data": "2014-04-29T05:26:08",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "393351",
    "nome": "Malone Hogan",
    "telefone": "18043-1362",
    "data": "2017-04-16T12:16:27",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "541686",
    "nome": "Perez Mitchell",
    "telefone": "19735-1461",
    "data": "2017-07-12T04:21:46",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "787362",
    "nome": "Shannon Cooley",
    "telefone": "19120-1843",
    "data": "2015-07-01T07:28:40",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "137439",
    "nome": "Torres Cantrell",
    "telefone": "16982-1083",
    "data": "2016-02-21T11:42:22",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "949005",
    "nome": "Alvarado Odom",
    "telefone": "13515-1203",
    "data": "2015-03-31T03:58:47",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "806231",
    "nome": "Mallory Raymond",
    "telefone": "17503-1978",
    "data": "2015-04-01T05:48:20",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "679817",
    "nome": "Singleton Koch",
    "telefone": "13739-1883",
    "data": "2015-01-21T02:21:56",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "657398",
    "nome": "Gena Chase",
    "telefone": "11812-1358",
    "data": "2017-12-22T12:06:08",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "392943",
    "nome": "Shelly Snider",
    "telefone": "19006-1809",
    "data": "2016-07-28T12:34:14",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "142988",
    "nome": "Wood Ramos",
    "telefone": "16661-1647",
    "data": "2017-10-14T05:02:05",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "843058",
    "nome": "Moss Gamble",
    "telefone": "14059-1265",
    "data": "2015-07-26T09:01:39",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "449696",
    "nome": "Sonya Moses",
    "telefone": "12508-1960",
    "data": "2015-04-15T08:16:54",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "474665",
    "nome": "Kelley Williamson",
    "telefone": "15700-1946",
    "data": "2014-05-07T05:16:33",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "556028",
    "nome": "Bryant Finley",
    "telefone": "18808-1851",
    "data": "2014-12-20T10:03:09",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "618261",
    "nome": "Elinor Barry",
    "telefone": "16775-1692",
    "data": "2016-04-25T01:57:04",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "706022",
    "nome": "Best Johnston",
    "telefone": "15813-1430",
    "data": "2015-06-25T10:45:11",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "648732",
    "nome": "Pena Rivera",
    "telefone": "19433-1220",
    "data": "2015-07-27T12:56:06",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "681643",
    "nome": "Letha Curtis",
    "telefone": "19415-1430",
    "data": "2017-06-22T04:40:56",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "911026",
    "nome": "Virginia Cortez",
    "telefone": "17189-1044",
    "data": "2014-03-23T05:57:22",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "784375",
    "nome": "Rosalie Snow",
    "telefone": "11498-1852",
    "data": "2016-04-12T07:28:24",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "887153",
    "nome": "Henderson Harrington",
    "telefone": "14189-1423",
    "data": "2014-03-15T11:58:23",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "424538",
    "nome": "Eva Mcguire",
    "telefone": "19114-1021",
    "data": "2016-04-16T03:24:03",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "587718",
    "nome": "Michele Hoffman",
    "telefone": "18594-1167",
    "data": "2014-11-15T09:34:44",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "176524",
    "nome": "Jamie Bradley",
    "telefone": "10027-1780",
    "data": "2014-01-25T06:39:33",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "562725",
    "nome": "Susan Diaz",
    "telefone": "17447-1989",
    "data": "2016-07-22T01:30:17",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "544036",
    "nome": "Rae Carney",
    "telefone": "18853-1970",
    "data": "2017-03-04T09:35:20",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "264104",
    "nome": "Coffey Mcclure",
    "telefone": "18732-1282",
    "data": "2015-11-25T11:40:30",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "576528",
    "nome": "Nichole Lane",
    "telefone": "17480-1832",
    "data": "2017-12-26T10:21:24",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "993893",
    "nome": "Susana Herring",
    "telefone": "17116-1307",
    "data": "2014-09-24T09:50:33",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "562880",
    "nome": "Cash Delaney",
    "telefone": "18552-1376",
    "data": "2015-08-04T09:38:01",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "772320",
    "nome": "Latasha Payne",
    "telefone": "13035-1082",
    "data": "2017-07-18T04:37:33",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "675800",
    "nome": "Janell Gutierrez",
    "telefone": "19053-1251",
    "data": "2016-08-01T05:30:15",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "652311",
    "nome": "Barbra Lawrence",
    "telefone": "13635-1693",
    "data": "2016-12-10T11:02:23",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "190798",
    "nome": "Elena Aguilar",
    "telefone": "10739-1981",
    "data": "2015-01-24T04:04:23",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "767868",
    "nome": "Mann Conrad",
    "telefone": "17961-1572",
    "data": "2015-04-12T12:49:49",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "689507",
    "nome": "Melendez Vasquez",
    "telefone": "15108-1502",
    "data": "2015-12-07T02:59:45",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "717109",
    "nome": "Hopkins Alston",
    "telefone": "19553-1213",
    "data": "2016-07-08T05:50:45",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "290206",
    "nome": "Albert Saunders",
    "telefone": "14458-1870",
    "data": "2017-04-27T06:59:41",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "358200",
    "nome": "Allie Mccarty",
    "telefone": "14073-1570",
    "data": "2016-06-20T11:52:39",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "358023",
    "nome": "House Ayers",
    "telefone": "14629-1774",
    "data": "2017-09-17T07:51:31",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "405602",
    "nome": "Toni Oconnor",
    "telefone": "15063-1352",
    "data": "2014-09-15T10:38:10",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "606031",
    "nome": "Magdalena Morgan",
    "telefone": "17544-1760",
    "data": "2016-05-19T01:18:25",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "916030",
    "nome": "Estela Chen",
    "telefone": "13203-1405",
    "data": "2014-01-22T06:09:19",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "529395",
    "nome": "Yang Bowman",
    "telefone": "17577-1899",
    "data": "2017-08-28T01:52:58",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "721952",
    "nome": "Julianne Salazar",
    "telefone": "12602-1377",
    "data": "2017-10-31T12:12:48",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "630913",
    "nome": "Marcia Gentry",
    "telefone": "18419-1110",
    "data": "2014-07-26T12:15:58",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "603858",
    "nome": "Hess Downs",
    "telefone": "10054-1222",
    "data": "2014-09-13T06:54:59",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "352758",
    "nome": "Fletcher Miles",
    "telefone": "14043-1589",
    "data": "2017-05-24T12:14:50",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "119405",
    "nome": "Hillary Joyce",
    "telefone": "19967-1080",
    "data": "2017-02-07T11:08:45",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "741972",
    "nome": "Gregory Bass",
    "telefone": "10045-1984",
    "data": "2015-05-17T02:48:37",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "557867",
    "nome": "Louella Ingram",
    "telefone": "15398-1281",
    "data": "2017-12-02T10:43:50",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "929258",
    "nome": "Louisa Good",
    "telefone": "10408-1204",
    "data": "2016-05-16T11:04:29",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "750214",
    "nome": "Kathrine Knox",
    "telefone": "13322-1654",
    "data": "2014-03-07T03:37:47",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "229137",
    "nome": "Zelma Guerrero",
    "telefone": "17813-1186",
    "data": "2016-07-19T10:07:05",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "452940",
    "nome": "Ebony Stevens",
    "telefone": "16583-1263",
    "data": "2016-01-08T09:38:12",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "587563",
    "nome": "Jeannie Gregory",
    "telefone": "11287-1472",
    "data": "2015-04-12T04:47:03",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "189011",
    "nome": "Edwina Cabrera",
    "telefone": "13612-1969",
    "data": "2016-01-21T10:30:14",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "214383",
    "nome": "Blair Christensen",
    "telefone": "14570-1153",
    "data": "2014-05-01T03:20:22",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "785209",
    "nome": "Marilyn Hopkins",
    "telefone": "11085-1933",
    "data": "2015-04-18T01:41:12",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "525311",
    "nome": "Decker Gallagher",
    "telefone": "18974-1547",
    "data": "2017-07-02T12:06:32",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "417915",
    "nome": "Iris Jacobson",
    "telefone": "19356-1440",
    "data": "2015-03-29T11:37:34",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "661589",
    "nome": "Imogene Compton",
    "telefone": "16751-1593",
    "data": "2016-06-19T08:14:37",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "568084",
    "nome": "Travis Martin",
    "telefone": "19655-1831",
    "data": "2015-10-12T02:47:52",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "973847",
    "nome": "Kirk Cruz",
    "telefone": "14252-1369",
    "data": "2017-03-27T08:59:44",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "599669",
    "nome": "Mamie Munoz",
    "telefone": "14204-1766",
    "data": "2016-05-08T10:20:24",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "699352",
    "nome": "Cathryn Dale",
    "telefone": "19820-1949",
    "data": "2014-07-18T09:35:53",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "343534",
    "nome": "Keisha Contreras",
    "telefone": "14084-1726",
    "data": "2016-08-17T08:11:38",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "205533",
    "nome": "Kelsey Olson",
    "telefone": "11626-1182",
    "data": "2016-10-19T06:53:42",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "609139",
    "nome": "Lizzie Reeves",
    "telefone": "15504-1964",
    "data": "2016-10-11T03:06:29",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "803344",
    "nome": "Hewitt Winters",
    "telefone": "11997-1323",
    "data": "2015-02-18T12:26:30",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "903107",
    "nome": "Moody Figueroa",
    "telefone": "14836-1416",
    "data": "2015-05-16T11:31:01",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "992816",
    "nome": "Freeman Alvarado",
    "telefone": "15374-1263",
    "data": "2017-06-11T12:13:18",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "556044",
    "nome": "Kimberly Walsh",
    "telefone": "19533-1673",
    "data": "2015-01-10T11:21:46",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "868231",
    "nome": "Bates David",
    "telefone": "18872-1995",
    "data": "2016-03-30T02:08:17",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "355657",
    "nome": "Randi Pugh",
    "telefone": "11312-1787",
    "data": "2017-01-06T07:57:06",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "573541",
    "nome": "Gonzales Bright",
    "telefone": "16597-1813",
    "data": "2016-11-06T04:53:42",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "275545",
    "nome": "Jan Bradford",
    "telefone": "19052-1144",
    "data": "2015-08-12T03:37:42",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "722918",
    "nome": "Teresa Chambers",
    "telefone": "16093-1971",
    "data": "2017-05-30T07:14:13",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "582007",
    "nome": "Puckett Rich",
    "telefone": "19285-1947",
    "data": "2014-04-23T07:47:51",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  },
  {
    "serial": "833840",
    "nome": "Ray Cameron",
    "telefone": "18474-1830",
    "data": "2015-08-17T12:45:34",
    "operadora": {
      "categoria": "Celular",
      "codigo": 14,
      "nome": "Oi",
      "preco": 2
    }
  }
]`;

module.exports = JSON.parse(contatos_json);

