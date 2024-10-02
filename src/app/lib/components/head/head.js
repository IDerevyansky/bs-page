import Link from 'next/link';
import Image from 'next/image';
import './head.css';

import fb from '@/app/lib/img/fb.svg';
import inst from '@/app/lib/img/in.svg';
import tg from '@/app/lib/img/tg.svg';

export default function Head(){
    return(
        <div className='contentBox'>

            <div className='leftSide'>

                <div className='text'>
                    <h1 className='line-clamp-2'>Lorem ipsum dolor sit amet consectet</h1>
                    <p className="line-clamp-4">Lorem ipsum dolor sit amet consectetur. Phasellus phasellus egestas id praesent egestas volutpat. Tristique massa id gravida dictum hendrerit aliquam volutpat amet consectetur. Id aenean bibendum donec placerat purus. Ultrices nibh proin dis venenatis.</p>
                    <Link href='/ru/about'><p className='text-blue-500'>Подробнее...</p></Link>
                </div>
                <div className='socialIcon'>

                    <Link href='#'>
                        <Image
                        src={fb}
                        width='32px'
                        height='32px'
                        alt='facebook'
                        />
                    </Link>

                    <Link href='#'>
                        <Image
                        src={inst}
                        width='32px'
                        height='32px'
                        alt='instagram'
                        />
                    </Link>

                    <Link href='#'>
                        <Image
                        src={tg}
                        width='32px'
                        height='32px'
                        alt='telegram'
                        />
                    </Link>

                    <Link href='#' className='appointment'>
                        Appointment
                    </Link>

                </div>

            </div>

            <div className='rightSide'>

                <div className='img'></div>

            </div>

        </div>
    )
}
//fb-in-tg-wt