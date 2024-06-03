import styled from "styled-components";

export const List = styled.ul`
list-style: none;

@media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: ${p=>p.theme.spacing(4)};
    flex: 0 1 calc(50% - 8px); 
box-sizing: border-box;
}

@media (min-width: 1280) {

    flex:0 1 calc(33.33% - 8px)
}

`