import type { FC } from "react";
import Image from "next/image";

import { Section } from "@/components/atoms/Section/style";
import { H1 } from "@/components/atoms/h1/style";
import sec1 from "@/public/about/SecRent.png";
import sec1_2 from "@/public/about/SecRent.png";
import about from "@/public/about/about.png";
import { useSpring, animated } from "@react-spring/web";
import {
    TeamContainer,
    TeamImageWrapper,
    ImageWrapper,
    AnimatedImageWrapper,
    AboutWrapper,
    AboutContainer,
    ImageGroup,
    Image as StyledImage,
} from "./style";

export const MainPage: FC = () => {
    const propsAnimated = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 800,
        config: { duration: 1500 },
    });
    const props = useSpring({
        to: { opacity: 0 },
        from: { opacity: 1 },
        delay: 800,
        config: { duration: 1500 },
    });

    function Number({ n }) {
        const { number } = useSpring({
            from: { number: 1500 },
            number: n,
            delay: 1000,
            config: { mass: 1, tension: 0.05, friction: 50 },
        });
        return (
            <animated.div style={{ color: "white", fontSize: "40px" }}>
                {number.to((n) => n.toFixed(0))}
            </animated.div>
        );
    }
    return (
        <>
            <Section id="section-main">
                <div
                    style={{ width: "80vw", margin: "auto", marginTop: "75px" }}
                >
                    <ImageWrapper>
                        <animated.div style={{ ...props }}>
                            <Image src={sec1} alt="" />
                        </animated.div>
                        <AnimatedImageWrapper
                            style={{
                                width: "80vw",
                                ...propsAnimated,
                            }}
                        >
                            <Image src={sec1_2} alt="" />
                        </AnimatedImageWrapper>
                    </ImageWrapper>
                </div>
            </Section>

            <Section id="section-about">
                <H1>關於我們 About Us</H1>
                <div style={{ marginLeft: "10vw", marginTop: "75px" }}>
                    <h2 style={{ fontSize: "40px", fontWeight: "700" }}>
                        SecRent 二手租借平台
                    </h2>
                    <h2 style={{ fontSize: "24px", fontWeight: "600" }}>
                        全台唯一可讓你自由上架目前用不到商品的網站
                    </h2>
                </div>
                <AboutContainer>
                    <AboutWrapper>
                        <Image src={about} alt="" />
                    </AboutWrapper>
                </AboutContainer>
                <div
                    style={{
                        backgroundColor: "#265590",
                        width: "100%",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        marginTop: "75px",
                    }}
                >
                    <div style={{ display: "inline-flex" }}>
                        <h1
                            style={{
                                marginTop: "20px",
                                color: "white",
                                fontSize: "24px",
                            }}
                        >
                            在平台上完成的成交量
                        </h1>
                        <Number n={19990} />
                        <h1
                            style={{
                                marginTop: "20px",
                                color: "white",
                                fontSize: "24px",
                            }}
                        >
                            件
                        </h1>
                    </div>
                </div>
            </Section>
            <Section id="section-team">
                <H1>團隊成員</H1>
                <TeamContainer>
                    <ImageGroup>
                        <TeamImageWrapper>
                            <StyledImage
                                src="/about/1.png"
                                bg="/about/2.png"
                            />
                        </TeamImageWrapper>
                        <TeamImageWrapper>
                            <StyledImage
                                src="/about/3.png"
                                bg="/about/4.png"
                            />
                        </TeamImageWrapper>
                        <TeamImageWrapper>
                            <StyledImage
                                src="/about/5.png"
                                bg="/about/6.png"
                            />
                        </TeamImageWrapper>
                        <TeamImageWrapper>
                            <StyledImage
                                src="/about/7.png"
                                bg="/about/8.png"
                            />
                        </TeamImageWrapper>
                        <TeamImageWrapper>
                            <StyledImage
                                src="/about/9.png"
                                bg="/about/10.png"
                                />
                        </TeamImageWrapper>
                        <TeamImageWrapper>
                            <StyledImage
                                src="/about/11.png"
                                bg="/about/12.png"
                            />
                        </TeamImageWrapper>
                    </ImageGroup>
                </TeamContainer>
            </Section>
        </>
    );
};