import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(_req, { params }) {
    const { id } = await params;
    
    try {
        const resp = await axios.get(`${process.env.API_URL_SERIES}/${id}`, {
            headers: { "x-api-key": process.env.API_KEY },
        });

        return NextResponse.json(resp.data);
        
    } catch (error) {
        const status = error.response?.status || 500;
        const data = error.response?.data || { error: "Erro ao buscar série." };
        
        return NextResponse.json(data, { status });
    }
}

export async function PUT( req, { params }) {
    const { id } = await params;
    const body = await req.json();

    try {
        const response = await axios.put(`${process.env.API_URL_SERIES}/${id}`, body, {
            headers: { "x-api-key": process.env.API_KEY },
        });
        return NextResponse.json(response.data);
    } catch (error) {
        const status = error.response?.status || 500;
        const data = error.response?.data || { error: "Erro ao atualizar série." };
        
        return NextResponse.json(data, { status });
    }
}

export async function DELETE(_req, { params }) {
    const { id } = await params;

    try {
        await axios.delete(`${process.env.API_URL_SERIES}/${id}`, {
            headers: { "x-api-key": process.env.API_KEY },
        });
        return NextResponse.json({ toast: "Série excluída com sucesso." });
    } catch (error) {
        const status = error.response?.status || 500;
        const data = error.response?.data || { error: "Erro ao excluir série." };
        
        return NextResponse.json(data, { status });
    }
}