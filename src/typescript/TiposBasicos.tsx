
const TiposBasicos = () => {

  const nombre: string = 'Fernando';
  const edad: number = 35;
  const estaActivo: boolean = true;

  const poderes: string[] = [] //['velocidad', 'volar', 'respirar en el agua']

  return (
    <>
      <h3>Tipos Basicos</h3>
      { nombre } - { edad } - { estaActivo ? 'Activo' : 'No activo' }
      <br />
      { poderes.join() }
    </>
  )
}

export default TiposBasicos