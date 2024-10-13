import Link from 'next/link';
import './textblock.css';

export default function TextBlock(props){

    let content = props.data;
    let orientation = props.orientation(content.orientation);

    let h2Style = content.h2 == 'font-serif'?'font-serif':'font-sans';
    let pStyle = content.p == 'font-serif'?'font-serif':'font-sans';

    let gapStyle = content.description && content.title != ''?' gapText':'';

    return(

        <div className={content.bg == 'true' ? "bgBox color" : "bgBox"}>

            <div className={orientation + gapStyle}>

                <h2 className={h2Style}>{content.title}</h2>
                <p className={pStyle} dangerouslySetInnerHTML={{__html:content.description}}></p>
                {content.more && content.linkMore == ''?'':<Link href={content.linkMore}><p className='text-blue-500'>{content.more}</p></Link>}

            </div>

        </div>

    );
}