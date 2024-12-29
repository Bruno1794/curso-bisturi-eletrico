import styles from './eight.module.css'
import Image from "next/image";

export default function EightPage() {
    return (
        <section className={`${styles.SectionEight} container`}>
            <h2 className={styles.TituloEight}>PARA QUEM É ESSE CURSO</h2>

            <ul>
                <li>
                    <Image src="/img/chek.png" alt="" width={28} height={28}/>
                    PARA TODOS OS DENTISTAS QUE TRABALHAM COM ODONTOLOGIA ESTÉTICA (LÂMINADOS CERÂMICOS/RESINAS
                    COMPOSTAS) E QUEREM REALIZAR A GENGIVOPLASTIA NOS SEUS PACIENTES,SEM NECESSITAR DE ENCAMINHAMENTOS
                </li>

                <li>
                    <Image src="/img/chek.png" alt="" width={28} height={28}/>
                    PARA TODOS OS DENTISTAS QUE QUEREM MELHORAR A FINALIZAÇÃO DE SEUS CASOS E SE TORNAR REFÊRENCIA
                    (PORQUE IRÃO APRENDER ANÁLISE DENTO/GENGIVAL ,DENTO/LABIAL...)
                </li>

                <li>
                    <Image src="/img/chek.png" alt="" width={28} height={28}/>
                    PARA TODOS OS DENTISTAS QUE NUNCA REALIZARAM GENGIVOPLASTIA CONVENCIONAL ,MAS QUEREM APRENDER A
                    REALIZAR COM BISTURI ELÉTRICO
                </li>

                <li>
                    <Image src="/img/chek.png" alt="" width={28} height={28}/>
                    PARA TODOS OS DENTISTAS DE TODAS AS ÁREAS DA ODONTOLOGIA, DENTISTAS CLÍNICOS E DE TODAS AS
                    ESPECIALIDADES
                </li>

                <li>
                    <Image src="/img/chek.png" alt="" width={28} height={28}/>
                    PARA DENTISTAS QUE QUEREM AUMENTAR O FLUXO DE PACIENTES E SEUS RENDIMENTOS FINANCEIROS - POR SER UM
                    PROCEDIMENTO TOTALMENTE ACEITO E DE GRANDE PROCURA PELOS PACIENTES (MINIMAMENTE INVASIVO E COM PÓS
                    OPERATÓRIO SUPER TRANQUILO)
                </li>

                <li>
                    <Image src="/img/chek.png" alt="" width={28} height={28}/>
                    PARA TODOS OS DENTISTAS QUE NUNCA TIVERM CONTATO COM BISTURI ELÉRICO E DESEJAM SE CAPACITAR E
                    TRANSFORMAR SUA PRÁTICA CLÍNICA COM EXCELÊNCIA, SE TORNANDO REFERÊNCIA
                </li>

            </ul>

            <div className={styles.gridEight}>
                <div className={styles.GridLayout}>
                    <Image src="/img/certificado.png" alt="" width={68} height={68}/>
                    <p>Certificado de Conclusão</p>
                </div>
                <div className={styles.GridLayout}>
                    <Image src="/img/cartao.png" alt="" width={68} height={68}/>
                    <p>Compra Segura</p>
                </div>
                <div className={styles.GridLayout}>
                    <Image src="/img/garantia.png" alt="" width={68} height={68}/>
                    <p>7 Dias de Garantia</p>
                </div>
                <div className={styles.GridLayout}>
                    <Image src="/img/acesso.png" alt="" width={68} height={68}/>
                    <p>1 Ano de Acesso</p>
                </div>
                <div className={styles.GridLayout}>
                    <Image src="/img/suporte.png" alt="" width={68} height={68}/>
                    <p>Suporte Vip</p>
                </div>
                <div className={styles.GridLayout}>
                    <Image src="/img/dispositivos.png" alt="" width={68} height={68}/>
                    <p>Multi Disposivos</p>
                </div>


            </div>

        </section>
    )
}