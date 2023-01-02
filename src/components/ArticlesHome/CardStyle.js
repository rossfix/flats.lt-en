import React from "react";
import { AntCard, AntImg, CardButton } from "./ArticleHomeElements";

const ArticleCard = (props) => {
  const { Meta } = AntCard;
  return (
    <CardButton to={props.url}>
      <AntCard
        style={{
          width: 300
        }}
        cover={<AntImg alt={props.heroalt} src={props.hero} />}
      >
        <Meta
          title={props.headerone}
          description={props.firstpar.substring(0, 40) + "..."}
        />
      </AntCard>
    </CardButton>
  );
};

export default ArticleCard;
