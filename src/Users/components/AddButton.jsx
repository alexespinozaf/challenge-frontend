import React from 'react'
import { Button } from 'react-bootstrap'


 function AddButton({onClick}) {
    return (
        <Button onClick={onClick} variant="outline-primary">Agregar</Button>
    )
}
export default AddButton;