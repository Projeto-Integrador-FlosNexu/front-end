import { ReactNode, createContext, useState } from "react"
import Produto from "../models/Produto"
import { toastAlerta } from "../util/toastAlerta"


interface CartContextProps {
    adicionarProdutos: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    atualizarProduto: (produtoId: number, action: 'decrease' | 'increase')  => void;
    limparCart: () => void
    items: Produto[]
    quantidadeItems: number
}

interface CartProviderProps {
    children: ReactNode
}
// const [cart, setCart] = useState([]);

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {

    const [items, setItems] = useState<Produto[]>([])

    const quantidadeItems = items.length

    function adicionarProdutos(produto: Produto) {
        const indice = items.find(items => items.id === produto.id)
        if (indice !== undefined) {
            toastAlerta('Este produto já Adicionado', 'info')
        } else {
            setItems(state => [...state, produto])
            toastAlerta('Produto Adicionado!', 'sucesso')
        }
    }

    function removerProduto(produtoId: number) {
        const indice = items.findIndex(items => items.id === produtoId)
        let novoCart = [...items]

        if (indice >= 0) {
            novoCart.splice(indice, 1)
            setItems(novoCart)
        }
    }
    const atualizarProduto = (produtoId: number, action: 'decrease' | 'increase') => {
        setItems((prevItems) => {
          return prevItems.map((item) => {
            if (item.id === produtoId) {
              let newQuantity = item.quantidade;
      
              if (action === 'decrease' && newQuantity > 1) {
                newQuantity -= 1;
              } else if (action === 'increase') {
                newQuantity += 1;
              }
      
              return { ...item, quantidade: newQuantity };
            }
      
            return item;
          });
        });
      };
    
        // const newData: Produto = { ...items, quantidade: newQuantity };
        // delete newData.id;

    function limparCart() {
        toastAlerta('Compra Efetuada com sucesso!', 'sucesso')
        setItems([])
    }
    return (
        <CartContext.Provider
            value={{ adicionarProdutos, removerProduto, atualizarProduto, limparCart, items, quantidadeItems }}>
            {children}
        </CartContext.Provider>
    )

}