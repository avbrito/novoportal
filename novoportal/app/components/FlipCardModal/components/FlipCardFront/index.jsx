import { transformToBrazilFormatDate } from "../../../../utils/functions"
 import { dadosCartaoListaMock } from '../../../../utils/const';
 
 export const FlipCardFront = () => {
     return (
         <div className='flip-card-front-container'>
             <div className='flip-card-front-row'>
                 <h3>{dadosCartaoListaMock.numeroCartao}</h3>
             </div>
             <div className='flip-card-front-container-row'>
                 <div className='flip-card-front-row-flex'>
                     <div>
                         <h4>{dadosCartaoListaMock.nomeBeneficiario}</h4>
                         <p>Nome do beneficiário</p>
                     </div>
                 </div>
                 <div className='flip-card-front-row'>
                     <div>
                         <h4>{dadosCartaoListaMock.acomodacao}</h4>
                         <p>Acomodacao</p>
                     </div>
                     <div>
                         <h4>{transformToBrazilFormatDate(dadosCartaoListaMock.vigencia)}</h4>
                         <p>Validade</p>
                     </div>
                 </div>
                 <div className='flip-card-front-row'>
                     <div>
                         <h4>{dadosCartaoListaMock.plano}</h4>
                         <p>Plano</p>
                     </div>
                     <div>
                         <h4>{dadosCartaoListaMock.redeAtendimento}</h4>
                         <p>Rede de Atendimento</p>
                     </div>
                 </div>
                 <div className='flip-card-front-row'>
                     <div>
                         <h4>MUNICIPAL</h4>
                         <p>Abrangência</p>
                     </div>
                     <div>
                         <h4>{dadosCartaoListaMock.atend}</h4>
                         <p>Atend</p>
                     </div>
                 </div>
                 <div className='flip-card-front-row-flex'>
                     <div>
                         <h4>{dadosCartaoListaMock.segmentacaoAssistencial}</h4>
                         <p>Segmentação assistencial do plano</p>
                     </div>
                 </div>
             </div>
         </div>
     )
 }