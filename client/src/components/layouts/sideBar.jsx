import React from 'react'
import Header from './header';
import avatar from 'images/avatar.avif';
import menu from 'images/menu.png';

export default function SideBar() {
    return (
        <div className="side-bar">
            <Header 
                profileImage={avatar}
                profileName=""
                actions={[
                    <img src={menu} />,
                ]}
            />
            <div className="content">
                side bar
            </div>
        </div>
    )
}
