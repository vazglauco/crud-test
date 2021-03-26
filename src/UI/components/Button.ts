import styled from "styled-components";

const Button = styled.button`
    color: ${(props) => props.theme.colors.primary};
    background: ${props => props.theme.colors.secondary};
    border-radius: 10px;
    padding: 10px 20px;
    border: 0;
    min-width: 50px;
    cursor: pointer;
    outline: none;
    
    &:active {
        transform: scale(0.9);
        transition: all 0.2s;
    }
`;
export default Button;