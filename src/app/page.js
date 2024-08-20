import Image from "next/image";
import Tree from "@/app/lib/img/tree.svg"
import whatsApp from "@/app/lib/img/whatsApp.svg"
import telegram from "@/app/lib/img/telegram.svg"
import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <Image
        alt="Tree"
        src={Tree}
        width={100}
        height={100}
      />
      <div className="first">
        <h1>Natalia<br/> Derevianskaia</h1>
        <h2>Kinesiologist</h2>
      </div>
      <div className="second">

        <p><Link href="tel:+18182987426" target="blank_" >+1 818 298 74 26</Link></p>

          <div className="connect">
            <Link className="btn" href="tel:+18182987426" target="blank_">Call me</Link>
            <p className="color">or</p>

            <p className="color">
              
              <Link target="blank_" href="https://wa.me/18182987426?text=Здравствуйте%20Наталья,%20я%20хочу%20записаться%20к%20вам%20на%20прием.">
              
                <Image
                  alt="whatsApp"
                  src={whatsApp}
                  width={30}
                  height={30}
                />

              </Link>

            </p>

            <p className="color">
              <Link target="blank_" href="https://t.me/kinesiohub">

              <Image
                  alt="telegram"
                  src={telegram}
                  width={30}
                  height={30}
              />

              </Link>
            </p>

          </div>

      </div>

    </main>
  );
}