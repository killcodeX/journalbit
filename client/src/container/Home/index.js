import React from "react";
import LeftNav from "../../components/leftNav";
import RightNav from "../../components/rightNav";
import PostSide from "../../components/PostSide";

export default function Home() {
  return (
    <div className="section">
      <div className="row">
        <div className="col-sm-2 position-relative">
          <LeftNav />
        </div>
        <div className="col-sm-8">
          <PostSide />
        </div>
        <div className="col-sm-2 position-relative">
          <RightNav />
        </div>
      </div>
    </div>
  );
}
