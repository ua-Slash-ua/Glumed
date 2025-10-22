'use client'
import s from './Application.module.css'
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import InputName from "@/components/ui/InputName/InputName"
import InputPhone from "@/components/ui/InputPhone/InputPhone"
import clsx from "clsx"
import { useState } from "react"
import {useRouter} from "next/navigation";
import path from "path";

export type ApplicationForm = {
    name: string
    phone: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Application({text}:{text?: string}) {
    const { register, handleSubmit, formState, reset } = useForm<ApplicationForm>()
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
    const [errorMessage, setErrorMessage] = useState<string>('')
    const router = useRouter();
    const nameError = formState.errors['name']?.message
    const phoneError = formState.errors['phone']?.message

    const onSubmit: SubmitHandler<ApplicationForm> = async (data) => {
        if (!data.phone.startsWith('+')) {
            data.phone = `+380${data.phone}`
        }

        setSubmitStatus('loading')
        setErrorMessage('')


        try {
            const res = await fetch('/api/send-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: 'Заявка з сайту Glumed',
                    source_id: 29,
                    manager_comment: 'Форма заявки Glumed',
                    manager_id: 6,
                    pipeline_id: 1,
                    contact: {
                        full_name: data.name,
                        phone: data.phone
                    },
                    utm_source: localStorage.getItem('utm_source') || '',
                    utm_medium: localStorage.getItem('utm_medium') || '',
                    utm_campaign: localStorage.getItem('utm_campaign') || '',
                    utm_term: localStorage.getItem('utm_term') || '',
                    utm_content: localStorage.getItem('utm_content') || '',
                }),
            })

            const result = await res.json()

            if (res.ok) {
                console.log('KeyCRM response:', result)
                setSubmitStatus('success')
                reset({ name: '', phone: '' })
                router.push('/thank-you')
                // Автоматично ховаємо повідомлення через 5 секунд
                setTimeout(() => {
                    setSubmitStatus('idle')
                }, 5000)
            } else {
                throw new Error(result.message || 'Помилка при відправці')
            }
        } catch (err) {
            console.error('Помилка при надсиланні заявки:', err)
            setSubmitStatus('error')
            setErrorMessage(err instanceof Error ? err.message : 'Не вдалося відправити заявку')

            // Автоматично ховаємо помилку через 5 секунд
            setTimeout(() => {
                setSubmitStatus('idle')
                setErrorMessage('')
            }, 5000)
        }
    }

    const onError: SubmitErrorHandler<ApplicationForm> = (error) => {
        console.log('Помилка валідації:', error)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} className={s.form}>
            <div className={s.div}>
                <h3>{text?? 'Ви можете залишити контакти та оформити заявку на товар'}</h3>
            </div>

            <InputName
                name="name"
                registerAction={register}
                placeholder="Ваше ім'я"
                registerOptions={{
                    required: "Введіть ім'я",
                    minLength: { value: 2, message: "Ім'я має бути не менше 2 символів" },
                    pattern: {
                        value: /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s]+$/,
                        message: "Ім'я має містити тільки літери",
                    },
                }}
                error={nameError}
            />

            <InputPhone
                name="phone"
                registerAction={register}
                registerOptions={{
                    required: "Введіть номер телефону",
                    minLength: { value: 7, message: "Номер телефону надто короткий" },
                    maxLength: { value: 15, message: "Номер телефону надто довгий" },
                    pattern: { value: /^\+?[0-9]+$/, message: "Номер телефону має містити тільки цифри" },
                }}
                error={phoneError}
            />

            <button
                className={s.btn_send}
                disabled={submitStatus === 'loading'}
            >
                <span>
                  {submitStatus === 'loading' ? 'ВІДПРАВКА...' : 'ЗАЛИШИТИ ЗАЯВКУ'}
                </span>

            </button>


            {submitStatus === 'error' && (
                <p className={clsx(s.msg_err)}>
                    {errorMessage || 'Сталася помилка. Спробуйте ще раз.'}
                </p>
            )}

            <div className={s.div}>
                <p>Натискаючи на кнопку, ви погоджуєтеся з Політикою конфіденційності</p>
            </div>
        </form>
    )
}