import FormProduct from "@components/FormProduct"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import endPoints from "@services/api";
import axios from "axios";

export default function Edit() {
    const [product, setProduct] = useState({});
    const [notFound, setNotFound] = useState(false)
    const router = useRouter();

    useEffect(() => {
        const { id } = router.query
        if (!router.isReady) return;
        async function getProduct() {
            try {
                const response = await axios.get(endPoints.products.getProduct(id))
                if (response) {
                    setProduct(response.data)
                }
            } catch (error) {
                console.error(error);
                setNotFound(true);
            }
        }
        getProduct(); 
    }, [router?.isReady])
    
    return notFound ? <div className="text-center text-lg font-medium">Product Not Found</div> : <FormProduct product={product} />;
}

