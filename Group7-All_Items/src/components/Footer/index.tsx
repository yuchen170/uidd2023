import type { FC } from "react";
import Image from "next/image";
import {
    FooterWrapper,
    Container,
    ContactInfo,
    IconWrapper,
    LegalInfo,
} from "./style";

const Footer: FC = () => {
    return (
            <FooterWrapper>
                <Container>
                    <ContactInfo>
                        <p>聯絡我們</p>
                        <p>電話: 06-2680-736</p>
                        <p>E-mail: service@secondhand.cc</p>
                    </ContactInfo>
                    </Container>
                    <Container>
                    <IconWrapper>
                        <a href="#">
                            <Image src="/FB.png" alt="" height="40" width="40" />
                        </a>
                        <a href="#">
                            <Image src="/Twitter.png" alt="" height="40" width="40" />
                        </a>
                        <a href="#">
                            <Image src="/Instagram.png" alt="" height="40" width="40" />
                        </a>
                    </IconWrapper>
                    </Container>
                <Container>
                    <LegalInfo>
                        <p>Get what you want, when you want it</p>
                        <p>
                            隱私權政策 cookie政策 網站使用說明 會員服務
                        </p>
                    </LegalInfo>
                </Container>
            </FooterWrapper>
    );
};

export default Footer;