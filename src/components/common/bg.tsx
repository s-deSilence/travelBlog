import React, { ReactElement, ReactNode } from 'react';
import { ArrowDown } from '../icons/arrowDown';

export const BG = ({ children, text, image }:{ children:ReactNode, text:string, image:string}):ReactElement => {

    return (
        <main>
            <section className="bg-image" style={{ backgroundImage: `url(${image})`}}>
                <div className="bg-header">
                    { text }
                </div>
                <ArrowDown />
            </section>
            { children }
        </main>
    )
}