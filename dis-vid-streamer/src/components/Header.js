import styled from "styled-components";

const Header = (props) => {
    return (
        <Nav>
            <Logo>
                <img src='./images/logo.svg' alt='Disney+' />
            </Logo>
            <NavMenu>
                <a href='/home'>
                    <img src='./images/home-icon.svg' alt='Home' />
                    <span>home</span>
                </a>
                <a href='/search'>
                    <img src='./images/search-icon.svg' alt='Search' />
                    <span>search</span>
                </a>
                <a href='/watchlist'>
                    <img src='./images/watchlist-icon.svg' alt='Watchlist' />
                    <span>watchlist</span>
                </a>
                <a href='/originals'>
                    <img src='./images/original-icon.svg' alt='Originals' />
                    <span>originals</span>
                </a>
                <a href='/movies'>
                    <img src='./images/movie-icon.svg' alt='Movies' />
                    <span>movies</span>
                </a>
                <a href='/series'>
                    <img src='./images/series-icon.svg' alt='Series' />
                    <span>series</span>
                </a>
            </NavMenu>
            <Login>Login</Login>
        </Nav>
    )
}

const Nav = styled.nav`
    height: 4.375rem;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    padding: 0 2rem;
    letter-spacing: 1rem;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 5rem;
    margin-top: .25rem;
    max-height: 4.375rem;
    font-size: 0;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    height: 100%;  
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    margin: 0;
    margin-right: auto;
    margin-left: 1.5rem;
    padding: 0;

    a {
        display: flex;
        align-items: center;
        padding: .75rem;
        
        img {
            height: 1.25rem;
            min-width: 1.25rem;
            width: 1.25rem;
            z-index: auto;
        }

        span {
            color: rgb(249,249,249);
            text-transform: uppercase;
            font-size: .75rem;
            letter-spacing: .089rem;
            line-height: 1.08;
            padding: .125rem 0px;
            white-space: nowrap;
            position: relative;

            &:before {
                content: "";
                background-color: rgb(249, 249, 249);
                height: .125rem;
                width: auto;
                border-radius: 0px 0px .25rem .25rem;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -0.375rem;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
            }
        }
        
        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
        &:focus {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
        
    }

    @media (max-width: 768px){
        display: none;
    }
`;

const Login = styled.a`
    background-color: rbga(0, 0, 0, 0.6);
    text-transform: uppercase;
    letter-spacing: .09rem;
    padding: .5rem 1rem;
    border: 1px solid #f9f9f9;
    border-radius: .25rem;
    transition: all .2ms ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

export default Header;