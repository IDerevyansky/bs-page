import Link from 'next/link';
import Image from 'next/image';
import './head.css';

import fb from '@/app/lib/img/fb.png';
import inst from '@/app/lib/img/in.png';
import tg from '@/app/lib/img/tg.png';

export default function Head(props){

    let content = props.data;
    let orientation = props.orientation(content.orientation);

    console.log(content);

    return(
        <div className={content.bg == 'true' ? "bgBox color" : "bgBox"}>
            {/* <div className='HeadBox contentBox'> */}
            <div className={orientation}>

                <div className='leftSide'>

                    <div className='text'>
                        <h1 className={'line-clamp-'+content.lengthTitle}>{content.title}</h1>
                        <p className={'text-[24px] font-light leading-normal line-clamp-'+content.lengthDescription} dangerouslySetInnerHTML={{__html:content.description}} ></p>
                        {content.more && content.linkMore == ''?'':<Link href={content.linkMore}><p className='text-blue-500'>{content.more}</p></Link>}
                    </div>
                    <div className='socialIcon'>

                        <Link href={content.fb} target='blank_'>
                            <Image
                            src={fb}
                            width='32'
                            height='32'
                            alt='facebook'
                            />
                        </Link>

                        <Link href={content.in} target='blank_'>
                            <Image
                            src={inst}
                            width='32'
                            height='32'
                            alt='instagram'
                            />
                        </Link>

                        <Link href={content.tg} target='blank_'>
                            <Image
                            src={tg}
                            width='32'
                            height='32'
                            alt='telegram'
                            />
                        </Link>

                        <Link href={content.linkAppointment} target='blank_' className='appointment'>
                            {content.appointment}
                        </Link>

                    </div>

                </div>

                <div className='rightSide'>

                    <div className='img img-head-size'></div>

                </div>

            </div>
        </div>
    )
}