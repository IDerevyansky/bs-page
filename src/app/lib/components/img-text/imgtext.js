import Link from 'next/link';
import Image from 'next/image';

import './imgtext.css';

export default function ImgText(props){

    let content = props.data;
    let orientation = props.orientation(content.orientation);

    let h2Style = content.h2 == 'font-serif'?'font-serif':'font-sans';
    let pStyle = content.p == 'font-serif'?'font-serif':'font-sans';

    return(
        <div className={content.bg == 'true' ? "bgBox color" : "bgBox"}>
            <div className={orientation}>
        
                {/* <div className='leftSide'> */}
                <div className={ content.orientation=='reverse'?'leftSide':'leftSide right' }>
                    <h2 className={'line-clamp-2 '+h2Style}>{content.title}</h2>
                    <p className={'line-clamp-6 '+pStyle}>{content.description}</p>
                    {content.more && content.linkMore == ''?'':<Link href={content.linkMore}><p className='text-blue-500'>{content.more}</p></Link>}
                </div>

                <div className='rightSide'>
                    <div className='img img-text-size'></div>
                </div>

            </div>
        </div>
    )
}