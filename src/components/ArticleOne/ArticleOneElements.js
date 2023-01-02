import styled from "styled-components";

export const HeroContainerArticle = styled.div`
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

export const HeroBgArticle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBgArticle = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #2a5965;
`;

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
`;
export const ArticleSubContainer = styled.div`
  width: 1000px;
`;
export const ArticleSection = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
export const ArticleHeader = styled.h2``;

export const ArticleParagraph = styled.p`
  margin-bottom: 3rem;
`;
export const ArticleImg = styled.img`
  margin-bottom: 3rem;
  width: 100%;
  height: 50vh;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ButtonCont = styled.p`
  text-align: center;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;
