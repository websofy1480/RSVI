export interface faq {
    _id?: string
    question: string,
    answer: string[]
};

export interface FaqProps {
    faqData: faq[]
}