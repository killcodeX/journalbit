import React, { useEffect, useState } from "react";
import { TitleWrapper } from "../../../components/UI/Typograpghy/style";
import { AccountSettingHead } from "./style";
import { loadState } from "../../../helpers/localStorage";
import UserCard from "./displayUser";
import ProfileDetails from "./profileDetails";
import DeactivateAcc from "./deactivateAcc";
import { Spin } from 'antd';

export default function UserDetailForm() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(loadState("journalUser"));
  }, []);

  
  if(user == undefined){
    return <Spin />
  }

  return (
    <div className="section">
      <AccountSettingHead>
        <TitleWrapper>Account Setting</TitleWrapper>
      </AccountSettingHead>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-10 mx-auto pb-3">
            <UserCard user={user} />
          </div>
          <div className="col-sm-10 mx-auto pb-3">
            <ProfileDetails user={user} />
          </div>
          <div className="col-sm-10 mx-auto pb-3">
            <DeactivateAcc user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
