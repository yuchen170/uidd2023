import type { FC } from "react";
import SignUpLayout from "@/components/SignUpLayout";

const SignUp: FC = () => {
    return (
        <SignUpLayout>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <img src="signup/signup_bg.png" style={{ height: "100vh" }} />
            </div>
            <div>
                <div
                    style={{
                        marginTop: "20vh",
                        marginLeft: "15vw",
                    }}
                >
                    <h1 style={{ fontWeight: "normal" }}>SIGN UP NOW</h1>
                    <input
                        placeholder="用戶名稱"
                        style={{
                            width: "450px",
                            display: "block",
                            marginTop: "8vh",
                            paddingLeft: "18px",
                            height: "60px",
                            borderRadius: "40px",
                            border: "1px solid",
                            fontSize: "20px",
                        }}
                    ></input>
                    <input
                        placeholder="手機號碼"
                        style={{
                            width: "450px",
                            display: "block",
                            marginTop: "5vh",
                            paddingLeft: "18px",
                            height: "60px",
                            borderRadius: "40px",
                            border: "1px solid",
                            fontSize: "20px",
                        }}
                    ></input>
                    <input
                        placeholder="密碼"
                        style={{
                            width: "450px",
                            display: "block",
                            marginTop: "5vh",
                            paddingLeft: "18px",
                            height: "60px",
                            borderRadius: "40px",
                            border: "1px solid",
                            fontSize: "20px",
                        }}
                    ></input>
                    <button
                        style={{
                            marginTop: "5vh",
                            height: "60px",
                            width: "450px",
                            backgroundColor: "#2f5693",
                            borderRadius: "40px",
                            border: "0",
                            fontSize: "20px",
                            color: "white",
                        }}
                    >
                        立即加入
                    </button>
                    <div
                        style={{
                            marginTop: "5vh",
                            marginLeft: "165px",
                            fontSize: "16px",
                            cursor: 'pointer'
                        }}
                    >
                        已經有帳號了？ Login
                    </div>
                </div>
            </div>
        </div>
        </SignUpLayout>
    );
};

export default SignUp