'use client';

import FormModal from '@components/FormModal';
import { Button, Card, Form, Skeleton } from 'antd';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function ReadByIdPage() {
    const { id } = useParams();
    const [serie, setSerie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        async function buscarSerie() {
            try {
                const resp = await axios.get(`/api/series/${id}`);
                setSerie(resp.data);
                toast.success('Série carregada!', { id: 'readById' });
            } catch (error) {
                toast.error('Série não encontrada', { id: 'readById' });
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        buscarSerie();
    }, [id]);

    return (
        <main>
            <h2>Get By Id - read</h2>
            <p>O navegador busca, edita e exclui pelo /api/series/[id] (nosso route.js); o servidor fala com a API usando a api-key privada.</p>
            <p>Abra o DevTools - Network: aparece a série (GET/PUT/DELETE), sem x-api-key.</p>
            {loading ? (
                <div className='ant-skeleton'>
                    <Skeleton active />
                </div>
            ) : (
                serie && (
                    <>
                        <Card title={serie.title}>
                            <p>Gênero: {serie.genero}</p>
                            <p>Plataforma: {serie.plataforma}</p>
                            <p>Temporadas: {serie.numero_temporadas}</p>
                            <p>Ano de lançamento: {serie.ano_lancamento}</p>
                        </Card>

                        <div className='actions'>
                            <Button type='primary' onClick={() => setEditOpen(true)}>
                                Editar
                            </Button>
                            <Button danger onClick={() => setDeleteOpen(true)}>
                                Excluir
                            </Button>
                        </div>

                        <FormModal
                            open={editOpen}
                            serie={serie}
                            confirmLoading={saving}
                            onCancel={() => setEditOpen(false)}
                        ></FormModal>
                    </>
                )
            )}
        </main>
    );
}