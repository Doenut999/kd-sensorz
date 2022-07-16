import styled from "styled-components";
import {useState} from "react";
import { motion } from "framer-motion"
import LoginForm from "./LoginForm";

const SignUpForm = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    return (<>
            <button onClick={()=> setLoggedIn(!loggedIn)}>Toggle</button>
            <Wrapper>
                <FormPartition as={motion.div} initial={{y: "100vh", opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.6, duration: 0.9, type: "spring"}}>
                    <div className="sensor-project">
                        <LogoSpan>Sensor Project</LogoSpan>
                    </div>
                    <div className="main-info">
                        <Talk>Welcome to my group final project. <h4>Create An Account or login to continue</h4></Talk>
                    </div>
                    <OLogoSpan>Proudly Automobile</OLogoSpan>
                </FormPartition>
                <FormPartitionRight  as={motion.div} initial={{y: "-100vh", opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.3, duration: 0.9, type: "spring"}}>
                    {!loggedIn ?<> <UserName>
                            <span>USERNAME</span>
                            <input type="text" placeholder="goliath.brooke"/>
                        </UserName>
                        <Email>
                            <span>EMAIL</span>
                            <input type="text" placeholder="sobolo@finalproject.com"/>
                        </Email>
                        <Password>
                            <span>PASSWORD</span>
                            <input type="password" placeholder="**********"/>
                        </Password>
                        <RepeatPassword>
                            <span>REPEAT PASSWORD</span>
                            <input type="password" placeholder="**********"/>
                        </RepeatPassword>
                        <Register type="submit">REGISTER</Register>
                        <Last onClick={()=> setLoggedIn(!loggedIn)}>I have an existing account.</Last>
                        </> : <LoginForm />}
                </FormPartitionRight>
            </Wrapper>
    </>

    )
}

const Wrapper = styled.div`
  width: calc(35vw + 120px);
  height: 440px;
  border: 5px solid #c5b9a2;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FormPartition = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(28, 127, 28, 0.46);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;

`

const FormPartitionRight = styled(FormPartition)`
  background-color: rgba(0,0,0,0.76);
`

const LogoSpan = styled.span`
  color: white;
  position: relative;
  bottom: 120px;
  right: 20px;
  font-family: monospace;
  font-weight: bolder;
  font-size: 1.25rem;
`

const OLogoSpan = styled.span`
  color: white;
  position: relative;
  top: 120px;
  right: 20px;
  font-family: monospace, sans-serif;
  font-weight: bolder;
  font-size: 1.25rem;
`

const Talk = styled.span`
  font-family: "Anek Latin", monospace;
  font-weight: bold;
  font-size: 1rem;
`

const UserName = styled.div`
  color: yellow;
  position: relative;
  bottom: 70px;
  left: 0;
  display: flex;
  flex-direction: column;
`

const Email = styled.div`
  color: yellow;
  position: relative;
  bottom: 30px;
  left: 0;
  display: flex;
  flex-direction: column;
`

const Password = styled.div`
  color: yellow;
  position: relative;
  display: flex;
  flex-direction: column;
`

const RepeatPassword = styled.div`
  color: yellow;
  position: relative;
  top: 30px;
  left: 0;
  display: flex;
  flex-direction: column;
`

const Register = styled.button`
  color: black;
  background-color: navajowhite;
  width: 100px;
  height: 45px;
  position: relative;
  top: 90px;
  padding: 2px;
  
  border: 1px solid white;
  //
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
`

const Last = styled.span`
  color: yellow;
  position: relative;
  top: 54px;
  left: 120px;
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`
export default SignUpForm