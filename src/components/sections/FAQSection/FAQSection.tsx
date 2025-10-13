import s from './FAQSection.module.css'
import {FAQSectionConfig} from "@/config/data/FAQSection";
import FAQItem from "@/components/layouts/FAQItem/FAQItem";
import StarIcon from "@/components/icons/StarIcon/StarIcon";

export default function FAQSection() {
    return (
        <>
            <section className={s.faq_section} id={"faq"}>
                <div className={s.title}>
                    <h3>
                        {FAQSectionConfig.title}
                        <StarIcon/>
                    </h3>

                </div>
                <ul className={s.faq_container}>
                    {FAQSectionConfig.faq.map((faq, index) => {
                        return (
                            <FAQItem
                                answer={faq.answer}
                                key={index}
                                question={faq.question}

                                index={index}/>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}