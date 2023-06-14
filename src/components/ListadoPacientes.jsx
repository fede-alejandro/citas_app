/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Pacientes from './Pacientes';
import veterinaria from '../img/veterinaria.png'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {


  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>Administra tus {''}
            <span className='text-blue-400 font-bold'>Pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Pacientes
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'> {''}
            <img src={veterinaria} alt='veterinaria' className='m-auto md:flex max-w-md'/>
          </p>
        
        </>
      )}
    </div>
  )
}

export default ListadoPacientes