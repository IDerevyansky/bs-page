import Link from 'next/link';
import './textblock.css';

export default function TextBlock(props){

    let content = props.data;

    return(
        <div className="bgBox">

            <div className='contentBox gapText'>

                <h2>{content.title}</h2>
                <p dangerouslySetInnerHTML={{__html:content.description}}></p>
                {content.more && content.linkMore == ''?'':<Link href={content.linkMore}><p className='text-blue-500'>{content.more}</p></Link>}

            </div>
            
        </div>

    );
}