import Blog from "@/app/lib/components/blog/blog";
import Head from "@/app/lib/components/head/head";
import ImgText from "@/app/lib/components/img-text/imgtext";
import TextBlock from "@/app/lib/components/text-block/textblock";
import data from "@/app/lib/data/data";


export default function homeRu(){


    //function orientation content default|reverse|left|right|center
    let xy = (q)=>{
    
        switch (q) {
            case 'center':
            return 'contentBox center';
            break;
    
            case 'right':
            return 'contentBox right';    
            break;
    
            case 'left':
            return 'contentBox left';  
            break;
    
            case 'reverse':
            return 'contentBox reverse';     
            break;
        
            default:
            return 'contentBox default';
            break;
        }

    }

  

    return(
        <div className="mainContainer">

            <Head
            orientation = {xy}
            data={data('ru').pages[0].content[0]}
            />

            <TextBlock
            orientation = {xy}
            data={data('ru').pages[0].content[1]}
            />

            <ImgText
            orientation = {xy}
            data={data('ru').pages[0].content[2]}
            />

            <TextBlock
            orientation = {xy}
            data={data('ru').pages[0].content[3]}
            />
            
            <ImgText
            orientation = {xy}
            data={data('ru').pages[0].content[4]}
            />

            <Blog
            data={data('ru').pages[0].content[5]}
            />

        </div>
    )

}