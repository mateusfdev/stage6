import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  background:  ${({ theme }) => theme.COLORS.PURPLE}
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_300 }
  }
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800}
    }
    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700}
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: 28px;
  }
`;