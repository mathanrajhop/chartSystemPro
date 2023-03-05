import React from 'react';

import Header from './header';
import Content from './content';
import Search from './search';

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
            <Content 
                innerHTML={<div>
                    
                </div>}
            />
        </div>
    )
}
