import { useUsuarios } from '../hooks/useUsuarios'
import { Usuario } from '../interfaces/reqRes';

const Usuarios = () => {
  const { usuarios, cargarUsuarios } = useUsuarios()

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

      <button className='btn btn-primary' onClick={cargarUsuarios}>Anteriores</button>
      &nbsp;
      <button className='btn btn-primary' onClick={cargarUsuarios}>Siguientes</button>
    </>
  )
}

export default Usuarios