import { useEffect, useState } from 'react'

const useCheckIsInCart = (id, items) => {
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        if (id) {
            const existingProduct = items?.find((item) => Number(item.id) === Number(id));
            setIsInCart(existingProduct ? true : false)
        }
    }, [items, id])

    return { isInCart }
}

export default useCheckIsInCart