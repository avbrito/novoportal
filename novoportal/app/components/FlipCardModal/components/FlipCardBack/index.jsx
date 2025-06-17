'use client';

// import ans from '../../../../assets/img/ans.png';

export const FlipCardBack = ({ valueCard, dadosCartaoLista }) => {
    return (
        <div className='flip-card-back-container'>
            <div className='flip-card-back-box-top'>
                <div className='flip-card-back-box'>
                    <div>
                        <p>ACOMODACAO APARTAMENTO</p>
                        <p>EXAMES E PROCED. AVANCADOS</p>
                        <p>EXAMES E PROCED. BASICOS</p>
                        <p>EXAMES E PROCED. DE IMAGEM</p>
                        <p>EXAMES INTERVENCIONISTAS</p>
                        <p>OBSTETRICIA</p>
                        <p>PROCED. ESPECIALIZADOS</p>
                        <p>PRECIS/CONS. CIR. SEM SADT</p>
                        <p>REG. E CONSULTAS</p>
                    </div>
                    <div>
                        <p>IMEDIATO</p>
                        <p>IMEDIATO</p>
                        <p>IMEDIATO</p>
                        <p>IMEDIATO</p>
                        <p>IMEDIATO</p>
                        <p>IMEDIATO</p>
                        <p>IMEDIATO</p>
                        <p>IMEDIATO</p>
                        <p>IMEDIATO</p>
                    </div>
                </div>
            </div>
            <div className='flip-card-back-section'>
                <h4>{dadosCartaoLista.cod_prod_ans}</h4>
                <p className='flip-card-back-section-p'>Cód. Produto ANS</p>
            </div>
            <div className='flip-card-back-section'>
                <h4>{dadosCartaoLista.cns}</h4>
                <p className='flip-card-back-section-p'>CNS</p>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='flip-card-back-section'>
                    <p className='card-message'>Eventuais alterações ocorridas na rede de prestadores poderão ser consultadas no
                        <a className='text-dark' href="https://www.popvita.com.br"> www.popvita.com.br</a> e pelo telefone <a className='text-dark' href="tel:(34)3239-6900">(34) 3239 6900</a>.</p>
                </div>
                <div className='flip-card-back-section align-items-center'>
                    <p className='sac-info'>SAC/Informações</p>
                    <p className='phone-number'>0800 140 2788</p>
                </div>
                <div className='ans-logo'>
                    {/* <img className='img-ans' src={ans} alt="ans" /> */}
                    <div className='ans-code'>ANS - n°423645</div>
                </div>
            </div>
        </div>
    );
};
