import React, { useState } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';

function CreateForm(props) {

  const [formValues, setFormValues] = useState({
    rut: '',
    name: '',
    last_name: '',
    birthday: '',
    nationality: '',
    companies :[]
  })

  
  const selectCompany = (id) => {
    let selected = formValues.companies
    let find = selected.findIndex(item => item === id)
    if(find > -1) {
      selected.splice(find.id, 1)
    } else {
      selected.push(props.dataCompany.find(item => item.id === id).id)
    }
    setFormValues({ ...formValues, ['companies']: selected })
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })

  }
  const _handleSubmit = (event) => {
    props.handleSubmit({ ...formValues })
  }
  return (
    <Modal {...props}  aria-labelledby="example-modal-sizes-title-lg"   size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Crear usuario
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form onSubmit={_handleSubmit}>
            
            <Form.Group className="mb-3" controlId="FormBasicRut">
              <Form.Label >Rut</Form.Label>
              <Form.Control type="text" placeholder="" required name="rut" value={formValues.rut} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="" required name="name" value={formValues.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" required name="last_name" value={formValues.last_name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicBirthday">
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control type="date" required name="birthday" value={formValues.birthday} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicNationality">
              <Form.Label>Nacionalidad</Form.Label>
              <Form.Control type="text" required name="nationality" value={formValues.nationality} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicCompany">
              <Form.Label>Empresas</Form.Label>
              <Row>
              {
          props.dataCompany.map((company,index) => (
            <Col xs="4" lg="4" key={index}>
            <Form.Check
            type='checkbox'
            name="companies"
            value={company.id}
            id={`comapy-${company.id}`}
            label={company.name}
            onChange={() => selectCompany(company.id)}
          />
            </Col>
          ))}
              </Row>
            
            </Form.Group>
            <Button variant="primary" type="submit" >Agregar usuario</Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
export default CreateForm