'use client'
import 'flag-icons/css/flag-icons.min.css';
import s from './InputPhone.module.css'
import { InputNameProps } from "@/types/props/InputNameProps";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ApplicationForm } from "@/components/forms/Application/Application";

export default function InputPhone({
                                       registerAction,
                                       registerOptions,
                                       placeholder,
                                       className,
                                       name,
                                       error
                                   }: InputNameProps<ApplicationForm>) {
    const [value, setValue] = useState<string>('');
    const dialCode = '+380'; // код України

    // Отримуємо registration об'єкт
    const registration = registerAction?.(name, registerOptions);
    const registrationRef = useRef(registration);
    const isInitialized = useRef(false);

    // Ініціалізуємо значення при першому отриманні registration
    useEffect(() => {
        if (registration) {
            registrationRef.current = registration;
            if (!isInitialized.current && registration.onChange) {
                const fullPhone = dialCode + value;
                registration.onChange({
                    target: { name, value: fullPhone }
                } as unknown as ChangeEvent<HTMLInputElement>);
                isInitialized.current = true;
            }
        }
    }, [registration]);

    // Оновлюємо значення форми при зміні value
    useEffect(() => {
        if (isInitialized.current) {
            const reg = registrationRef.current;
            if (reg?.onChange) {
                const fullPhone = dialCode + value;
                const event = { target: { name, value: fullPhone } } as unknown as ChangeEvent<HTMLInputElement>;
                reg.onChange(event);
            }
        }
    }, [value, name]);

    return (
        <div className={`${s.container} ${className ?? ''}`}>
            <label htmlFor={name}></label>
            <div className={s.input_container}>
                <span className={`fi fi-ua ${s.flag}`} /> {/* прапор України */}
                <span className={s.dialCode}>{dialCode}</span>
                <input
                    id={name}
                    type="number"
                    placeholder={placeholder}
                    {...(registration || {})}
                    value={value}
                    onChange={(e) => {
                        if (e.target.value.length > 9) e.target.value = e.target.value.slice(0, 9);
                        setValue(e.target.value);
                    }}
                />
            </div>
            {error && <span className={s.error}>{error}</span>}
        </div>
    )
}
