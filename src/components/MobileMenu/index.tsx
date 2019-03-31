import { styled } from "linaria/react";

export const MobileMenu = styled.div`
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    & > * {
        flex: 1 0 0;
    }
`;
