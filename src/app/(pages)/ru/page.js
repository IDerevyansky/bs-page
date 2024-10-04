import Head from "@/app/lib/components/head/head";
import ImgText from "@/app/lib/components/img-text/imgtext";
import TextBlock from "@/app/lib/components/text-block/textblock";

import DATA from '@/app/lib/data/data-ru.json';

export default function homeRu(){

    // console.log(DATA.pages[0].content[0]);

    return(
        <div className="mainContainer">

            <Head
            data={DATA.pages[0].content[0]}
            />

            <TextBlock
            data={DATA.pages[0].content[1]}
            />

            <ImgText
            data={DATA.pages[0].content[2]}
            />
            
            <ImgText
            data={DATA.pages[0].content[3]}
            />

        </div>
    )

}