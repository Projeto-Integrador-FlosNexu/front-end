import React, { useState, useEffect, useContext } from 'react';
import Produto from '../../models/Produto';
import { CartContext } from "../../contexts/CartContext";
import { Link } from 'react-router-dom';

interface PaginaProdutoProps {
    produto: Produto;
}

const PaginaProduto: React.FC<PaginaProdutoProps> = ({ produto }) => {
    const { adicionarProdutos } = useContext(CartContext);
    const [quantity, setQuantity] = useState<number>(1); // Definindo o tipo de quantity como number

    useEffect(() => {
        // Carregar as informações do produto
    }, []);

    return (
        <div className="produto-page">
            <div className="produto-images">
                <div>
                    {produto.foto}
                </div>
            </div>

            <div className="produto-info">
                <h1>{produto.nome}</h1>
                <p className="produto-brand">{produto.marca}</p>
                <p className="produto-price">
                    R${produto.preco}
                </p>
            </div>

            <div className="produto-description">
                <h2>Descrição do Produto</h2>
                <p>{produto.descricao}</p>
            </div>
            <div className="produto-payment">
                <h2>Formas de Pagamento</h2>
            </div>
            <div className="produto-actions">
                <button onClick={() => adicionarProdutos(produto)}>Adicionar ao Carrinho</button>
                <Link to={`/produtos/${produto.categoria}`}>Ver mais produtos</Link>
            </div>
        </div>
    );
};

export default PaginaProduto;
