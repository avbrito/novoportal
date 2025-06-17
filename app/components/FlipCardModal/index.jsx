"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../../public/logo.png';
import { FlipCard } from './components/FlipCard';
import { FlipCardFront } from './components/FlipCardFront';
import { BottomFlipCard } from './components/ButtonFlipCard';
import { FlipCardBack } from './components/FlipCardBack';
import Image from 'next/image';
import './index.css';

const FlipCardModal = ({ dadosCartaoLista, showFlipCard, setShowFlipCard }) => {
    const [flip, setFlip] = useState(true);
    const [valueCard, setValueCard] = useState();
    const [carteirinha, setCarteirinha] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            let storedCarteirinha = localStorage.getItem('carteirinha');

            if (!storedCarteirinha) {
                storedCarteirinha = '1234567890';
                localStorage.setItem('carteirinha', storedCarteirinha);
            }

            setCarteirinha(storedCarteirinha);
        }
    }, []);

    const fakeApiResponse = {
        data: {
            resultado: [
                {
                    cabecalho: {
                        vigencia: '12/2025',
                    },
                    carencias: [
                        { nome: 'Carência 1', validade: '01/2025' },
                        { nome: 'Carência 2', validade: '06/2025' }
                    ]
                }
            ]
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getCard = useCallback(async (carteinhaCode) => {
        if (carteinhaCode) {
            const response = fakeApiResponse;
            const dataCard = response?.data?.resultado;

            localStorage.setItem('dtValidadeCarteirinha', dataCard[0].cabecalho.vigencia);

            setValueCard(dataCard[0].carencias);
        }
    }, []);

    useEffect(() => {
        if (carteirinha) {
            getCard(carteirinha);
        }
    }, [carteirinha, getCard]);

    return (
        showFlipCard && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <button
              className="absolute top-4 right-4 text-white hover:bg-verde-unimed rounded-full w-8 h-8 flex items-center justify-center shadow-md"
              onClick={() => setShowFlipCard(false)}
              aria-label="Fechar modal"
            >
              ×
            </button>
      
            <motion.div transition={{ duration: 0.7 }} animate={{ rotateY: flip ? 0 : 180 }}>
              <motion.div
                transition={{ duration: 0.7 }}
                animate={{ rotateY: flip ? 0 : 180 }}
                className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-lg"
              >
                {flip ? (
                  <motion.div
                    transition={{ duration: 0.7 }}
                    animate={{ rotateY: flip ? 0 : 180 }}
                    className="front"
                  >
                    <FlipCard setShowFlipCard={setShowFlipCard}>
                      <div className="flip-card-front-upper">
                        <Image src={logo} alt="" />
                        <p className="text-white text-xs font-sans">
                          UNIPLAN PARTICIPATIVO ENFERMARIA<br />
                          PLANO INDIVIDUAL / FAMILIAR
                        </p>
                      </div>
                      <FlipCardFront dadosCartaoLista={dadosCartaoLista} />
                    </FlipCard>
                    <BottomFlipCard flip={flip} setFlip={setFlip} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ rotateY: 180 }}
                    animate={{ rotateY: flip ? 180 : 0 }}
                    transition={{ duration: 0.7 }}
                    className="back"
                  >
                    <FlipCard setShowFlipCard={setShowFlipCard}>
                      <FlipCardBack valueCard={valueCard} dadosCartaoLista={dadosCartaoLista} />
                    </FlipCard>
                    <BottomFlipCard flip={flip} setFlip={setFlip} />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        )
      )
};      

export default FlipCardModal;
