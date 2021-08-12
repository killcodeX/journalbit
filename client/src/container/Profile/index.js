import React from 'react';
import { ProfileWrapper, BannerWrapper, ImageBanner } from './style';

export default function Profile() {
    return (
        <ProfileWrapper>
            <BannerWrapper>
                <ImageBanner src={process.env.PUBLIC_URL + "/assets/banner.jpg"} alt='banner' />
            </BannerWrapper>
        </ProfileWrapper>
    )
}
