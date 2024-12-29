import styles from './toppage.module.css'
import Image from "next/image";
export default function TopPage(){
    return (
        <section className={`${styles.sectionTop} container`}>
        <h2 className={styles.tituloInicial}>Exclusivo, Curso online.</h2>
            <h1 className={styles.subTituloInicial}>
                CAPACITAÇÃO USO BISTURI ELÉTRICO NA ODONTOLOGIA GENGIVOPLASTIA E OUTRAS APLICAÇÕES CLÍNICAS
            </h1>

            <div className={styles.grupoTopo}>

                <div className={styles.grupo1}>

                    <h2>
                        COLEGA DENTISTA!
                    </h2>
                    <p>
                        Eleve sua Prática Clínica Odontológica com o Curso Online “Gengivoplastia e Outras Aplicações
                        Clínicas do Bisturi Elétrico na Prática Clínica Odontológica ”.
                    </p>

                    <p>
                        Este Curso Prático e Inovador oferece a oportunidade de aprimorar suas habilidades, adquirir
                        novos conhecimentos e alcançar melhores resultados Profissionais e Financeiros.
                    </p>

                    <p>
                        Aprenda a utilizar o Bisturi Elétrico de maneira eficaz e segura, e transforme a experiência dos
                        seus pacientes. Torne-se um Dentista Diferenciado, destaque-se no Mercado Odontológico.
                        Inscreva-se agora e dê um salto em Sua Carreira
                    </p>

                </div>

                <div className={styles.grupo2}>

                    <h2>
                        OFERTA <span>EXLUSIVA</span>
                    </h2>

                    <div className={styles.Preco}>
                        <h2 className={styles.valor}>497</h2>
                        <a href="#" className={styles.btnPreco}> Garantir minha vaga!</a>
                        <Image src="/img/compraSegura.png" alt="" width={300} height={35}/>
                    </div>


                </div>
            </div>
        </section>
    )
}