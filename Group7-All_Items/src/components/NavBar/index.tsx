import type { FC } from "react";
import Link from "next/link";

import {
    NavBtnList,
    NavContainer,
    NavImageWrapper,
    NavSearchBar,
    NavTitleWrapper,
} from "./style";
import logo from "@/public/logo.png";
import { NavItem } from "./NavItem";

const NavBar: FC = () => {
    return (
        <NavContainer id="navbar">
            <NavBtnList>
                <NavItem href="/#section-main" className="px-5" text="首頁" /></NavBtnList>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ marginRight: 50 }}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                id="navbarNav"
                className="collapse navbar-collapse"
                style={{ marginRight: 50 }}
            >
                <NavBtnList>
                    <NavItem href="/#section-about" text="關於我們" />
                    <NavItem href="/AllItems" text="所有商品" />
                    <NavItem href="/SellerUpload" text="賣家上傳" />
                    <NavItem href="/SignUp" text="Sign up" />
                    <NavItem text="Log in" />
                </NavBtnList>
            </div>
        </NavContainer>
    );
};

export default NavBar;
