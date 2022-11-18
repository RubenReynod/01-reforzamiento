import { useEffect, useState, useRef } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const paginaRef = useRef(1)
  
  useEffect(() => {
    cargarUsuarios()
  }, [])

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: paginaRef.current
      }
    })
    
    if(resp.data.data.length > 0){
      setUsuarios(resp.data.data)
      paginaRef.current ++
    } else {
      alert('No hay mas registros')
    }
  }

  const rendetItem = (usuario: Usuario) => {
    const { id, first_name, last_name, email, avatar } = usuario
    return (
      <tr key={ id+'' }>
        <td>
          <img src={ avatar } alt={ first_name } style={{ width: 50, borderRadius: 35 }} />
        </td>
        <td>{ first_name } { last_name }</td>
        <td>{ email }</td>
      </tr>
    )
  }

  return (
    <>
      <h3>Usuarios</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          { usuarios.map( usuario => rendetItem(usuario) ) }
        </tbody>
      </table>

      <button className='btn btn-primary' onClick={cargarUsuarios}>Siquientes</button>
    </>
  )
}

export default Usuarios