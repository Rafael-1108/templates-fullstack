'use client';

import { Link } from 'next/link';
import { Skeleton } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function ReadPage() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarSeries() {
      try {
        const resp = await axios.get('/api/series?limit=50');
        setSeries(resp.data.data);
        toast.success('Séries carregadas!', { id: 'read' });
      } catch (error) {
        toast.error('Erro ao buscar as séries', { id: 'read' });
      } finally {
        setLoading(false);
      }
    }

    buscarSeries();
  }, []);

  return (
    <main>
        <h2>GET - Read</h2>
        <p>Busca séries via "/api/series" (nossa API route.js), que fala com a codeverse direto do servidor.</p>

        {loading ? (
          <div className="skeleton">
            <Skeleton active />
          </div>
        ) : (
            <ul>
              {series.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
        )}
    </main>
  )
}