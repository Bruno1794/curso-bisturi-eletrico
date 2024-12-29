import styles from './six.module.css'
import Image from "next/image";
export default function SixPage() {
    return (
        <section className={`${styles.sectionSix} container`} >
            <p className={styles.Vantagens}>VANTAGENS</p>
            <p className={styles.txtSix}>
                CADA VEZ MAIS UTILIZADO, O BISTURI ELÉTRICO FACILITA PROCEDIMENTOS CIRÚRGICOS .
                O EQUIPAMENTO É UM DIFERENCIAL PARA OS DENTISTAS
            </p>

            <ul>
                <li>
                    <Image src="/img/seta.png" alt="0" width="18" height="18" />
                    Corta/Coagula/Cauteriza
                </li>

                <li>
                    <Image src="/img/seta.png" alt="0" width="18" height="18" />
                    Compacto e simples de manusear, Eletrodos que acessam todas as regiões da boca
                </li>

                <li>
                    <Image src="/img/seta.png" alt="0" width="18" height="18" />
                    Hemostase - Capacidade de Coagulação no momento da Incisão, fornecendo um Campo Cirúrgico limpo, sem
                    sangramentos, além de inibira passagem de Microorganismos para a Corrente ,consequentemente
                    oferecendo uma Recuperação Rápida e Melhor Recuperação
                    para o Paciente
                </li>

                <li>
                    <Image src="/img/seta.png" alt="0" width="18" height="18" />
                    Além de ser muito utilizado para Gengivoplastia ( Aumento de Coroa Clínica,Hiperplasia Gengival,
                    Sorriso Gengival ) , pode ser utilizado em outras Práticas Clínicas como:
               </li>
            </ul>
            <div className={styles.itens}>
                <span>FRENECTOMIAS (Labial/Lingual)</span>
                <span>CUNHA DISTAL</span>
                <span>AFASTAMENTO GENGIVAL PARA MOLDAGENS</span>
                <span>BICHECTOMIA</span>
                <span>INCISÃO PARA EXPOSIÇÃO DE DENTE INCLUSO</span>
                <span>CAPUZ DE SISO</span>
                <span>ENDODONTIA (Dificuldade de acesso aos Canais Radiculares</span>
                <span>ORTODONTIA (Hiperplasias Gengivais )</span>
                <span>REMOÇÃO DE HIPERPLASIAS ( Lesões Hiperplásicas)</span>
                <span>REMOÇÃO DE PÓLIPO PULPAR</span>
                <span>REMOÇÃO DE LESÕES PARA EXAME ANATOMOPATOLÓGICO</span>
                <span>ULECTOMIA...</span>
            </div>
        </section>
    );
}