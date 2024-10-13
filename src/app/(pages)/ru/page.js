import About from "@/app/lib/components/about/about";
import Blog from "@/app/lib/components/blog/blog";
import Faq from "@/app/lib/components/faq/Faq";
import Head from "@/app/lib/components/head/head";
import ImgText from "@/app/lib/components/img-text/imgtext";
import Slider from "@/app/lib/components/slider/slider";
import TextBlock from "@/app/lib/components/text-block/textblock";
import DATA from "@/app/lib/data/data";


export default function homeRu(){


    let data = new DATA();

    return(

        <div className="mainContainer">

            <About
            data={data.ru('main').pages[0].content[0]}
            />

            {/* <Head
            orientation = {data.xy}
            data={data.ru('main').pages[0].content[0]}
            /> */}

            {/* <TextBlock
            orientation = {data.xy}
            data={data.ru('main').pages[0].content[1]}
            /> */}

            {/* <TextBlock
            orientation = {data.xy}
            data={data.ru('main').pages[0].content[2]}
            /> */}

            {/* <Blog
            posts={data.ru('blog')}
            data={data.ru('main').pages[0].content[3]}
            /> */}

            {/* <Slider
            data={data.ru('main').pages[0].content[4]}
            /> */}

            {/* <Faq
            data={data.ru('main').pages[0].content[5]}
            /> */}

        </div>

    )

}