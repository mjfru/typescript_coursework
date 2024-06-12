import { useRef } from "react";

interface ShopplingListFormProps {
    onAddItem: (item: string, quantity: number) => void;
}

function ShoppingListForm({ onAddItem }: ShopplingListFormProps) {
    const productInputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const newProduct = productInputRef.current!.value;
        const quantity = parseInt(quantityInputRef.current!.value);
        onAddItem(newProduct, quantity);
        productInputRef.current!.value = "";
        quantityInputRef.current!.value = "1";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" ref={productInputRef}/>
            <input type="number" min={0} ref={quantityInputRef} />
            <button type="submit">Add Item</button>
        </form>
    )
}

export default ShoppingListForm;