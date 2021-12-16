import React ,{useState,useEffect}from 'react';
import { Alert, Container } from 'react-bootstrap';
import AddButton from './components/AddButton';
import UserList from './components/UserList';
import CreateForm from './components/CreateForm'
import { saveUsers,getUsers,deleteUser,editUser, getCompanies } from "../services/webservice";
import Loading from '../components/Loading';
import EditForm from './components/EditForm';


function User() {
  const [createModalShow, setCreateModalShow] = useState(false)
  const [editModalShow, setEditModalShow] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [companies, setCompanies] = useState([])
  const [user, setUser] = useState({
    id:'',
    rut:'',
    name:'',
    last_name:'',
    birthday:'',
    nationality:'',
    companies:[]
  })

  useEffect(() => {
    loadUsers()
    loadCompany()
  }, [])
  async function loadUsers() {
    const response = await getUsers()
    console.log(response)
    if (response.status === 200) {
      setUsers(response.data.data)
    }
    setIsLoading(false)
  }
  async function loadCompany() {
    const response = await getCompanies()
    if (response.status === 200) {
      setCompanies(response.data.data)
    }
    setIsLoading(false)
  }
  const Save = async (data)=>{
   await saveUsers(data)
    loadUsers()
  }
  const Delete = async (data)=>{
    await deleteUser(data)
     loadUsers()
   }
  const Edit = async (data)=>{
    await editUser(data)
    loadUsers()
  }
   const dataUser = (data)=>{
    setUser(data)
    setEditModalShow(true)
   }
    return (
      < >
      <Container className='UserContainer'>
      <AddButton onClick={()=>setCreateModalShow(true)} />
      {
        isLoading && <Loading />
      }
      {
        !isLoading && users.length===0 && <div className='pt-10'><Alert   variant="danger">No se han registrado usuarios</Alert></div> 
      }
      {
        !isLoading && users.length!=0 &&  <UserList  users={users}  dataUser={dataUser} deleteUser={Delete}/>
      }
    
      </Container>
      <CreateForm handleSubmit={Save} show={createModalShow} onHide={() => setCreateModalShow(false)}   dataCompany={companies}/>
      {
        editModalShow && <EditForm  dataCompany={companies} handleSubmit={Edit} show={editModalShow}  data={user} onHide={() => setEditModalShow(false)} />
      }
      
      </>
    );
  }

export default User;