import React, {FormEvent} from "react";
import Modal from "react-modal";
import { api } from "../../services/api";
import { useTransactions } from "../../hooks/useTransactions";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";


import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  // * context
  const {createTransaction}  = useTransactions()


  // ? states
  const [type, setType] = React.useState("deposit");
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState('');
  const [value, setValue] = React.useState(0);

  async function handleCreateNewTransaction(event: FormEvent) {
   event.preventDefault();

   await createTransaction({
     title,
     amount: value, 
     category,
     type
   })

  onRequestClose()
  setType('')
  setTitle('')
  setCategory('')
  setValue(0)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction} >
        <h2>Cadastrar nova transação </h2>
        <input placeholder="Titulo" value={title}  onChange={e => setTitle(e.target.value)}/>
        <input placeholder="Valor" type="number"  value={value}  onChange={e => setValue(Number(e.target.value))}/>
        <input placeholder="Categoria"  value={category} onChange={e => setCategory(e.target.value)} />
        <TransactionTypeContainer>
          <RadioBox 
          isActive={type === 'deposit'}
          activeColor="green"

          type="button" onClick={() => setType("deposit")}>
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
          type="button"
          isActive={type === 'withdraw'}
          activeColor="red"
          onClick={() => setType("withdraw")}
          >
            <img src={outcomeImg} alt="saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
;
