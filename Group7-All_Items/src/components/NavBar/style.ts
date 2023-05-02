import styled from "styled-components";

export const NavContainer = styled.nav.attrs(() => ({
    className: "navbar navbar-expand-md fixed-top",
}))`
    height: 105px;
    background: #eff1f5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const NavImageWrapper = styled.div`
    margin-left: 88px;
`;

export const NavTitleWrapper = styled.div`
    margin-left: 24px;
    white-space: pre-wrap;
    font-size: 18px;
`;

export const NavSearchBar = styled.input`
    width: 136px;
    margin-left: 29px;
`;

export const NavBtnContainer = styled.div`
    margin-right: 40px;
`;

export const NavBtnList = styled.ul.attrs(() => ({
    className: "navbar-nav ms-auto",
}))`
    float: right;
`;
