import React from "react";
import { TitleWrapper } from "../../../../components/UI/Typograpghy/style";
import { AccountSettingHead } from "./style";
import UserCard from "./displayUser";

export default function UserDetailForm() {
  return (
    <div className="section">
      <AccountSettingHead>
        <TitleWrapper>Account Setting</TitleWrapper>
      </AccountSettingHead>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-10 mx-auto">
            <UserCard />
          </div>
        </div>
      </div>
    </div>
  );
}
