import {ReactNode} from "react";

export type BtnOrderProps = {
    textContent: string,
    className?: string,
    content?: ReactNode,
    onClick?: () => void,
}