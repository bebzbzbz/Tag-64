import { useState } from "react";

type FAQItemProps = {
    question: string;
    answer: string;
}

function FAQItem(props: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <li onClick={() => setIsOpen(!isOpen)
        }>
            <div>
                <h4>{props.question}</h4>
                <span>+</span>
            </div>
            {isOpen ? <p>{props.answer}</p> : ""}
        </li>
    )
}

export default FAQItem;