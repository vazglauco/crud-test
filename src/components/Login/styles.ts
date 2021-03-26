import styled from "styled-components";

const Container = styled.div`
    h1 {
        margin-bottom: 25px;
        text-align: center;
        font-size: 24px;
        color: ${props => props.theme.colors.secondary}
    }
`;
export default Container;
