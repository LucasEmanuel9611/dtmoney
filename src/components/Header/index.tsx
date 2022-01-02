import * as React from 'react';
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import Modal from 'react-modal'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal} : HeaderProps) {

  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>Nova Transção</button>
      </Content>
      
    </Container>
  );
}