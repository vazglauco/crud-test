import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../../api';
import Button from '../../../UI/components/Button';
import Card from '../../../UI/components/Card';
import Input from '../../../UI/components/Input';
import Label from '../../../UI/components/Label';
import { Row, Column } from '../../../UI/components/Grid';
import Container from './styles';
import { ISupplier } from '../../../types/interfaces/ISupplier';
import Hr from '../../../UI/components/Hr';
import showNotification from '../../../utils/showNotification';

const initialState: ISupplier = {
    publicId: '',
    name: '',
    cnpj: '',
    phoneNumber: '',
    zipCode: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    ownerName: '',
    ownerEmail: '',
    ownerPhoneNumber: '',
}

const SupplierForm: React.FC = () => {
    const history = useHistory();
    const { id } = useParams() as any;
    const [model, setModel] = useState<ISupplier>(initialState)

    useEffect(() => {
        if (id !== undefined) {
            findTask(id)
        }
    }, [id])

    const updateModel = (e: ChangeEvent<HTMLInputElement>) => {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }

    function goBack() {
        history.goBack()
    }

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            if (id !== undefined) {
                await api.put('/suppliers', model)
                showNotification('success', 'Supplier created')
            } else {
                await api.post('/suppliers', model)
                showNotification('success', 'Supplier updated')
            }
            goBack()
        } catch {
            showNotification('danger', 'Error!')
        }
    }

    async function findTask(id: string) {
        const response = await api.get(`/suppliers/${id}`)
        setModel({
            publicId: response.data.publicId,
            name: response.data.name,
            cnpj: response.data.cnpj,
            phoneNumber: response.data.phoneNumber,
            zipCode: response.data.zipCode,
            address: response.data.address,
            number: response.data.number,
            complement: response.data.complement,
            neighborhood: response.data.neighborhood,
            city: response.data.city,
            state: response.data.state,
            ownerName: response.data.ownerName,
            ownerEmail: response.data.ownerEmail,
            ownerPhoneNumber: response.data.ownerPhoneNumber,
        })
    }

    return (
        <Container>
            <Card>
                <div className="header">
                    <h1>Suppliers</h1>
                    <Button onClick={goBack}>Back</Button>
                </div>

                <form onSubmit={onSubmit}>
                    <Row>
                        <Column size={3}>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                value={model.name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                            />
                        </Column>
                        <Column size={1}>
                            <Label htmlFor="cnpj">Cnpj</Label>
                            <Input
                                value={model.cnpj}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                type="text"
                                id="cnpj"
                                name="cnpj"
                                placeholder="Cnpj"
                            />
                        </Column>
                    </Row>
                    <Row>
                        <Column size={1}>
                            <Label htmlFor="phoneNumber">Phone Number</Label>
                            <Input
                                value={model.phoneNumber}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="Phone Number"
                            />
                        </Column>
                        <Column size={3} />
                    </Row>

                    <Hr />

                    <Row>
                        <Column size={1}>
                            <Label htmlFor="ownerName">Owner Name</Label>
                            <Input
                                value={model.ownerName}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                type="text"
                                id="ownerName"
                                name="ownerName"
                                placeholder="Owner name"
                            />
                        </Column>
                        <Column size={3}>
                            <Label htmlFor="ownerEmail">Owner Email</Label>
                            <Input
                                value={model.ownerEmail}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                type="text"
                                id="ownerEmail"
                                name="ownerEmail"
                                placeholder="Owner Email"
                            />
                        </Column>
                    </Row>
                    <Row>
                        <Column size={1}>
                            <Label htmlFor="ownerPhoneNumber">Owner Phone Number</Label>
                            <Input
                                value={model.ownerPhoneNumber}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                type="text"
                                id="ownerPhoneNumber"
                                name="ownerPhoneNumber"
                                placeholder="Owner Phone Number"
                            />
                        </Column>
                        <Column size={3} />
                    </Row>

                    <Hr />

                    <Row>
                        <Column size={6}>
                            <Label htmlFor="address">Address</Label>
                            <Input
                                value={model.address}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                type="text"
                                id="address"
                                name="address"
                                placeholder="address"
                            />
                        </Column>

                        <Column size={1}>
                            <Label htmlFor="number">Number</Label>
                            <Input
                                value={model.number}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                type="text"
                                id="number"
                                name="number"
                                placeholder="Number"
                            />
                        </Column>

                        <Column size={1}>
                            <Label htmlFor="complement">Complement</Label>
                            <Input
                                value={model.complement}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                type="text"
                                id="complement"
                                name="complement"
                                placeholder="complement"
                            />
                        </Column>
                    </Row>


                    <Row>
                        <Column size={2}>
                            <Label htmlFor="neighborhood">Neighborhood</Label>
                            <Input
                                value={model.neighborhood}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                type="text"
                                id="neighborhood"
                                name="neighborhood"
                                placeholder="Neighborhood"
                            />
                        </Column>


                        <Column size={4}>
                            <Label htmlFor="city">City</Label>
                            <Input
                                value={model.city}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                type="text"
                                id="city"
                                name="city"
                                placeholder="City"
                            />
                        </Column>


                        <Column size={1}>
                            <Label htmlFor="state">State</Label>
                            <Input
                                value={model.state}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                type="text"
                                id="state"
                                name="state"
                                placeholder="State"
                            />
                        </Column>

                        <Column size={1}>
                            <Label htmlFor="zipcode">Zip Code</Label>
                            <Input
                                value={model.zipCode}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                placeholder="Zip code"
                            />
                        </Column>
                    </Row>

                    <Button type="submit">Salvar</Button>

                </form>
            </Card>
        </Container>
    );
}

export default SupplierForm;