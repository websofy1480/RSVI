import React from 'react'

export const GoogleMap: React.FC = () => {
    return (
        <div className="container mb-10">
            <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7255.8739679043565!2d80.93265296014467!3d26.857825711100666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdc5b688c02d%3A0x890ee378bcbb5611!2sMoti%20Mahal%20lawn%20Rana%20Pratap%20Marg%202!5e0!3m2!1sen!2sin!4v1776928877814!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    loading="lazy"
                    className="w-full"
                ></iframe>
            </div>
        </div>
    )
}
