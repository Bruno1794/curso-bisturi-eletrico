import styles from './four.module.css'

export default function FourPage() {
    return (
        <section className="container">
            <h2 className={styles.TextInfo}>
                “ESTE CURSO ONLINE, TRÁZ TODOS OS PASSOS DE FORMA PRÁTICA E OBJETIVA ,PARA VOCÊ APRENDER E DOMINAR TODAS
                AS APLICAÇÕES CLÍNICAS DO BISTURI ELÉTRICO NA ODONTOLOGIA”
            </h2>

            <h2 className={styles.TituloFour}>BÔNUS EXCLUSIVOS</h2>

            <div className={styles.gridFour}>
                <div className={styles.gridFour01}>
                    <h3>Bônus I</h3>
                    <p>
                        CASO CLÍNICO COMPLETO EM PACIENTE
                        PASSO A PASSO AUMENTO DE COROA CLÍNICA (15 AO 25)
                    </p>
                </div>
                <div className={styles.gridFour01}>
                    <h3>Bônus II</h3>
                    <p>
                        CASO CLÍNICO EM PACIENTE -
                        PASSO A PASSO - GENGIVOPLASTIA - SORRISO GENGIVAL
                    </p>

                </div>
                <div className={styles.gridFour01}>
                    <h3>Bônus III</h3>
                    <p>
                        CASO CLÍNICO PASSO A PASSO EM PACIENTE SORRISO GENGIVAL
                    </p>
                </div>
                <div className={styles.gridFour01}>
                    <h3>Bônus IV</h3>
                    <p>
                        HIPERPLASIAS GENGIVAIS
                    </p>
                </div>
                <div className={styles.gridFour01}>
                    <h3>Bônus V</h3>
                    <p>
                        AUMENTO DE COROA CLÍNICA QDO JÁ EXISTEM TRATAMENTOS RESTAURADORES
                        (LENTES, FACETAS...)
                    </p>
                </div>
                <div className={styles.gridFour01}>
                    <h3>Bônus VI</h3>
                    <p>
                        CONTATO FORNECEDOR E SUPER CUPOM
                        DE DESCONTO PARA ADQUIRIR SEU
                        BISTURI ELÉTRICO

                    </p>

                </div>


            </div>

        </section>
    )

}