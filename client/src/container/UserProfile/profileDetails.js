import React from "react";
import Posts from "../../components/Posts";
import { CardWrapper } from "../../components/UI/cards/style";
import { links } from "../../mock-data";

export default function profileDetails() {
  return (
    <div className="pt-4">
      <div className="row">
        <div className="col-sm-4">
            <CardWrapper>hi</CardWrapper>
        </div>
        <div className="col-sm-8">
          {links.map((link) => {
            return <Posts link={link} />;
          })}
        </div>
      </div>
    </div>
  );
}
