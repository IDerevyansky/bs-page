import Link from 'next/link';
import './textblock.css';

export default function TextBlock(props){

    let content = props.data;
    let orientation = props.orientation(content.orientation);

    return(

        <div className={content.bg == 'true' ? "bgBox color" : "bgBox"}>

            <div className={orientation + ' gapText'}>

                <h2>{content.title}</h2>
                <p dangerouslySetInnerHTML={{__html:content.description}}></p>
                {content.more && content.linkMore == ''?'':<Link href={content.linkMore}><p className='text-blue-500'>{content.more}</p></Link>}

            </div>

        </div>

    );
}