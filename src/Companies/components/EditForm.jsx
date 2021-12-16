import React from 'react'
import { Button, Container, Form, Stack } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

function EditForm({setEditing,Submit,company}) {
    console.log(company)
const {register, errors, handleSubmit,setValue} =  useForm({
    defaultValues:company
});
setValue('name', company.name)
setValue('type', company.type)


  const onSubmit = (data,e)=>{
    data.id = company.id
    Submit(data)
    e.target.reset()

  }
    return (
       <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="FormBasicName">
              <Form.Label >Name</Form.Label>
              <Form.Control type="text" placeholder=""  name="name" 
              {...register('name' , { required: true })}
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicType">
              <Form.Label>Tipo</Form.Label>
              <Form.Control type="text" placeholder="" required  name="type"
               {...register('type' , { required: true })}
               />
            </Form.Group>
            <Stack direction="horizontal" gap={3}>
            <Button variant="primary" type="submit" >Editar Compañia</Button>
            <Button onClick={() => setEditing(false)} className="button muted-button">
                Salir 
            </Button>
            </Stack>
          </Form>
       </Container>
    )
}

export default EditForm
