import React from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { Seprator } from "../../../components/UI/Typograpghy/style";
import { CardWrapper } from "../../../components/UI/cards/style";
import {
  CardTitle,
  AccountWarning,
  DeactivateSvg,
  WarningTitle,
} from "./style";

export default function DeactivateAcc() {
  return (
    <CardWrapper>
      <CardTitle>Deactivate Account</CardTitle>
      <Seprator />
      <AccountWarning>
        <DeactivateSvg className="me-4">
          <BsFillExclamationCircleFill />
        </DeactivateSvg>
        <div className="d-flex flex-column flex-grow-1">
          <WarningTitle>You Are Deactivating Your Account</WarningTitle>
          <div className="fs-6 text-gray-700">
            Remember, Once you delete your account you will not able to get it
            back.
          </div>
        </div>
      </AccountWarning>
      <Seprator />
      <div className="d-flex justify-content-end py-2 px-3">
        <button className="btn btn-danger fw-bold">Deactivate Account</button>
      </div>
    </CardWrapper>
  );
}
