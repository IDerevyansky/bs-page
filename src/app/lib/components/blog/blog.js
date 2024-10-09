import Link from 'next/link';
import './blog.css';

export default function Blog(props){

    let content = props.data;

    console.log(dataBlog.blog);

    return(

        <div className={content.bg == 'true' ? "bgBox color" : "bgBox"}>

            <div className='contentBox'>

                <div className='blogTitle'>
                    <h2>{content.title}</h2>
                </div>

                <div className='BlogItems'>

                    <Link href='ru/#' className='eachItem'>
                        <h3 className='line-clamp-2'>Lorem ipsum dolor sit amet consectetur.</h3>
                        <p className='line-clamp-[7]'>Lorem ipsum dolor sit amet consectetur. Phasellus phasellus egestas id praesent egestas volutpat. Tristique massa id gravida dictum hendrerit aliquam volutpat amet consectetur. Id aenean bibendum donec placerat purus. Ultrices nibh proin dis venenatis.</p>
                    </Link>
                    <Link href='ru/#' className='eachItem'>
                        <h3 className='line-clamp-2'>Lorem ipsum dolor sit amet consectetur sit amet consectetur.</h3>
                        <p className='line-clamp-[7]'>Lorem ipsum dolor sit amet consectetur. Phasellus phasellus egestas id praesent egestas volutpat. </p>
                    </Link>
                    <Link href='ru/#' className='eachItem'>
                        <h3 className='line-clamp-2'>Lorem ipsum dolor sit amet consectetur.</h3>
                        <p className='line-clamp-[7]'>Lorem ipsum dolor sit amet consectetur. Phasellus phasellus egestas id praesent egestas volutpat. Tristique massa id gravida dictum hendrerit aliquam volutpat amet consectetur. Id aenean bibendum donec placerat purus. Ultrices nibh proin dis venenatis.Id aenean bibendum donec placerat purus. Ultrices nibh proin dis venenatis.Id aenean bibendum donec placerat purus. Ultrices nibh proin dis venenatis.Id aenean bibendum donec placerat purus. Ultrices nibh proin dis venenatis.</p>
                    </Link>

                </div>

                {content.more && content.linkMore == ''?'':<Link href={content.linkMore}><p className='text-blue-500 mt-6'>{content.more}</p></Link>}

                
            </div>

        </div>

    )
}