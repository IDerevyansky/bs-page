import Head from '@/app/lib/components/head/head';
import TextBlock from '@/app/lib/components/text-block/textblock';

import DATA from '@/app/lib/data/data';

import './about.css';

export default function about(){

    let data = new DATA();
    console.log(data.ru('main').pages[1].content);

return(
    <div className="mainContainer">
    
        <Head
        orientation = {data.xy}
        data={data.ru('main').pages[1].content[0]}
        />

        <TextBlock
        orientation = {data.xy}
        data={data.ru('main').pages[1].content[1]}
        />

        <TextBlock
        orientation = {data.xy}
        data={data.ru('main').pages[1].content[2]}
        />

    </div>

);

}