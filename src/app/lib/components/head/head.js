import Link from 'next/link';
import Image from 'next/image';
import './head.css';

import fb from '@/app/lib/img/fb.png';
import inst from '@/app/lib/img/in.png';
import tg from '@/app/lib/img/tg.png';

export default function Head(){
    return(
        <div className='HeadBox contentBox'>

            <div className='leftSide'>

                <div className='text'>
                    <h1 className='line-clamp-2'>Lorem ipsum dolor sit amet consectet</h1>
                    <p className="line-clamp-4">Lorem ipsum dolor sit amet consectetur. Phasellus phasellus egestas id praesent egestas volutpat. Tristique massa id gravida dictum hendrerit aliquam volutpat amet consectetur. Id aenean bibendum donec placerat purus. Ultrices nibh proin dis venenatis.</p>
                    <Link href='/ru/about'><p className='text-blue-500'>Подробнее...</p></Link>
                </div>
                <div className='socialIcon'>

                    <Link href='#' target='blank_'>
                        <Image
                        src={fb}
                        width='32'
                        height='32'
                        alt='facebook'
                        />
                    </Link>

                    <Link href='#' target='blank_'>
                        <Image
                        src={inst}
                        width='32'
                        height='32'
                        alt='instagram'
                        />
                    </Link>

                    <Link href='#' target='blank_'>
                        <Image
                        src={tg}
                        width='32'
                        height='32'
                        alt='telegram'
                        />
                    </Link>

                    <Link href='https://wa.me/18182987426?text=Здравствуйте%20Наталья,%20я%20хочу%20записаться%20к%20вам%20на%20прием.' target='blank_' className='appointment'>
                        Appointment
                    </Link>

                </div>

            </div>

            <div className='rightSide'>

                <div className='img img-head-size'></div>

            </div>

        </div>
    )
}