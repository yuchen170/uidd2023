import styled from "styled-components";

export const FooterWrapper = styled.footer`
    position: relative;
    left: 0;
    width: 100%;
    background-color: #265590;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Container = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-right: 50px;
`;

export const IconWrapper = styled.div`
    position: relative;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    
`;

export const ContactInfo = styled.div`
    & p {
        color: white;
        margin-top: 10px;
        margin-bottom: 0px;
    }
`;

export const LegalInfo = styled.div`
    text-align: right;
    & p {
        color: white;
        margin-top: 10px;
        margin-bottom: 0px;
    }
`;
