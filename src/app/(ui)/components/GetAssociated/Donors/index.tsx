import React from 'react'
import { UnderDevelopment } from '../../Common/UnderDevelopment'

export const Donors = () => {
    return (
        <section>
            <div className="container">
                <div className="mb-12 text-center"
                    data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase text-primary">
                        Our{" "}
                        <span className="text-secondary">Donors</span>
                    </h1>
                    <p className="mt-5 sm:text-19 text-secondary sm:text-center text-justify m-auto">
                        <span className="font-semibold text-primary">“Let the blind hold the torch” - </span>
                        empowering lives through structured rehabilitation and support.
                    </p>
                </div>
                <UnderDevelopment />
            </div>
        </section>
    )
}
