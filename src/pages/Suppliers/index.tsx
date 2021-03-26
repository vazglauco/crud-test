import React, { useState, useEffect } from 'react';
import api from '../../api'
import { useHistory } from 'react-router-dom';

import Container  from './styles';
import Button from '../../UI/components/Button';
import Card from '../../UI/components/Card';
import Table from '../../UI/components/Table';
import showNotification from '../../utils/showNotification';

interface ISupplier { 
  publicId: string;
  name: string;
  cnpj: string;
  phoneNumber: string;
  ownerName: string; 
}

const Suppliers: React.FC = () => {
  const [ suppliers, setSuppliers ] = useState<ISupplier[]>([]);
  const history = useHistory();

  useEffect( () => {
    loadSuppliers();
  },[])

  async function loadSuppliers() {
    const response = await api.get('suppliers')
    if (response.status === 200) {
      setSuppliers(response.data)
    } else {
      showNotification('danger', 'Erro ao carregar informaçoes do servidor')
    }
  }
  async function removeSupplier(id: string) {
    const response = await api.delete(`suppliers/${id}`)
    showNotification('success', 'Supplier removed')
    if (response.status) {
      loadSuppliers();

    }
  }
  function newSupplier() {
    history.push('/form')
  }

  function editSupplier(id: string) {
    history.push(`/form/${id}`)
  }

  return(
    <Container>
      <Card>
        <div className="header">
          <h1>Suppliers</h1>
          <Button onClick={newSupplier}>New</Button>
        </div>

        <Table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Cnpj</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Owner Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              suppliers.map( supplier => (
                <tr>
                  <td>{supplier.name}</td>
                  <td>{supplier.cnpj}</td>
                  <td>{supplier.phoneNumber}</td>
                  <td>{supplier.ownerName}</td>
                  <td>
                    <Button onClick={() => editSupplier(supplier.publicId)}>Editar</Button>
                    <Button onClick={()=> removeSupplier(supplier.publicId)}>Excluir</Button>
                  </td>
                </tr>
              ))
              }
          </tbody>
        </Table>
      </Card>
    </Container>
    
  );
}

export default Suppliers;