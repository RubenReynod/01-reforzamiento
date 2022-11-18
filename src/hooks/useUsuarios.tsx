import { useEffect, useState, useRef } from 'react'
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const paginaRef = useRef(1)
  const totalPages = useRef(0)
  
  useEffect(() => {
    cargarUsuarios()
  }, [])

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: paginaRef.current
      }
    })
    
    setUsuarios(resp.data.data)
    totalPages.current = resp.data.total_pages
  }

  const paginaSiguiente = () => {
    paginaRef.current++
    cargarUsuarios()
  }

  const paginaAnterior = () => {    
    paginaRef.current--
    cargarUsuarios()
  }
  
  return {
    usuarios,
    totalPages: totalPages.current,
    currentPage : paginaRef.current,
    paginaSiguiente,
    paginaAnterior
  }
}