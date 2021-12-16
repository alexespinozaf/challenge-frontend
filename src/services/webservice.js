import axios from "axios"


const baseUrl = process.env.REACT_APP_BASE_URL;

/**
 * 
 * USER
 * 
 */
 export async function getUsers(){
  try{
    let url = `${baseUrl}/user`
    const response =await axios.get(url)
    return response
  }catch(e){
    console.log(e)
  }
  }
export async function saveUsers(data){
  try{

    const formData = new FormData()
    formData.append('rut',data.rut)
    formData.append('name',data.name)
    formData.append('lastName',data.last_name)
    formData.append('birthday',data.birthday)
    formData.append('nationality',data.nationality)
    formData.append('companies',data.companies)

    let url = `${baseUrl}/user/create`
    const response =await axios({
      url:url,
      method:'POST',
      data: formData
    })
    return response
  }catch(e){
    console.log(e)
  }
  }
  export async function editUser(data){
    try{
      const formData = new FormData()
      formData.append('rut',data.rut)
      formData.append('name',data.name)
      formData.append('lastName',data.last_name)
      formData.append('birthday',data.birthday)
      formData.append('nationality',data.nationality)
  
      let url = `${baseUrl}/user/edit/${data.id}`
      const response =await axios({
        url:url,
        method:'POST',
        data: formData
      })
      return response
    }catch(e){
      console.log(e)
    }
    }
  export async function deleteUser(id){
    try{
  
      let url = `${baseUrl}/user/delete/${id}`
      const response =await axios({
        url:url,
        method:'GET',
      })
      return response
    }catch(e){
      console.log(e)
    }
    }
/**
 * 
 * COMPANY
 * 
 */

 export async function getCompanies(){
  try{
    let url = `${baseUrl}/company`
    const response =await axios.get(url)
    return response
  }catch(e){
    console.log(e)
  }
  }
  export async function deleteCompany(id){
    try{
  
      let url = `${baseUrl}/company/delete/${id}`
      const response =await axios({
        url:url,
        method:'GET',
      })
      return response
    }catch(e){
      console.log(e)
    }
    }
export async function saveCompany(data){
  try{
    const formData = new FormData()
    formData.append('name',data.name)
    formData.append('type',data.type)
    let url = `${baseUrl}/company/create`
    const response =await axios({
      url:url,
      method:'POST',
      data: formData
    })
    return response
  }catch(e){
    console.log(e)
  }
  }
  export async function editCompany(data){
    try{
      const formData = new FormData()
      formData.append('name',data.name)
      formData.append('type',data.type)
      let url = `${baseUrl}/company/edit/${data.id}`
      const response =await axios({
        url:url,
        method:'POST',
        data: formData
      })
      return response
    }catch(e){
      console.log(e)
    }
    }