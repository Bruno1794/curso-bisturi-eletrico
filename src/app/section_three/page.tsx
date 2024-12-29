import styles from './three.module.css'
import Image from "next/image";

export default function ThreePage() {
    return (
        <section className="container">
            <div className={styles.gridThree}>
                <div>
                    <h2>O QUEVOCÊ VAI APRENDER</h2>

                    <ul>
                        <li>
                            <Image src="/img/iconeCkek 1.png" alt="" width={22} height={22}/>
                            INTRODUÇÃO - CONCEITOS BÁSICOS (ANATOMIA DO PERIODONTO/PROPORÇÃO ÁUREA/ZÊNITE GENGIVAL)
                        </li>

                        <li>
                            <Image src="/img/iconeCkek 1.png" alt="" width={22} height={22}/>
                            COMO NÃO TER RECIDIVA, COMO NÃO INVADIR ESPAÇO BIOLÓGICO, CONTRA INDICAÇÕES
                        </li>

                        <li>
                            <Image src="/img/iconeCkek 1.png" alt="" width={22} height={22}/>
                            COMO O USO DO BISTURI ELÉTRICO PODE TRANSFORMAR SUA PRÁTICA CLÍNICA
                        </li>

                        <li>
                            <Image src="/img/iconeCkek 1.png" alt="" width={22} height={22}/>
                            INTRODUÇÃO AO USO DO BISTURI ELÉTRICO NA GENGIVOPLASTIA
                        </li>


                        <li>
                            <Image src="/img/iconeCkek 1.png" alt="" width={22} height={22}/>
                            ENTENDENDO OS CONCEITOS BÁSICOS PARA UMA EXCELENTE PRÁTICA CLINICA
                        </li>

                        <li>
                            <Image src="/img/iconeCkek 1.png" alt="" width={22} height={22}/>
                            CONHECENDO O BISTURI ELÉTRICO
                        </li>

                        <li>
                            <Image src="/img/iconeCkek 1.png" alt="" width={22} height={22}/>
                            ESTUDOS DE CASOS - MELHORES PRÁTICAS E RESULTADOS REAIS OBTIDOS COM
                            O USO DO BISTURI ELÉTRICO
                        </li>

                        <li>
                            <Image src="/img/iconeCkek 1.png" alt="" width={22} height={22}/>
                            ESTUDOS DE CASOS - VÁRIOS VÍDEOS- (COMO USAR/COMO NÃO USAR)
                        </li>

                        <li>
                            <Image src="/img/iconeCkek 1.png" alt="" width={22} height={22}/>
                            OUTRAS APLICAÇÕES DO BISTURI ELÉTRICO NA PRÁTICA CLÍNICA ODONTOLÓGICA
                        </li>

                        <li>
                            <Image src="/img/iconeCkek 1.png" alt="" width={22} height={22}/>
                            MODALIDADES DE ATENDIMENTO E VALORES DE PROCEDIMENTOS
                        </li>

                        <li>
                            <Image src="/img/iconeCkek 1.png" alt="" width={22} height={22}/>
                            PRESCRIÇÃO MEDICAMENTOSA - PRÉ/PÓS OPERATÓRIO
                        </li>
                    </ul>

                </div>
                <div>
                    <Image src="/img/boca.png" alt="" width={500} height={568} className={styles.ThreeImg}/>
                </div>

            </div>
            <div className={styles.ThreeBtn}>
                <a href="" className="btnCta">Quero agora!</a>

            </div>
        </section>
    )

}
