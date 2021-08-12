import React from "react";
import LeftNav from "../../components/leftNav";
import RightNav from "../../components/rightNav";
import PostSide from "../PostSide";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2 position-relative">
          <LeftNav />
        </div>
        <div className="col-sm-7 position-relative">
          <PostSide />
        </div>
        <div className="col-sm-3 position-relative">
          <RightNav />
        </div>
      </div>
    </div>
  );
}
