import React,{useState} from 'react'
import { Button, Container, Form, Modal, Row } from 'react-bootstrap';
import { format } from "date-fns";
export default function EditForm(props) {
  const [formValues,setFormValues] =useState({
    id:props.data.id,
    rut:props.data.rut,
    name:props.data.name,
    last_name:props.data.last_name,
    birthday:format(new Date(props.data.birthday.date), "yyyy-MM-dd"),
    nationality:props.data.nationality
  })


  const selectCompany = (id) => {
    let selected = formValues.companies
    let find = selected.findIndex(item => item === id)
    if(find > -1) {
      selected.splice(find.id, 1)
    } else {
      selected.push(props.dataCompany.find(item => item.id === id).id)
    }
    setFormValues({ ...formValues, ['name']: selected })
  }

  const handleChange = (event)=>{
    const {name, value} = event.target
    setFormValues({...formValues, [name]:value})
  }
  const _handleSubmit = (event)=>{
    console.log(props)

    props.handleSubmit({...formValues})
  }
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Editar usuario
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
              <Form.Control type="text" placeholder="" required  name="name" value={formValues.name} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text"  required name="last_name" value={formValues.last_name} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicBirthday">
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control type="date"  required name="birthday" value={formValues.birthday} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicNationality">
              <Form.Label>Nacionalidad</Form.Label>
              <Form.Control type="text"  required name="nationality" value={formValues.nationality} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit" >Editar usuario</Button>
          </Form>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
