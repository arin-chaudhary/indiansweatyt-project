import React from "react";
import "../App.css";

export default function Cards() {
  const videos = [
    {
      id: 1,
      title: "Itz easy for him",
      description:
        "In this video, he is showing how easy for him to win $300 in bedwars king.",
      videoId: "Twcy3C4ZApo",
    },
    {
      id: 2,
      title: "Releasing his own Pack",
      description:
        "In this video, he is releasing his own Texture pack 16x minecraft..",
      videoId: "zDY7hfjZsOM",
    },
    {
      id: 3,
      title: "QnA with Indian Sweet",
      description:
        "In this video, we will be answering some questions about Indian sweets.",
      videoId: "BwxpA_Vz-XU",
    },
  ];

  return (
    <>
      <div className="quote-container">
        <h2 className="animated-quote">"As he walks the earth trembles"</h2>
      </div>
      <div className="video-cards-container">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <iframe
              className="video-iframe"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="video-title">{video.title}</h3>
            <p className="video-description">{video.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
