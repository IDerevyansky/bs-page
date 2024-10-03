import Link from 'next/link';
import './textblock.css';

export default function TextBlock(){
    return(
        <div className='contentBox gapText'>

        <h2>Lorem ipsum dolor sit amet consectet</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Consequat amet tristique est id egestas etiam mauris elementum urna. Pharetra ut vitae purus arcu odio habitant fermentum. Pulvinar at pharetra ipsum adipiscing fringilla ultricies. Tempor magnis enim nec eu potenti. Est dolor etiam consectetur sed maecenas ut sagittis egestas dolor. Magna dui etiam feugiat eget sed diam parturient egestas ac. Lorem ipsum dolor sit amet consectetur. Consequat amet tristique est id egestas etiam mauris elementum urna. Pharetra ut vitae purus arcu odio habitant fermentum. Pulvinar at pharetra ipsum adipiscing fringilla ultricies. Tempor magnis enim nec eu potenti. Est dolor etiam consectetur sed maecenas ut sagittis egestas dolor. Magna dui etiam feugiat eget sed diam parturient egestas ac.</p>
        <Link href='/ru/about'><p className='text-blue-500'>Подробнее...</p></Link>

        </div>
    );
}