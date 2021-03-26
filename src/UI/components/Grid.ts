import styled from "styled-components";

interface IColumnProps {
    size: number
}

const Container = styled.div`
    max-width: 1360px;
    padding: 15px;
    margin: 0 auto;
`;

const Row = styled.div`
    display: flex;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Column = styled.div<IColumnProps>`
    padding: 0 10px 0 0;
    flex: ${(props: any) => props.size};
    &:last-child {
        padding-right:0;
    }
`;
export { Container, Row, Column };