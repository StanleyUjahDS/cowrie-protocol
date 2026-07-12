import "./Faq.css";

import * as Accordion from "@radix-ui/react-accordion";

import { ChevronDown } from "lucide-react";

import SectionTitle from "../../common/ui/SectionTitle/SectionTitle";

import faqItems from "../../../data/faqData";


function FAQ() {


    return (

        <section className="faq-section">


            <SectionTitle

                title="Frequently Asked Questions"

                description="
                Everything you need to know about Cowrie Protocol,
                our technology, ecosystem, and vision.
                "

                align="center"

            />




            <Accordion.Root

                type="single"

                collapsible

                className="faq-container"

            >



                {
                    faqItems.map((item,index)=>(


                        <Accordion.Item

                            key={index}

                            value={`faq-${index}`}

                            className="faq-item"

                        >



                            <Accordion.Header>


                                <Accordion.Trigger

                                    className="faq-question"

                                >

                                    <span>

                                        {item.question}

                                    </span>



                                    <ChevronDown

                                        size={22}

                                        className="faq-chevron"

                                    />


                                </Accordion.Trigger>


                            </Accordion.Header>





                            <Accordion.Content

                                className="faq-answer"

                            >

                                <p>

                                    {item.answer}

                                </p>


                            </Accordion.Content>




                        </Accordion.Item>


                    ))

                }



            </Accordion.Root>



        </section>

    );


}


export default FAQ;