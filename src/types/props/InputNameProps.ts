import {FieldValues, Path, RegisterOptions, UseFormRegister} from "react-hook-form";

export type InputNameProps<TFieldValues extends FieldValues> = {
    className?: string;
    name: Path<TFieldValues>; // <- ключ типу форми
    placeholder?: string;
    value?: string;
    registerOptions?: RegisterOptions<TFieldValues>;
    error?: string;
    registerAction?: UseFormRegister<TFieldValues>;
};
