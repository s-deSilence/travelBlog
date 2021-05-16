import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Post } from '../../types/types';
import { BG } from '../common/bg';
import { PostPreview } from '../post/postPreview';
import { NavLink } from 'react-router-dom';

export const PostPage = ():ReactElement => {

    const { id } = useParams<{id:string}>();
    const allPosts:Post[] = useSelector( (state:any) => ( state.mainReducer.defaultPosts ));
    const currentPost = allPosts.find( p => p.id == +id );

    useEffect( () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })

    if( !currentPost ){
        return null;
    }

    return (
        <BG text={ currentPost.title } image={ currentPost.mainImage }>
            <section className="posts__post--section_container">
                <p className="posts__post--section_description">{ currentPost.description }</p>
                <p className="posts__post--section_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula rutrum diam sed sollicitudin. In sagittis urna vitae mauris elementum, a lobortis ante finibus. Nunc mattis enim lectus, sed venenatis est malesuada congue. Maecenas turpis nulla, vulputate quis ante nec, faucibus interdum lectus. Quisque ornare leo tortor, id dictum mi ullamcorper et. Sed aliquet enim eu porta rutrum. Phasellus nunc sem, vulputate ac interdum quis, luctus nec magna. Nulla facilisi. Nam posuere arcu felis, non luctus diam aliquam vitae. Proin in aliquet lectus, sed lacinia sem. Cras malesuada dolor in ante elementum viverra. Aenean sit amet ante quam. Cras cursus tempus tellus dictum semper. Praesent quis tellus vulputate, mattis justo non, aliquet magna. Vivamus aliquam dapibus scelerisque.</p>
                <p className="posts__post--section_description">Duis et orci eget neque rutrum scelerisque a at lacus. Mauris aliquam ullamcorper tellus, sed iaculis lacus pretium ut. Ut maximus auctor ligula ac laoreet. Etiam tincidunt orci non quam iaculis vestibulum. Sed faucibus, urna quis aliquet eleifend, orci neque cursus tellus, quis varius justo sapien vitae est. Proin pharetra maximus urna at imperdiet. Curabitur nec risus non augue suscipit congue. Fusce lacinia eget turpis ac placerat.</p>
                <p className="posts__post--section_description">Nullam sollicitudin ipsum purus, ut pharetra lorem volutpat at. Ut accumsan scelerisque lobortis. Etiam eget eros metus. Duis nibh dolor, dapibus et lectus vitae, consequat suscipit ante. Suspendisse cursus pretium orci vel fringilla. Aliquam interdum molestie ex, id suscipit risus malesuada quis. Ut viverra molestie ante ac iaculis. Donec lacinia justo sollicitudin ipsum fringilla, vel pellentesque felis sodales. Phasellus vulputate velit feugiat posuere sagittis. Sed tortor libero, iaculis sed turpis vel, commodo ornare ligula. Maecenas pretium mauris vel tempus aliquet. Vestibulum ex erat, volutpat accumsan iaculis pretium, egestas ac lacus. Donec sed erat at enim rhoncus vestibulum. Nulla vel sem scelerisque, pretium ipsum ut, fringilla elit. Nam sollicitudin pellentesque dapibus.</p>
                <p className="posts__post--section_description">Nam non augue sit amet felis rutrum mollis. Quisque non gravida nunc, ac lacinia quam. Curabitur ut tincidunt dolor, in tristique ipsum. Donec pharetra fermentum volutpat. In dapibus feugiat risus ut interdum. Maecenas laoreet sagittis auctor. In hendrerit orci at dui molestie iaculis. Quisque imperdiet nisl tincidunt, mattis tellus nec, feugiat mauris. Etiam at tempus quam.</p>
            </section>
            <NavLink to="/posts" className="posts--view_all">
                Return
            </NavLink>
            <section className="posts__last">
                <h2 className="posts__last--title">
                    Maybe Interest...
                </h2>
                {
                    allPosts
                        .filter( p => p.id != +id )
                        .sort(() => Math.random() - Math.random())
                        .slice( 0, 3 )
                        .map( post => (
                            <PostPreview {...post} key={ post.id } />
                        ))
                }
            </section>
        </BG>
    )
} 