import React from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {

    //console.log(props.currentUser)

    const {register, handleSubmit,setValue, formState: { errors }} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data, e) => {
        //console.log(data)
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)
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
            <button>Edit user</button>
        </form>
    );
}

export default EditUserForm;