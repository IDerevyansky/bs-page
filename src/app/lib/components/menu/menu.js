'use client'
import Link from 'next/link';
import Image from 'next/image';

import './menu.css';
import DATA from '@/app/lib/data/data-ru.json';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import MenuIcon from '@/app/lib/img/icon-menu.svg';
import closeIconMenu from '@/app/lib/img/icon-close-menu.svg';

export default function Menu(){

    const [mobMenu, setMobMenu] = useState('hidden');  


    //set init items menuMob
    const menuItemMob = ()=>(

        DATA.menu.map((item, key)=>{

            return(
                <Link key={key} href={item.link} onClick={()=> mobMenu == 'flex'? setMobMenu('hidden'):setMobMenu('flex')} className={usePathname()==item.link?'underline underline-offset-2 decoration-1':'hover:text-[#484E45]/70'}><p>{item.name}</p></Link>
            )
        
        })

    );

     //set init items menu
    const menuItem = ()=>(

        DATA.menu.map((item, key)=>{

            return(
                <Link key={key} href={item.link} className={usePathname()==item.link?'underline underline-offset-2 decoration-1':'hover:text-[#484E45]/70'}><p>{item.name}</p></Link>
            )
        
        })

    );

    return(

        <div className="menu-box">

            <div className="menu">
    
                <div className="logo"><Link href='/'><p className='text-lg'>kinesiohub.com</p></Link></div>

                <div className="mob-menu-icon" onClick={()=>mobMenu == 'flex'? setMobMenu('hidden'):setMobMenu('flex')}>

                  <Image
                  src={ mobMenu=='hidden'? MenuIcon:closeIconMenu }
                  width={24}
                  height={24}
                  alt='menu icon'
                  />

                </div>

                <div className={"mob-menu-items "+mobMenu}>

                    { 
                       menuItemMob() 
                    }

                </div>

                <div className="menu-itmems">

                    { 
                       menuItem() 
                    }
                    
                </div>
            </div> 

        </div> 
    )
}