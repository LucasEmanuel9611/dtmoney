import React from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles'


export function TransactionsTable(){
    const {transactions} = React.useContext(TransactionsContext)
    

    return(
        <Container>
            <table>
                <thead>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>
                <tbody>
                    {transactions.map(item => 
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td className={item.type}>{new Intl.NumberFormat('pt-BR',{
                            style: 'currency',
                            currency: 'BRL'
                        }).format(item.amount)}</td>
                        <td>{item.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(item.createdAt))}</td>
                    </tr>)}
                </tbody>
            </table>
        </Container>
    )
}