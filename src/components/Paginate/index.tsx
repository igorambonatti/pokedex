import React from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import ReactPaginate from 'react-paginate';

import { Container } from './styles';

export interface SelectedItem {
  selected: number;
}

interface PaginateProps {
  onPageChange: (selectedItem: SelectedItem) => void;
  pageCount: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
}

const Paginate: React.FC<PaginateProps> = ({
  onPageChange,
  pageCount,
  pageRangeDisplayed = 2,
  marginPagesDisplayed = 1,
}) => {
  return (
    <Container className="pokedex_paginate__container">
      <ReactPaginate
        onPageChange={onPageChange}
        pageCount={pageCount}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        previousLabel={<FiChevronsLeft size={16} color="#fa9600" />}
        breakLabel={<FaEllipsisH size={12} color="#fa9600" />}
        nextLabel={<FiChevronsRight size={16} color="#fa9600" />}
        containerClassName="pagination__container"
        activeClassName="pagination__active_page"
      />
    </Container>
  );
};

export default Paginate;
