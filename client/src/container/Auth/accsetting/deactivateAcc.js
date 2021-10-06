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
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

export default function DeactivateAcc() {
  const dispatch = useDispatch();
  const { confirm } = Modal;
  const userId = useSelector((state) => state.auth.user._id);

  function showPromiseConfirm() {
    confirm({
      title: 'Are you sure?',
      content:'Remember, Once you delete your account you will not able to get it back',
      onOk() {
        //dispatch(getdeletePost(post._id));
      },
      onCancel() {},
    });
  }

  return (
    <CardWrapper>
      <CardTitle>Deactivate Account</CardTitle>
      <Seprator />
      <AccountWarning>
        <DeactivateSvg className="me-4">
          <BsFillExclamationCircleFill />
        </DeactivateSvg>
        <div className="d-flex flex-column flex-grow-1">
          <WarningTitle>Deactivate Your Account</WarningTitle>
          <div className="fs-6 text-gray-700">
            Remember, Once you delete your account you will not able to get it
            back.
          </div>
        </div>
      </AccountWarning>
      <Seprator />
      <div className="d-flex justify-content-end py-2 px-3">
        <button className="btn btn-danger fw-bold" onClick={showPromiseConfirm}>Deactivate Account</button>
      </div>
    </CardWrapper>
  );
}
