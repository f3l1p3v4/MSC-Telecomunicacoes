import React from 'react';
import * as S from './styles';

const Item = ({ children, link }) => {
    return (
        <S.Item>
            <S.ItemLink to={link} >{children}
            </S.ItemLink>
        </S.Item>
    );
}

export default Item;