import styles from './two.module.css'
import Image from "next/image";

export default function TwoPage() {
    return (
        <section className={`${styles.sectionTwo}`}>
            <div className={`${styles.sectionConteudo} container`}>
                <div className={styles.conteudo}>
                    <h2 className={styles.titulo}>Aprendizado Prático e Eficiente</h2>

                    <p>
                        Nossa capacitação oferece um treinamento prático no uso do bisturi elétrico, permitindo que você
                        aprenda
                        as técnicas essenciais para aplicar em diversos procedimentos clínicos.
                    </p>

                    <p>
                        Ao se capacitar conosco, você não apenas dominará o bisturi elétrico, mas também aprimorará suas
                        habilidades em gengivoplastia e outras aplicações odontológicas, tornando-se um profissional
                        mais
                        completo e valorizado no mercado.
                    </p>
                </div>

                <div className={styles.conteudoImg}>
                    <Image src="/img/imgsectionTwo.png" alt="" width={500} height={285}/>
                </div>



            </div>
        </section>
    )
}