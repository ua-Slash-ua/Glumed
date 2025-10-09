import { RegisterOptions, UseFormRegister } from "react-hook-form";
import {PhoneIsoCodes} from "@/types/phoneIsoCode.type";

export type InputNameProps<T extends Record<string, any> = any> = {
    className?: string;
    name: string;
    placeholder?: string;
    value?: string;
    registerOptions?: RegisterOptions<T>;
    error?: string;
    registerAction ?: UseFormRegister<T>;
    phoneCode?: PhoneIsoCodes;
};
