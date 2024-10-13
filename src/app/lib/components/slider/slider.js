"use client"
import { useEffect } from 'react';
import './slider.css';
import LeftIcon from '@/app/lib/img/left.svg';
import RightIcon from '@/app/lib/img/right.svg';
import Image from 'next/image';

export default function Slider(props){

    let content = props.data;

    useEffect(()=>{

        let slider = document.getElementsByClassName('slider');
  
        // let forward = document.getElementsByClassName('btn');
        // let backward = document.getElementById('btn');
        let btn = document.getElementsByClassName('btnSlider');
        let forward = btn[1];
        let backward = btn[0];



        let move = (q) => {

            let leftSide = slider[0].scrollLeft;
            let rightSide = slider[0].scrollWidth;

            switch (q) {
                case 'forward':

                    slider[0].scroll({
                        // top: 100,
                        left: leftSide + 524,
                        behavior: "smooth",
                    })
       
                break;

                case 'backward':

                    slider[0].scroll({
                        // top: 100,
                        left: leftSide - 524,
                        behavior: "smooth",
                    })
                    
                break;
            }



            
        }

        forward.addEventListener('click', ()=>( move('forward') ));
        backward.addEventListener('click', ()=>( move('backward') ));

    })

    

    return(
       

        <div className={content.bg == 'true' ? "bgBox color" : "bgBox"}>

            <div className='contentBox'>

                <div className='sliderTitle'>
                    <h2>{content.title}</h2>
                    <div className="BlockBtn">
                        <div className='btnSlider'>
                            <Image
                            src={LeftIcon}
                            width='24'
                            height='24'
                            alt='icon left'
                            />
                        </div>
                        <div className='btnSlider'>
                            <Image
                            src={RightIcon}
                            width='24'
                            height='24'
                            alt='icon right'
                            />
                        </div>
                    </div>

                </div>

                <div className="slider">

                    {content.content.map((item, key)=>{

                        return <div key={key} className="slide"><p className="line-clamp-none">{item}</p></div>       

                    })}
                     
                   

                </div>

            </div>

       </div>     

    )
}