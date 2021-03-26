import styled from "styled-components";

const Card = styled.div`
    background: ${(props) => props.theme.colors.primary};
    padding: 30px;
    border-radius: 10px;
    overflow-x: auto;
`;
export default Card;