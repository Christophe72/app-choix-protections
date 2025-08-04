'use client';
import { useEffect, useState } from 'react';

type Circuit = {
  id: number;
  nom: string;
  section: string;
  longueurMax: number;
  disjoncteur: number;
  typeCourbe: string;
  differentiel: string;
  remarque?: string;
};

type Norme = {
  id: number;
  article: string;
  description: string;
};

export default function HomePage() {
  const [circuits, setCircuits] = useState<Circuit[]>([]);
  const [normes, setNormes] = useState<Norme[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'circuits' | 'normes'>('circuits');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [circuitsRes, normesRes] = await Promise.all([
          fetch('/api/circuits'),
          fetch('/api/normes')
        ]);
        
        const circuitsData = await circuitsRes.json();
        const normesData = await normesRes.json();
        
        setCircuits(circuitsData);
        setNormes(normesData);
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="p-6">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg">Chargement...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Guide des Circuits Électriques - RGIE Belgique
        </h1>
        <p className="text-gray-600">
          Référentiel des types de circuits et normes selon le Règlement Général sur les Installations Électriques
        </p>
      </div>

      {/* Navigation tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('circuits')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'circuits'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Circuits Types ({circuits.length})
            </button>
            <button
              onClick={() => setActiveTab('normes')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'normes'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Normes RGIE ({normes.length})
            </button>
          </nav>
        </div>
      </div>

      {/* Circuits Tab */}
      {activeTab === 'circuits' && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Types de Circuits Électriques
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {circuits.map((circuit) => (
              <div key={circuit.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  {circuit.nom}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Section :</span>
                    <span className="font-medium">{circuit.section}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Longueur max :</span>
                    <span className="font-medium">{circuit.longueurMax}m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Disjoncteur :</span>
                    <span className="font-medium">{circuit.disjoncteur}A - Courbe {circuit.typeCourbe}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Différentiel :</span>
                    <span className="font-medium">{circuit.differentiel}</span>
                  </div>
                  {circuit.remarque && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-blue-600 italic">
                        💡 {circuit.remarque}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Normes Tab */}
      {activeTab === 'normes' && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Articles du Règlement RGIE
          </h2>
          <div className="space-y-4">
            {normes.map((norme) => (
              <div key={norme.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Article {norme.article}
                  </div>
                  <p className="text-gray-700 flex-1">{norme.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-center text-sm text-gray-500">
          ⚡ Application de référence pour les installations électriques selon le RGIE Belgique
        </p>
      </footer>
    </main>
  );
}
