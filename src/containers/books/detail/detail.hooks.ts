import axios from 'axios';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { IBooks } from '../books.types';
import { IApiResponse, IMeta, IParams } from '../../../services/types';
import { useNavigate } from 'react-router-dom';

export default function useDetail(id: string) {
    const [meta, setMeta] = useState<IMeta>();
    const [loading, setLoading] = useState<boolean>(false);
    const [books, setBooks] = useState<IBooks[]>([]);

    const fetchBookDetail = async (id:string) => {
        try {
            setLoading(true);
            const response = await axios.get<IApiResponse<IBooks[]>>(
                `http://localhost:8000/api/books/${id}`,
                {
                    headers: {
                        Authorization: localStorage.getItem('token'),
                    },
                }
            );
            setBooks(response.data.data);
            setMeta(response.data.meta);
        } catch (error) {
            console.log('error > ', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBookDetail(id);
    }, [id]);

    return {
        books,
        loading,
        meta
    };

}