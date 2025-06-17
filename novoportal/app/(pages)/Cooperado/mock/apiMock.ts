import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


export const setupMocks = () => {
  const mock = new MockAdapter(axios, { delayResponse: 500 }); 

  mock.onGet("https://apisunimed.unimeduberlandia.coop.br/apisuni/cooperado/campanhas/getCampanhas").reply(200, [
    {
      idCampanha: 1,
      nomeCampanha: "Campanha do Bem",
      descricao: "Doe para ajudar hospitais locais",
      urlImagem: "/campanhaNatal.png",
      valorDoacao: [
        { valor: "10" },
        { valor: "20" },
        { valor: "50" },
      ]
    }
  ]);  

  mock.onPost("https://apisunimed.unimeduberlandia.coop.br/apisuni/cooperado/campanhas/getCampanhasByCrm").reply(200, {
    dataAceite: null, 
  });

  mock.onPost("https://apisunimed.unimeduberlandia.coop.br/apisuni/cooperado/campanhas/postAceiteCampanha").reply(200, {
    success: true,
  });
};
