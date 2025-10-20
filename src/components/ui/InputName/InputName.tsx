import s from './InputName.module.css'
import {InputNameProps} from "@/types/props/InputNameProps";
import {FieldValues} from "react-hook-form";
import {ApplicationForm} from "@/components/forms/Application/Application";

export default function InputName<TFieldValues extends FieldValues>({registerAction , registerOptions, placeholder, className, name, error}: InputNameProps<ApplicationForm>) {
    return (
        <>
            <div className={`${s.container} ${className ?? ''}`}>
                <label htmlFor={name}></label>
                <input
                    id={name}
                    type="text"
                    placeholder={placeholder} {...(registerAction  ? registerAction (name, registerOptions) : {})}
                />
                {
                   error && (
                       <span>
                           {error}
                       </span>
                    )
                }
            </div>
        </>
    )
}