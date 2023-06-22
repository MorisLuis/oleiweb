import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useForm } from 'react-hook-form';
import Head from 'next/head';
import toast, { Toaster } from 'react-hot-toast';

type FormData = {
    email: string;
    password: string;
};

const Login = () => {

    const { loginUser } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onLoginUser = async ({ email, password }: FormData) => {
        try {
            await loginUser(email, password);
        } catch (error: any) {
            toast.error(error?.response?.data?.message)
        }
    }


    return (
        <>
            <Head>
                <title>Oleiweb / LogIn</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onLoginUser)} noValidate className="animation">
                <div>
                    <input
                        {...register("email", {
                            required: {
                                value: true,
                                message: `Es obligatorio`
                            }
                        })}
                        type="text"
                        className='inputs'
                        placeholder='Escribe...'
                    />
                    {errors.email && <span>This field is required</span>}

                    <input
                        {...register("password", {
                            required: {
                                value: true,
                                message: `Es obligatorio`
                            }
                        })}
                        type="password"
                        className='inputs'
                        placeholder='Escribe...'
                    />
                    {errors.password && <span>This field is required</span>}
                    <button type="submit">Login</button>
                </div>
            </form>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </>
    );
};

export default Login;
