import styled from "styled-components"

const HeaderMain = styled.div`
width: 100%;
height: 5.395vw;
background: ${props => props.theme.ELWhite};
display: flex;
align-items: center;
padding: 0% 3%;
margin-bottom: 2.6%;
`

const PageHeader = styled.h1`
font-weight: 800;
font-family: roboto, sans-serif;
font-size: 1.7vw;
color: ${props => props.theme.ELGreen};
`

const HeaderBar = (props) => {
    return (
        <HeaderMain>
            <PageHeader>{props.title}</PageHeader>
        </HeaderMain>
    )
}

export default HeaderBar
