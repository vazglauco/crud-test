import styled from "styled-components";

const Container = styled.div`
    .header{
        display: flex; 
        justify-content: space-between;
        align-items: center;
        h1 {
            color: ${(props) => props.theme.colors.secondary};
            font-size: 24px
        }
    }
`;
export default Container;