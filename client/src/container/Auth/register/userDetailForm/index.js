import React, { Profiler } from "react";
import { TitleWrapper } from "../../../../components/UI/Typograpghy/style";
import { AccountSettingHead } from "./style";
import UserCard from "./displayUser";
import ProfileDetails from "./profileDetails";
import DeactivateAcc from './deactivateAcc';

export default function UserDetailForm() {
  return (
    <div className="section">
      <AccountSettingHead>
        <TitleWrapper>Account Setting</TitleWrapper>
      </AccountSettingHead>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-10 mx-auto pb-3">
            <UserCard />
          </div>
          <div className="col-sm-10 mx-auto pb-3">
            <ProfileDetails />
          </div>
          <div className="col-sm-10 mx-auto pb-3">
            <DeactivateAcc />
          </div>
        </div>
      </div>
    </div>
  );
}
