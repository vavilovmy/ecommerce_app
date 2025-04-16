"use client"

import React, { useEffect } from 'react'
import styles from '../styles/AuthForm.module.css'
import { useForm } from 'react-hook-form'
import { FieldValues } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const signInSchema = z
   .object({
      email: z.string().email( {message: 'Некорректный email'} ),
      password: z.string().min(10, 'Минимальная длина - 10 символов'),
   })
   // .refine((data) => data.password === data.confirmPassword, {
   //    message: 'Пароли должны совпадать',
   //    path: ['confirmPassword']
   // })

type SignUpSchema = z.infer<typeof signInSchema>

const SIAuthForm = ({setLogin}: {setLogin: Function}) => {

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting, isSubmitted },
      reset,
      getValues,
      watch,
      trigger
   } = useForm<SignUpSchema>({
      resolver: zodResolver(signInSchema)
   })

   const submitHandler = async (data: FieldValues) => {
      await new Promise((res) => setTimeout(res, 2000));
      reset();
   }

   // const password = watch('password')

   // useEffect(() => {
   //    trigger('confirmPassword')
   // }, [password])

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.authForm}>
         <input 
            {...register('email')}
            type='email' 
            placeholder='Ваш email'
         />
         {errors.email && (
            <p>{`${errors.email.message}`}</p>
         )}
         <input 
            {...register('password')}
            type='password' 
            placeholder='Ваш пароль'
         />
         {errors.password && (
            <p>{`${errors.password.message}`}</p>
         )}
         <button type='submit' disabled={isSubmitting}>Вход</button>
         <p>Нет аккаунта? <a href='#' onClick={(e) => {e.preventDefault; setLogin(true)}}>Зарегистрироваться</a></p>
      </form>
    </div>
  )
}

export default SIAuthForm