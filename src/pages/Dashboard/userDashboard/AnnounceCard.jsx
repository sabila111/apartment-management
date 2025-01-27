import React from 'react';

const AnnounceCard = ({announcements}) => {
    const {title,description} = announcements
   
    return (
        <div
        className="hero shadow-xl h-60 "
        style={{
          backgroundImage: "url(https://i.ibb.co.com/VCbRCBq/realistic-style-megaphone-with-blank-bubble-chat-copy-space-illustration-on-purple-banner-background.jpg)",
        }}>
        <div className="hero-content ">
          <div className="text-right">
            <h1 className="mb-5 text-xl font-bold">{title}</h1>
            <p className="mb-5 ">
              {description}
            </p>
            
          </div>
        </div>
      </div>
    );
};

export default AnnounceCard;