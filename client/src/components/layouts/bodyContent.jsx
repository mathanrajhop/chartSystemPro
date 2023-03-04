import React from 'react';
import Header from './header';
import avatar from 'images/avatar.avif';
import menu from 'images/menu.png';

export default function BodyContent() {
    return (
        <div className="main-content">
            <Header 
                profileImage={avatar}
                profileName="Mathan Prakash"
                actions={[
                    <img src={menu} />,
                ]}
            />
            <div className="content">
                content
            </div>
        </div>
    )
}
