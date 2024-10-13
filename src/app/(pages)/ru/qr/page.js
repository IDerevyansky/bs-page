"use client"
import { useEffect, useState } from 'react';
import './qr.css';
import Link from 'next/link';
//import Card from '@/app/lib/vCard.vcf';

export default function Qr(){

    let [toggle, setToggle] = useState('front');

    useEffect(()=>{

        let bsCard = document.getElementsByClassName('bsCard');
        // let vCard = document.getElementsByClassName('vCard');


        bsCard[0].addEventListener('click', ()=> ( toggle == 'front'?setToggle('back'):setToggle('front') ));
        // vCard[0].addEventListener('click', () => ( ));
        
    })

    return(

        <div className="bgBox">

            <div className='contentBox plase'>

                <div className={'bsCard '+toggle}></div>

                {/* <Link href={'../../lib/vCard.vcf'} className='vCard' download><p className="text-white">Добавить в контакты</p></Link> */}
               
            </div>

        </div>

    )
}