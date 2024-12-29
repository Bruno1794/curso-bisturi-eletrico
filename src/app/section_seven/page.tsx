import styles from './seven.module.css'

export default function SevenPage() {
    return (
        <section className={`${styles.SectionSeven} `}>

            <div className={`${styles.SevenConteudo} container`}>
                <h1 className={styles.TituloSeven}>CURSO <span>INÉDITO</span></h1>
                <p>
                    ESSE CURSO VISA CAPACITAR OS DENTISTAS A UTILIZAREM O BISTURI ELÉTRICO NA ODONTOLOGIA, ATRAVÉS DE
                    CONCEITOS TEÓRICOS E CIENTÍFICOS. CASOS CLÍNICOS, PASSO A PASSO DO PROCEDIMENTO EM PACIENTES, ALÉM
                    DE TODAS AS INFORMAÇÕES SOBRE O EQUIPAMENTO (BISTURI ELÉTRICO) , COM SEGURANÇA E SEM
                    INTERCORRÊNCIAS.
                </p>
                <a href="#" className={styles.btnSeven}> Quero Agora!</a>

            </div>
        </section>
    )
}