import React from 'react'

export const GoogleMap: React.FC = () => {
    return (
        <div className="container mb-10">
            <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3559.725241992749!2d80.950946!3d26.84869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdd302534c0d%3A0x6618eecac0f2ad60!2sRehabilitation%20Society%20of%20the%20Visually%20Impaired!5e0!3m2!1sen!2sin!4v1771320152894!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    loading="lazy"
                    className="w-full"
                ></iframe>
            </div>
        </div>
    )
}
