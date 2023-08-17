import styled from 'styled-components'

export const Container = styled.button`
background: none;
color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.PURP1 : theme.COLORS.WHITE};

border: none;
font-size: 16px;
`;