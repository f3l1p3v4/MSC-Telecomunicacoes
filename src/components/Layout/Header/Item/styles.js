import styled from 'styled-components';
import { Link } from 'gatsby';

export const Item = styled.li`
  margin: 0 1.2rem;
  list-style: none;
`;

export const ItemLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: var(--_color_0);
    transition: 0.5s;
    &:before {
      content: "";
      position: absolute;
      display: block;
      top: 0.8rem;
      width: 0%;
      border-top: 3px solid #222;
      transition: 0.5s;
    }
`;