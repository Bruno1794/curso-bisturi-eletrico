import styles from './five.module.css'
import stylesOne from '@/app/section_one/toppage.module.css'
import Image from "next/image";

export default function PageFive() {
    return (
        <section className={`${styles.sectionFive} container`}>

            <div className={styles.fiveGrid}>

                <div>
                    <h3>Invista no Seu Futuro Profissional</h3>
                    <ul>

                        <li>
                            <Image src="/img/modulo.png" alt="" width={28} height={28}/>
                            22 MÓDULOS COM MUITO CONTEÚDO
                        </li>

                        <li>
                            <Image src="/img/modulo.png" alt="" width={28} height={28}/>
                            MAIS DE 100 CASOS CLÍNICOS - FOTOS E VÍDEOS
                        </li>

                        <li>
                            <Image src="/img/modulo.png" alt="" width={28} height={28}/>
                            VÁRIOS CASOS CLÍNICOS COMPLETOS EM
                            PACIENTE - PASSO A PASSO
                        </li>

                        <li>
                            <Image src="/img/modulo.png" alt="" width={28} height={28}/>
                            ACESSO AO GRUPO DE ALUNOS
                        </li>

                    </ul>
                </div>

                <div className={stylesOne.grupo2}>
                    <h2>
                        OFERTA <span>EXLUSIVA</span>
                    </h2>

                    <div className={stylesOne.Preco}>
                        <h2 className={stylesOne.valor}>497</h2>
                        <a href="#" className={stylesOne.btnPreco}> Garantir minha vaga!</a>
                        <Image src="/img/compraSegura.png" alt="" width={300} height={35}/>
                    </div>
                </div>
            </div>

        </section>
    )
}