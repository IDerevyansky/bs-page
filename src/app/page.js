import Image from "next/image";
import Tree from "@/app/lib/img/tree.svg"
import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <Image
        src={Tree}
        width={100}
        height={100}
      />
      <div className="first">
        <h1>Natalia<br/> Derevianskaia</h1>
        <h2>Kinesiologist</h2>
      </div>
      <div className="second">

      <p><Link href="tel:+18182987426" target="blank_">+1 818 298 74 26</Link></p><br/>
      <p className="color"><Link target="blank_" href="https://wa.me/18182987426?text=Test%20with%20bussines%20card">WhatsApp</Link></p>
      <p className="color"><Link target="blank_" href="https://t.me/NataDerevyanskaya">Telegram</Link></p>
      
      </div>

    </main>
  );
}