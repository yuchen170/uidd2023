import type { FC, PropsWithChildren } from "react";

import { A } from "./style";

interface NavItemProps {
    className?: string;
    href?: string;
    text: string;
}

export const NavItem: FC<NavItemProps> = ({ className, href, text }) => {
    return (
        <li className={`${className} nav-item`}>
            <A href={href}>{text}</A>
        </li>
    );
};
