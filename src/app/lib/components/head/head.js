import Link from 'next/link';
import './head.css';

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
                    <p>In</p>
                    <p>Tg</p>
                    <p>Fb</p>
                </div>

            </div>

            <div className='rightSide'>

                <div className='img'></div>

            </div>

        </div>
    )
}