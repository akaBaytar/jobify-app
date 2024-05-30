import styled from 'styled-components';

import { useLocation, useNavigate } from 'react-router-dom';

import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi';

import { useJobsContext } from '../../hooks';

const Pagination = () => {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  const { data } = useJobsContext();
  const { currentPage, totalPages } = data;

  const paginationHandler = (num) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', num);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ num, active }) => {
    return (
      <button
        key={num}
        onClick={() => paginationHandler(num)}
        className={`button pagination-button ${active && 'active'}`}>
        {num}
      </button>
    );
  };

  const renderPageButtons = () => {
    const buttons = [];

    buttons.push(addPageButton({ num: 1, active: currentPage === 1 }));

    if (currentPage > 3) {
      buttons.push(
        <span className='pagination-button dots' key={'dots-1'}>
          ...
        </span>
      );
    }

    if (currentPage !== 1 && currentPage !== 2) {
      buttons.push(addPageButton({ num: currentPage - 1, active: false }));
    }

    if (currentPage !== 1 && currentPage !== totalPages) {
      buttons.push(addPageButton({ num: currentPage, active: true }));
    }

    if (currentPage !== totalPages && currentPage !== totalPages - 1) {
      buttons.push(addPageButton({ num: currentPage + 1, active: false }));
    }

    if (currentPage < totalPages - 2) {
      buttons.push(
        <span className='pagination-button dots' key={'dots+1'}>
          ...
        </span>
      );
    }

    buttons.push(
      addPageButton({ num: totalPages, active: currentPage === totalPages })
    );

    return buttons;
  };

  return (
    <Wrapper>
      <button
        className='button first-button'
        onClick={() => paginationHandler(1)}>
        <HiChevronDoubleLeft />
      </button>
      <button
        className='button prev-button'
        onClick={() => {
          let prev = currentPage - 1;
          if (prev < 1) prev = 1;
          paginationHandler(prev);
        }}>
        <HiChevronLeft />
      </button>
      <div className='button-container'>{renderPageButtons()}</div>
      <button
        className='button next-button'
        onClick={() => {
          let next = currentPage + 1;
          if (next > totalPages) next = totalPages;
          paginationHandler(next);
        }}>
        <HiChevronRight />
      </button>
      <button
        className='button first-button'
        onClick={() => paginationHandler(totalPages)}>
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-block-start: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .button-container {
    display: flex;
    border-radius: var(--border-radius);
  }

  .button,
  .pagination-button {
    color: var(--text-secondary-color);
    background-color: var(--background-secondary-color);
    border-radius: var(--border-radius);
    border-color: transparent;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    display: grid;
    place-items: center;
    font-size: 0.6rem;
    margin-inline-end: 0.25rem;

    @media (width>=401px) {
      width: 1.8rem;
      height: 1.8rem;
      font-size: 0.7rem;
    }

    @media (width>=768px) {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 0.9rem;
    }
  }

  .active {
    color: var(--white);
    background-color: var(--primary-500);
  }
`;

export default Pagination;
