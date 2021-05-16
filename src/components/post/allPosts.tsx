import React, { ReactElement} from 'react';
import bgImg from '../../images/posts-bg.jpg';
import { useSelector } from 'react-redux';
import { Post } from '../../types/types';
import { PostPreview } from '../post/postPreview';
import { BG } from '../common/bg';

export const AllPosts = ():ReactElement => {

    const allPosts:Post[] = useSelector( (state:any) => ( state.mainReducer.defaultPosts ));

    return (
        <BG image={ bgImg} text="All Posts">
            <section className="posts__last">
                {
                    allPosts
                        .map( post => (
                            <PostPreview {...post} key={ post.id } />
                        ))
                }
            </section>
        </BG>
    )

}