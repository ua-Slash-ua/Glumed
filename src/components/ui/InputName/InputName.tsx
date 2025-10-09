import s from './InputName.module.css'
import {InputNameProps} from "@/types/props/InputNameProps";

export default function InputName({registerAction , registerOptions, placeholder, className, name, error}: InputNameProps) {
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