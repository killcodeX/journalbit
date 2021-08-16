import React from 'react'
import { FcApproval } from "react-icons/fc";
import { AiOutlineUser, AiFillEnvironment } from "react-icons/ai";
import { HeadingWrapper, Seprator } from "../../../../components/UI/Typograpghy/style";
import { CardWrapper } from "../../../../components/UI/cards/style";
import { ProfileImageWrapper, OnlineIndicator, UserName, CardTitle } from "./style";

export default function DeactivateAcc() {
    return (
        <CardWrapper>
            <CardTitle>Deactivate Account</CardTitle>
            <Seprator />
        </CardWrapper>
    )
}
