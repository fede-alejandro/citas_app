/* eslint-disable react/prop-types */
const Pacientes = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const resp = confirm('Deseas eliminar este paciente?')
        if (resp) {
            eliminarPaciente(id)
        }
    }
    return (
        <div className='mx-5 my-10 bg-gray-400 shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='ml-2 normal-case font-medium'>{nombre}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
                <span className='ml-2 normal-case font-medium'>{propietario}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='ml-2 normal-case font-medium'>{email}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha alta: {''}
                <span className='ml-2 normal-case font-medium'>{fecha}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
                <span className='ml-2 normal-case font-medium'>{sintomas}</span>
            </p>
            <div className='flex justify-between mt-10'>
                <button
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                    type='button'
                    onClick={() => setPaciente(paciente)}
                >Editar
                </button>

                <button
                    className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                    type='button'
                    onClick={handleEliminar}
                >Eliminar
                </button>
            </div>
        </div>
    )
}

export default Pacientes
