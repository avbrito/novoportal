'use client';

import { MenuProvider } from '@/app/components/Context/MenuContext';
import Layout from '@/app/components/Layout';
import { useState } from 'react';

export default function AtendimentoLaudos() {
  const [cardNumber, setCardNumber] = useState('');
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleSearch = () => {
    setPdfUrl('https://link.testfile.org/PDF10MB');
  };

  return (
    <MenuProvider>
      <Layout>
        <div className="min-h-screen bg-white p-6 text-blue-black">
          <h1 className="text-xl font-semibold mb-6">Atendimentos e laudos</h1>

          <div className="flex items-end mb-6 max-w-md">
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Código do cartão do beneficiário
              </label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Informe o código do cartão"
                className="w-full border border-gray-300 rounded-l-md p-2"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-green-600 rounded-r-md text-white px-4 py-2 hover:bg-green-700"
            >
              Buscar
            </button>
          </div>

          {pdfUrl && (
            <div className="w-full h-[800px] border rounded border-gray-unimed overflow-hidden">
              <iframe
                src="https://link.testfile.org/PDF10MB"
                title="PDF Viewer"
                className="w-full h-full"
                frameBorder="0"
              />
            </div>
          )}
        </div>
      </Layout>
    </MenuProvider>
  );
};

