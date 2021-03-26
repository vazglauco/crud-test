import styled from "styled-components";

const Table = styled.table`
    margin-top: 15px;
    width: 100%;
    overflow-x: auto;

    thead {
        border-bottom: 3px solid ${props => props.theme.colors.table.titleBorder};
        th {
            color: ${props => props.theme.colors.table.titleText};
            text-align: left;
            padding: 20px 30px;
        }
    }
    tbody {
        tr {
            border-bottom:1px solid ${props => props.theme.colors.table.bodyBorder};
            td {
                color: ${props => props.theme.colors.table.bodyText};
                padding: 15px 30px;
                font-size: 0.85em;
            }
        }
    }
    button {
        margin-right: 10px;
    }
`;
export default Table;