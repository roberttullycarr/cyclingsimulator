import styled from "styled-components"

const HeaderMain = styled.div`
width: 100%;
height: 5.395vw;
background: ${props => props.theme.HeaderBackColor};
display: flex;
align-items: center;
padding: 0 3%;
`

const PageHeader = styled.h1`
font-weight: 800;
font-family: roboto, sans-serif;
font-size: 1.7vw;
color: ${props => props.theme.HeaderTextColor};
`

const HeaderBar = (props) => {
    return (
        <HeaderMain>
            <PageHeader>{props.title}</PageHeader>
        </HeaderMain>
    )
}

export default HeaderBar
