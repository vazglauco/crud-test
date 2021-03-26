import styled from "styled-components";

export const Container = styled.div`
    height: 60px;
    padding: 0 30px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    background: ${(props) => props.theme.colors.primary};
    span {
        color: ${(props) => props.theme.colors.secondary};
    }

    .buttons {
        display: flex;
        align-items: center;
        min-width: 100px;
        Button {
            margin-left: 15px;
        }
    }
`;
