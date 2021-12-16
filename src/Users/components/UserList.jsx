import React  from 'react'
import {  Col, Container, Row, Stack, Table } from 'react-bootstrap';
import { Pen,Eye, Trash2} from "react-bootstrap-icons";
import Moment from 'react-moment';


function UserList({users,deleteUser,dataUser}) {

  const Delete = (id)=>{
    deleteUser(id)
  }
  const _dataUser = ({rut,name,last_name,_id,birthday,nationality,companies})=>{
   let user ={
      id:_id,
      rut:rut,
      name:name,
      last_name:last_name,
      birthday:birthday,
      nationality:nationality,
      companies:companies
    }
    dataUser(user)
  }
  return (
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>rut</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Fecha de nacimiento</th>
              <th>Nacionalidad</th>
              <th>Empresas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
          users.map(({rut,name,last_name,_id,birthday,nationality,companies}) => (
            <tr key={_id}>
            <td width={120}>{rut}</td>
            <td>{name}</td>
            <td>{last_name}</td>
            <td><Moment   format="DD/MM/YYYY" date={birthday.date}/> </td>
            <td>{nationality}</td>
            <td >
              
              <Row >{
              companies.length >0?(companies.map(({id, name, type}) => (
                <Col xs={5}>
                <div className='mini-card' key={`id_${id}`} >{name}</div>
                </Col>
                
              ))) : ('No Posee Empresas')
              
              }
              </Row>
          </td>
            <td>
              <Stack direction="horizontal" gap={3}>
               <a className='btn edit' onClick={()=>{_dataUser({rut,name,last_name,_id,birthday,nationality,companies})}}><Pen /> </a>
               <a className='btn delete' onClick={()=>{Delete(_id)}}><Trash2 /> </a>
              
              </Stack>
          </td>
          </tr>
          ))
}  
          </tbody>
        </Table>
      </Container>
  )
}
export default UserList;