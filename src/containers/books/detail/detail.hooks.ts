import axios from 'axios';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { IBooks } from '../books.types';
import { IApiResponse, IMeta, IParams } from '../../../services/types';
import { useNavigate, useParams } from 'react-router-dom';

export default function useDetail() {
    const navigate = useNavigate();
    const { id } = useParams(); // Using useParams within the functional component
    const [meta, setMeta] = useState<IMeta>();
    const [loading, setLoading] = useState<boolean>(false);
    const [book, setBook] = useState<IBooks[]>([]);

    const fetchBook = async () => {
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
          setBook(response.data.data);
          setMeta(response.data.meta);
        } catch (error) {
          console.log('error > ', error);
        } finally {
          setLoading(false);
        }
      };

    useEffect(() => {
        fetchBook();
    }, [id]);

    return {
        book,
        loading,
        meta
    };

}