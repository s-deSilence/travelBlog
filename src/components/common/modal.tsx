import React, { ReactElement, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Post } from '../../types/types';

export const Modal = ({ onClose }:{ onClose: () => void }):ReactElement => {

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ image, setImage ] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    const allPosts:Post[] = useSelector( (state:any) => ( state.mainReducer.defaultPosts ));

    const createPost = () => {
        const newId = Math.max( ...allPosts.map( p => p.id )) + 1;
        dispatch({ type:'ADD', payload:{
            id: newId,
            title,
            description,
            mainImage: image
        }})
        history.push(`/posts/${newId}`);
        onClose();
    }

    return (
        <>
            <div className="modal--bg"></div>
            <div className="modal__body">
                <div className="modal__body--title">Fill next fields: </div>
                <input 
                    className="modal__body--input"
                    maxLength={20}
                    onChange={ (e) => setTitle( e.target.value )}
                    placeholder="TITLE"
                />
                <input 
                    className="modal__body--input"
                    maxLength={120}
                    onChange={ (e) => setImage( e.target.value )}
                    placeholder="LINK TO IMAGE"
                />
                <textarea
                    className="modal__body--input modal__body--input--text"
                    maxLength={ 300 }
                    onChange={ (e) => setDescription( e.target.value )}
                    placeholder="DESCRIPTION"
                    rows={5}
                ></textarea>
                <div className="modal__body--footer">
                    <button className="modal__body--close" onClick={ onClose }>CLOSE</button>
                    <button 
                        className="modal__body--create" 
                        disabled={ !title || !image || !description }
                        onClick={ createPost }
                    >CREATE</button>
                </div>
            </div>
        </>
    )
}