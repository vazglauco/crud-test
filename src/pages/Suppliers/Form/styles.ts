import styled from "styled-components";

const Container = styled.div`
.header{
        display: flex; 
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        h1 {
            color: ${(props) => props.theme.colors.secondary};
            font-size: 24px
        }
        button {
            margin-top: 0;
        }
    }
    button {
        margin-top: 40px;
    }
`;

export default Container;