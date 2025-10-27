import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {useEffect, useState} from "react";
import {fetchProducts} from "../../services/productsAPI.ts";
import {setProducts} from "../../store/products/productsSlice.ts";

export const useProductListPage = () => {
    const {list} = useAppSelector(state => state.products);
    const dispatch = useAppDispatch();

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [filtered, setFiltered] = useState(list);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
            if (search) {
                const lowercasedSearch = search.trim().toLowerCase();
                const filteredList = list?.filter(product =>
                    product.name.toLowerCase().includes(lowercasedSearch)
                );
                setFiltered(filteredList);
            } else setFiltered(list)
    }, [search, list]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetchProducts();
                dispatch(setProducts(response));
                setFiltered(response);
            } catch (error) {
                console.error("Failed to fetch products:", error);
                setError("Failed to fetch products");
            } finally {
                setLoading(false);
            }
        }
        if (!list.length) void fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return {
        search,
        setSearch,
        filtered,
        loading,
        error,
    }
}