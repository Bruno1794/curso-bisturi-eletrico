import styles from './eleven.module.css'
import Image from "next/image";
export default function PageEleven(){
    return (
        <section className={styles.ElevenSction}>
            <div className={`${styles.ElevenConteudo} container`}>
                <h3>OFERTA EXCLUSIVA</h3>
                <div>
                    <h2 className={styles.precoElevel}>497</h2>
                </div>
                <a href="#">Por tempo Limitado - Acesse aqui!</a>

                <Image src="/img/pg.png" alt="" width={500} height={100} />

            </div>

        </section>
    );
}