import Link from 'next/link';
import './blog.css';

export default function Blog(props){

    let content = props.data;
    let posts = props.posts;

    return(

        <div className={content.bg == 'true' ? "bgBox color" : "bgBox"}>

            <div className='contentBox'>

                <div className='blogTitle'>
                    <h2>{content.title}</h2>
                </div>

                <div className='BlogItems'>

                    <Link href='ru/blog/#' className='eachItem'>
                        <h3 className='line-clamp-2'>{posts[0].title}</h3>
                        <p className='line-clamp-[7]'>{posts[0].description}</p>
                    </Link>
                    <Link href='ru/blog/#' className='eachItem'>
                        <h3 className='line-clamp-2'>{posts[1].title}</h3>
                        <p className='line-clamp-[7]'>{posts[1].description}</p>
                    </Link>
                    <Link href='ru/blog/#' className='eachItem'>
                        <h3 className='line-clamp-2'>{posts[2].title}</h3>
                        <p className='line-clamp-[7]'>{posts[2].description}</p>
                    </Link>

                </div>

                {content.more && content.linkMore == ''?'':<Link href={content.linkMore}><p className='text-blue-500 mt-6'>{content.more}</p></Link>}

                
            </div>

        </div>

    )
}