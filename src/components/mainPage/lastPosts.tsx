import React, { ReactElement} from 'react';
import { useSelector } from 'react-redux';
import { Post } from '../../types/types';
import { PostPreview } from '../post/postPreview';


export const LastPosts = ():ReactElement => {

    const allPosts:Post[] = useSelector( (state:any) => ( state.mainReducer.defaultPosts ));

    return (
        <section className="posts__last">
            <h2 className="posts__last--title">
                Last Posts
            </h2>
            {
                allPosts
                    .slice( 0, 3 )
                    .map( post => (
                        <PostPreview {...post} key={ post.id } />
                    ))
            }
        </section>
    )

}