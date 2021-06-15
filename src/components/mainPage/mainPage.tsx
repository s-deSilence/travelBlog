import React, { ReactElement} from 'react';
import { NavLink } from 'react-router-dom';
import bgImg from '../../images/bg.jpg';
import { BG } from '../common/bg';
import { Menu } from '../common/menu';
import { LastPosts } from './lastPosts';

export const MainPage = ():ReactElement => {

    return (
        <>
            <Menu />
            <BG image={ bgImg } text="My Travel Blog">
                <LastPosts />
                <NavLink to="/posts" className="posts--view_all">
                    View All
                </NavLink>
            </BG>
        </>
    )

}