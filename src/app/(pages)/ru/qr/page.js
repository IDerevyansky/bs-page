"use client"
import { useEffect, useState } from 'react';
import './qr.css';
import Link from 'next/link';
import { saveAs } from 'file-saver';

export default function Qr(){

    let [toggle, setToggle] = useState('front');

    useEffect(()=>{

        let bsCard = document.getElementsByClassName('bsCard');
        let vCard = document.getElementsByClassName('vCard');


        bsCard[0].addEventListener('click', ()=> ( toggle == 'front'?setToggle('back'):setToggle('front') ));
        vCard[0].addEventListener('click', () => ( saveAs('https://raw.githubusercontent.com/IDerevyansky/bs-page/refs/heads/main/src/app/lib/vCard.vcf', 'vCard.vcf') ));
        
    })

    return(

        <div className="bgBox">

            <div className='contentBox plase'>

                <div className={'bsCard '+toggle}></div>

                <div className='vCard'><p className="text-white">Добавить в контакты</p></div>
               
            </div>

        </div>

    )
}