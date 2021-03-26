import styled from "styled-components";

const Input = styled.input`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
    border: 1px solid ${(props) => props.theme.colors.form.border};
    padding: 10px;
    margin: 10px 0;
    width: 100%;
    outline: 0;
    border-radius: 10px;
    box-sizing: border-box;
`;

export default Input;