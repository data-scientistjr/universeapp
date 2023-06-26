// eslint-disable-next-line 
import React, { useState } from 'react';
// eslint-disable-next-line 
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';


import { ChannelSearch, TeamChannelList } from './';
import LogoIcon from '../assets/Logoicon.png'
import LogoutIcon from '../assets/logout.png'

// eslint-disable-next-line
const cookies = new Cookies();


const SideBar = ({ logout }) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={LogoIcon} alt="App Logo" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const CompanyHeader = ( ) => (
    <div className='channel-list__header'>
        <p className="channel-list__header__text">Chat App Pager</p>

    </div>
)


const ChannelListContainer = () => {
    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();
    }


    return(
        <>    
          <SideBar />
          <div className="channel-list__list__wrapper">
            <CompanyHeader/>
            <ChannelSearch  />
            <ChannelList 
                    filters={{}}
                    channelRenderFilterFn={{}}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="team"
                        />
                    )}

            />
            <ChannelList 
                    filters={{}}
                    channelRenderFilterFn={{}}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="messaging"
                        />

                    )}
            />

          </div>

        </>
    );
 
}

export default ChannelListContainer