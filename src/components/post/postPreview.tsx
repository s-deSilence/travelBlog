import React, { ReactElement} from 'react';
import { NavLink } from 'react-router-dom';
import { Post } from '../../types/types';
import { ArrowRight } from '../icons/arrowRight';

export const PostPreview = ({ id, mainImage, title, description }:Post):ReactElement => {

    return (
        <div className="posts__post--container">
            <div className="posts__post--image_container">
                <img src={ mainImage } />
            </div>
            <div className="posts__post--text_container">
                <h4 className="posts__post--title">{ title }</h4>
                <p className="posts__post--description">{ description }</p>
                {
                    id
                    ?   <div style={{ display:'flex', justifyContent:'flex-end'}}>
                            <NavLink to={`/posts/${id}`} className="posts__post--link">
                                <ArrowRight />
                            </NavLink>
                        </div>
                    :   null
                }
            </div>
        </div>
    )
}