import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function CreateForm({handleSubmit}) {

    const [formValues,setFormValues] =useState({
        name:'',
        type:'',
      })
      
  const handleChange = (event)=>{
    const {name, value} = event.target
    setFormValues({...formValues, [name]:value})
  }
  const _handleSubmit = (event)=>{
    handleSubmit({...formValues})
  }
    return (
       <Container>
            <Form onSubmit={_handleSubmit}>
          <Form.Group className="mb-3" controlId="FormBasicName">
              <Form.Label >Name</Form.Label>
              <Form.Control type="text" placeholder="" required name="name" value={formValues.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicType">
              <Form.Label>Tipo</Form.Label>
              <Form.Control type="text" placeholder="" required  name="type" value={formValues.type} onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" >Agregar Compañia</Button>
          </Form>
       </Container>
    )
}

export default CreateForm
