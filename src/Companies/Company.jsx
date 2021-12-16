import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { deleteCompany, editCompany, getCompanies, saveCompany } from '../services/webservice';
import EditForm from './components/EditForm';
import ComponentList from './components/ComponentList';
import CreateForm from './components/CreateForm';

function Company() {

  const [companies, setCompanies] = useState([])
  const [editing, setEditing] = useState(false)
  const [company, setCompany] = useState({
    id:'',
    name:'',
    type:'',
  })


  useEffect(() => {
    loadCompanies()
  }, [])
  const loadCompanies = async ()=> {
    const response = await getCompanies()
    if (response.status === 200) {
      setCompanies(response.data.data)
    }
  }
  const dataCompany = (data)=>{
    setCompany(data)
    setEditing(true)
   }
  const Save = async (data)=>{
    await saveCompany(data)
    loadCompanies()
   }
  const Delete = async (id)=>{
    await deleteCompany(id)
    loadCompanies()
   }
   const Edit = async (data)=>{
    await editCompany(data)
    loadCompanies()
    setEditing(false)
  }
  return (
    <Container className='pt-10 justify-content-center'>
      <h1>Compañias</h1>
      <Row>
        <Col>
        {
          !editing?<CreateForm handleSubmit={Save}  />:<EditForm company={company} Submit={Edit} setEditing={setEditing}/>
        }
        </Col>
        <Col> <ComponentList companies={companies} deleteCompany={Delete}  dataCompany={dataCompany} ></ComponentList> </Col>
      </Row>

    </Container>
  );
}

export default Company;