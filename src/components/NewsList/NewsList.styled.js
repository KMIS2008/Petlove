import styled from "styled-components";

export const List = styled.ul`
list-style: none;


@media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: ${p=>p.theme.spacing(4)};
}

`