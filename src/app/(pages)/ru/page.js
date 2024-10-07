import Head from "@/app/lib/components/head/head";
import ImgText from "@/app/lib/components/img-text/imgtext";
import TextBlock from "@/app/lib/components/text-block/textblock";

import DATA from '@/app/lib/data/data-ru.json';

export default function homeRu(){

    // console.log(DATA.pages[0].content[0]);

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
            data={DATA.pages[0].content[0]}
            />

            <TextBlock
            orientation = {xy}
            data={DATA.pages[0].content[1]}
            />

            <ImgText
            orientation = {xy}
            data={DATA.pages[0].content[2]}
            />
            
            <ImgText
            orientation = {xy}
            data={DATA.pages[0].content[3]}
            />

        </div>
    )

}