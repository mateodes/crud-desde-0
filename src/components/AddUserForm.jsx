import React from 'react'
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data, e) => {
        //console.log(data)

        props.addUser(data)

        //Limpiar campos
        e.target.reset();
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input className='box-input' type='text' {...register('name', {
                required: {
                    value: true,
                    message: 'Campo requerido'
                }
            })} />
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input className='box-input' type='text' {...register('username', {
                required: {
                    value: true,
                    message: 'Campo requerido'
                }
            })} />
            <div>
                {errors?.username?.message}
            </div>
            <button>Add new user</button>
        </form>
    );
}

export default AddUserForm;