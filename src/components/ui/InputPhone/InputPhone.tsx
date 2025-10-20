'use client'
import 'flag-icons/css/flag-icons.min.css';
import s from './InputPhone.module.css'
import {InputNameProps} from "@/types/props/InputNameProps";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {phoneList} from "@/config/phone-codes.config";
import {ApplicationForm} from "@/components/forms/Application/Application";
import {FieldValues} from "react-hook-form";

export default function InputPhone({
                                       registerAction,
                                       registerOptions,
                                       placeholder,
                                       className,
                                       name,
                                       error
                                   }: InputNameProps<ApplicationForm>)
 {
    const [value, setValue] = useState<string>('');
    const [phone, setPhone] = useState<{
        iso2: string,
        dialCode: string,
    }>(
        {
            iso2: 'UA',
            dialCode: '+380',
        }
    )
    const [active, setActive] = useState<boolean>(false)
    const wrapperRef = useRef<HTMLDivElement>(null);
    const isInitialized = useRef(false);

    // Отримуємо registration об'єкт
    const registration = registerAction?.(name, registerOptions);
    const registrationRef = useRef(registration);

    // Оновлюємо ref при зміні registration
    useEffect(() => {
        if (registration) {
            registrationRef.current = registration;

            // Ініціалізуємо значення при першому отриманні registration
            if (!isInitialized.current && registration.onChange) {
                const fullPhone = phone.dialCode + value;
                registration.onChange({
                    target: {
                        name,
                        value: fullPhone
                    }
                }as unknown as ChangeEvent<HTMLInputElement> );
                isInitialized.current = true;
            }
        }
    }, [registration]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    // Оновлюємо значення форми при зміні phone або value
    useEffect(() => {
        if (isInitialized.current) {
            const reg = registrationRef.current;

            if (reg?.onChange) {
                const fullPhone = phone.dialCode + value;

                // Створюємо "псевдо" ChangeEvent для input
                const event = {
                    target: {
                        name,
                        value: fullPhone,
                    },
                } as unknown as ChangeEvent<HTMLInputElement>;

                reg.onChange(event);
            }
        }
    }, [phone.dialCode, value, name]);

    return (
        <>
            <div className={`${s.container} ${className ?? ''}`} ref={wrapperRef}>
                <label htmlFor={name}></label>
                <div className={s.input_container}>
                    <div className={s.select} onClick={() => setActive(!active)}>
                        <span className={`fi fi-${phone.iso2.toLowerCase()}`}/>
                        <span>{phone.dialCode}</span>
                    </div>
                    <input
                        id={name}
                        type="text"
                        placeholder={placeholder}
                        {...(registration || {})}
                        value={value}
                        onChange={(e) => {
                            if (e.target.value.length > 13) {
                                return;
                            }
                            setValue(e.target.value);
                        }}
                    />
                    {
                        active && (
                            <ul className={s.ul}>
                                {
                                    phoneList.map((item, index) => (
                                        <li key={index} onClick={() => {
                                            setPhone({dialCode: item.dialCode, iso2: item.iso2});
                                            setActive(false);
                                        }}>
                                            <span className={`fi fi-${item.iso2.toLowerCase()}`}/>
                                            <span>
                                               {item.dialCode}
                                            </span>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>
                {
                    error && (
                        <span className={s.error}>
                           {error}
                       </span>
                    )
                }
            </div>

        </>
    )
}