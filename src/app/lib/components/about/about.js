import Link from 'next/link';
import Image from 'next/image';

import './about.css';
import fb from '@/app/lib/img/fb.png';
import inst from '@/app/lib/img/in.png';
import tg from '@/app/lib/img/tg.png';
import qr from '@/app/lib/img/qr.png';

export default function About(props){

    let content = props.data;

    return(
       
        <div className={content.bg == 'true' ? "bgBox color" : "bgBox"}>

            <div className='contentBox'>
            
                <div className="img-head-size"></div>

                <div className='iconBox'>

                    <div className='socialIcon'>


                        <Link href={content.fb} target='blank_'>
                            <Image
                            src={fb}
                            width='32'
                            height='32'
                            alt='facebook'
                            />
                        </Link>

                        <Link href={content.in} target='blank_'>
                            <Image
                            src={inst}
                            width='32'
                            height='32'
                            alt='instagram'
                            />
                        </Link>

                        <Link href={content.tg} target='blank_'>
                            <Image
                            src={tg}
                            width='32'
                            height='32'
                            alt='telegram'
                            />
                        </Link>

                        <Link href={content.qr} target='blank_'>
                            <Image
                            src={qr}
                            width='32'
                            height='32'
                            alt='qr-code'
                            />
                        </Link>


                    </div>

                
                        <Link href={content.linkAppointment} target='blank_' className='appointment'>
                            {content.appointment}
                        </Link>

                </div>

                <h2>Меня зовут Наталья Деревянская, я магистр психологии, кинезиолог, нейрокинезиолог и психотерапевтический кинезиолог.</h2> 
                <h2>Моя миссия — помогать людям находить гармонию между телом, разумом и эмоциями, снимая внутренние блоки и восстанавливая баланс.</h2>  
                
                <p>За годы практики я поняла, что тело хранит ответы на многие вопросы, с которыми человек сталкивается в жизни. Стресс, хронические напряжения, психосоматические проблемы — это сигналы, что внутри что-то нарушено. В своей работе я использую методы кинезиологии, которая рассматривает человека как биокомпьютер, чтобы понять, где именно "застрял" стресс — на физическом уровне, в энергетических телах или на глубине подсознания. С помощью специальных кинезиологических протоколов я подбираю наиболее эффективный способ работы с этим стрессом и помогаю клиенту восстановить внутренний баланс.</p>
                <p>Психологи часто направляют ко мне своих клиентов, когда традиционные методы уже не приносят результата. Я подхожу к каждой ситуации комплексно, уделяя внимание первопричинам проблемы, и применяю различные техники для достижения максимального эффекта.</p>
                
                <div className='sign'></div>

            </div>

        </div>

    )
}