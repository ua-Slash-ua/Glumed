export type MenuItemType = {
    name: string,
    path: string,
    className?: string,
    onClick?: () => void,
}

export type MenuType = MenuItemType[]