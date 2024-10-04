import Link from 'next/link';
import Image from 'next/image';

import './imgtext.css';

export default function ImgText(props){

    let content = props.data;
    console.log(props.data.orientation);

    return(
        <div className={props.data.orientation == 'default'?'contentBox orientation':'contentBox orientation-reverse'}>
    
            <div className='leftSide'>
                <h2 className='line-clamp-2'>{content.title}</h2>
                <p className="line-clamp-4">{content.description}</p>
                <Link href={content.linkMore}><p className='text-blue-500'>{content.more}</p></Link>
            </div>

            <div className='rightSide'>
                <div className='img img-text-size'></div>
            </div>

        </div>
    )
}