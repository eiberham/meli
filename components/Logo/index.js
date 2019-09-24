import React from 'react';
import './styles.scss';
import Link from 'next/link';

export default function (){
    return (
        <div className="logo">
            <Link href="/">
                <img src="/static/Logo_ML.png" alt="logo" />
            </Link>
        </div>
    )
}