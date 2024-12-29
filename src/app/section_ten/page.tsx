import styles from './ten.module.css'
import Image from "next/image";

export default function TenPage() {
    return (
        <section className={`${styles.SectionTen} container`}>
            <div className={styles.GridTen}>
                <div>
                    <h2 className={styles.TitutloTen}>
                        COM QUEM VOCÊ VAI APRENDER
                    </h2>
                    <p className={styles.NomeDr}>
                        Dra. Leila Andreolla
                    </p>

                    <p className={styles.descriTen}>
                        CIRURGIÃ DENTISTA 26 ANOS DE PRÁTICA CLÍNICA ODONTOLÓGICA ESPECIALISTA EM PRÓTESE DENTÁRIA,
                        DENTÍSTICA RESTAURADORA, ORTODONTIA E HOF PROPIETÁRIA CLÍNICAS COE <br/><br/>
                        @coe_epf
                        <br/><br/>

                    </p>

                    <p className={`${styles.descriTen} ${styles.descItalico}`}>
                        “EU TRANSFORMEI MINHA PRÁTICA CLÍNICA COM O USO DO BISTURI ELÉTRICO E QUERO QUE VOCÊ COLEGA,
                        TRANSFORME A SUA TAMBÉM!”
                    </p>
                </div>
                <div>
                <Image src="/img/dra.png" alt="" width={335} height={528} />
                </div>
            </div>

        </section>
    )
}