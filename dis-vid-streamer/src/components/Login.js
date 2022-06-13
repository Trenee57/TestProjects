import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='./images/cta-logo-one.svg' alt='Company Logos' />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>Disney+ is the streaming home of Disney, Pixar, Marvel, Star Wars, National Geographic, and more. From new releases to your favorite classics and exclusive Originals, there's something for everyone.
                    </Description>
                    <CTALogoTwo src='./images/cta-logo-two.png' alt='Company Logos 2' />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;
const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height 100vh;
    position: relative;
    box-sizing: border-box;
    padding: 5rem 2.5rem;
    margin-bottom: 10vw;
`;

const BgImage = styled.div`
    height: 100%;
    background-image: url('./images/login-background.jpg');
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
`;

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 40.625rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    transition-timing-function: ease-out;
    transistion: opacity 0.2s;
`;

const CTALogoOne = styled.img`
    margin-bottom: .75rem;
    max-width: 37.5rem;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: .75rem;
    width: 100%;
    letter-spacing: .1rem;
    font-size: 1.2rem;
    padding: 1rem 0;
    border: 1px solid transparent;
    border-radius: .25rem;

    &:hover {
        background-color: #0483ee;
    }
    &:focus {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0,0%,95.3%, 1);
    font-size: .75rem;
    margin: 0 0 1.5rem;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    max-width: 37.5rem;
    margin-bottom: 1.25rem;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;

export default Login;