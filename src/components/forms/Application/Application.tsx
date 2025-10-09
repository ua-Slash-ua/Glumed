'use client'
import s from './Application.module.css'
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import InputName from "@/components/ui/InputName/InputName";
import InputPhone from "@/components/ui/InputPhone/InputPhone";

type ApplicationForm = {
    name: string;
    phone: string;
}

export default function Application() {
    const {register, handleSubmit, formState,reset } = useForm<ApplicationForm>();

    const nameError = formState.errors['name']?.message;
    const phoneError = formState.errors['phone']?.message;


    const onSubmit: SubmitHandler<ApplicationForm> = (data: ApplicationForm) => {
        if (!data.phone.startsWith('+')){
            data.phone = `+380${data.phone}`;
        }

        // Скидання форми після сабміту
        reset({
            name: '',         // пусте значення для name
            phone: '',    // можна залишити дефолтний код телефону
        });
    }
    const onError: SubmitErrorHandler<ApplicationForm> = (error: any) => {
        console.log(123);
        console.log(error);

    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit, onError)} className={s.form}>
                <div className={s.div}>
                    <h3>
                        Ви можете залишити контакти та оформити заявку на товар
                    </h3>
                </div>

                <InputName
                    name={"name"}
                    registerAction={register}
                    placeholder={'Ваше ім’я'}
                    registerOptions={{
                        required: "Введіть ім'я",
                        minLength: {
                            value: 2,
                            message: "Ім'я має бути не менше 2 символів"
                        },
                        pattern: {
                            value: /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s]+$/,
                            message: "Ім'я має містити тільки літери"
                        }
                    }}
                    error={nameError}
                />
                <InputPhone
                    name={"phone"}
                    registerAction={register}
                    registerOptions={{
                        required: "Введіть номер телефону",
                        minLength: {
                            value: 7,
                            message: "Номер телефону надто короткий"
                        },
                        maxLength: {
                            value: 15,
                            message: "Номер телефону надто довгий"
                        },
                        pattern: {
                            value: /^\+?[0-9]+$/,
                            message: "Номер телефону має містити тільки цифри"
                        }
                    }}
                    error={phoneError}
                    phoneCode={'ua'}
                />
                <button className={s.btn_send}>ЗАЛИШИТИ ЗАЯВКУ</button>
                <div className={s.div}>
                    <p>Натискаючи на кнопку, ви погоджуєтеся з Політикою конфіденційності</p>

                </div>
            </form>
        </>
    )
}