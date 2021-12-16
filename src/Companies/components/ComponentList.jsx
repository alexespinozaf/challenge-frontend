import React from 'react'
import { Stack, Table } from 'react-bootstrap'
import { Pen, Trash2 } from 'react-bootstrap-icons'

function ComponentList({ companies,dataCompany,deleteCompany }) {


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Typo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    companies.length > 0 ? (
                        companies.map(company => (
                            <tr key={company.id}>
                                <td>{company.name}</td>
                                <td>{company.type}</td>
                                <td>
                                    <Stack direction="horizontal" gap={3}>
                                        <a className='btn edit' onClick={() => {  dataCompany(company) }}><Pen /> </a>
                                        <a className='btn delete' onClick={() => { deleteCompany(company.id) }}><Trash2 /> </a>

                                    </Stack>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>No users</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}

export default ComponentList
