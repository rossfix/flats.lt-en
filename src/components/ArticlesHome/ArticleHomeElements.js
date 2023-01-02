import styled from "styled-components";
import { Pagination } from "antd";
import { Card } from "antd";
import { Link } from "react-router-dom";

export const HeroContainerArticles = styled.div`
  background: #fdf2ed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 50vh;
  position: relative;
  z-index: 1;
  padding-top: 60px;
`;

export const ArticlesContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
`;

export const ArticlesSubContainer = styled.div`
  width: 1000px;
`;

export const ArticleCont = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 3fr));
  margin-bottom: 3rem;
`;

export const CardButton = styled(Link)``;

export const AntCard = styled(Card)`
  border-radius: 20px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const AntImg = styled.img`
  object-fit: cover;
  width: 300px;
  height: 250px;
  border-radius: 20px 20px 0px 0px !important;
  margin: none;
`;

export const PaginationGrid = styled.div`
  text-align: center;
`;

export const AntPagination = styled(Pagination)``;
