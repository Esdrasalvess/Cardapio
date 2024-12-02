import { useState } from "react";
import "./modal.css";

interface InputProps {
    label: string;
    value: string | number;
    updateValue: (value: any) => void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input
                value={value}
                onChange={(event) => updateValue(event.target.value)}
            />
        </>
    );
};

export function CreateModal() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");

    // Função para abrir o modal
    const openModal = () => {
        // Lógica para abrir o modal
        console.log("Modal aberto");
    };

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">  
                    <Input label="Título" value={title} updateValue={setTitle} />
                    <Input label="Preço" value={price} updateValue={setPrice} />
                    <Input label="Imagem" value={image} updateValue={setImage} />
                </form>
            </div>
            <button className="add-button" onClick={openModal}>
                Adicionar Novo Item
            </button>
        </div>
    );
}
