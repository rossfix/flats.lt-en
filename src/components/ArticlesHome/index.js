import React from "react";
import Hero from "../../images/nekilnojamo_turto_nuomos_administravimas.png";
import {
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1
} from "../../components/HeroSection/HeroElements";
import {
  HeroContainerArticles,
  ArticlesContainer,
  ArticlesSubContainer,
  PaginationGrid,
  ArticleCont,
  AntPagination
} from "./ArticleHomeElements";
import ArticleCard from "./CardStyle";
import {
  articleOne,
  articleTwo,
  articleThree
} from "../ArticleOne/Data";

const ArticlesHomeComponent = () => {
  return (
    <>
      <HeroContainerArticles>
        <HeroBg>
          <ImageBg src={Hero} />
        </HeroBg>
        <HeroContent>
          <HeroH1>Real Estate rental articles</HeroH1>
        </HeroContent>
      </HeroContainerArticles>
      <ArticlesContainer>
        <ArticlesSubContainer>
          <ArticleCont>
            <ArticleCard {...articleOne} />
            <ArticleCard {...articleTwo} />
            <ArticleCard {...articleThree} />
           
          </ArticleCont>
          <PaginationGrid>
            <AntPagination defaultCurrent={1} total={10} />
          </PaginationGrid>
        </ArticlesSubContainer>
      </ArticlesContainer>
    </>
  );
};

export default ArticlesHomeComponent;
