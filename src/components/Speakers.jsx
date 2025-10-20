import React, { useState } from "react";
import "./Speakers.css";

const speakers = [
  { 
    name: "Jesimiel Damina", 
    img: "/jesimiel1.jpg", 
    topic: "Empowering Youth Voices Through Media",
    bio: "Jesimiel Damina is a creative filmmaker and youth advocate passionate about amplifying young African voices through media and storytelling."
  },
  {
    name: "Chris N. Obinna", 
    img: "/chris2.jpg", 
    topic: "Redefining Leadership in the Digital Age",
    bio: "Chris Obinna explores how technology can improve lives while preserving human connection, ethics, and creativity."
  },
  {
    name: "Osaze Efe", 
    img: "/osaze3.jpg", 
    topic: "The Future of African Innovation",
    bio: "Osaze Efe is a purpose-driven social innovator focused on empowering the next generation to live meaningful, impactful lives."
  },
  { 
    name: "Remi Osifo", 
    img: "/remi4.jpg", 
    topic: "The Art of Storytelling in a Modern World",
    bio: "Remi Osifo is a leadership coach and digital strategist helping professionals adapt and thrive in fast-changing work environments."
  },
  { 
    name: "Rotimi Olawale", 
    img: "/rotimi5.jpg", 
    topic: "Building Bridges Between Technology and Humanity",
    bio: "Rotimi Olawale is a youth advocate and policy strategist committed to amplifying young African voices in governance and development."
  },
  { 
    name: "Imal Silva", 
    img: "/imal6.jpg", 
    topic: "Purpose, Passion, and the Power of Impact",
    bio: "Imal Silva is a visionary tech entrepreneur building solutions that empower African communities through innovation and education."
  },
  { 
    name: "Charles Born", 
    img: "/charles7.jpg", 
    topic: "Championing Youth Advocacy in Africa",
    bio: "Charles Born is a storyteller, author, and creative director inspiring audiences through compelling narratives and visual art."
  },
  { 
    name: "Jemima Damina", 
    img: "/jemima8.jpg", 
    topic: "Creative Expression as a Tool for Social Change",
    bio: "Jemima Damina is a filmmaker and creative entrepreneur dedicated to telling stories that inspire positive change and representation."
  },
  { 
    name: "Mary Ojulari", 
    img: "/mary9.jpg", 
    topic: "Exploring Limitless Horizons",
    bio: "A special guest sharing insights on embracing innovation, courage, and creativity to shape the future."
  }
];

export default function Speakers() {
  const [selected, setSelected] = useState(null);
  const [paused, setPaused] = useState(false);

  const toggleSpeaker = (index) => {
    setSelected(selected === index ? null : index);
    setPaused(selected !== index); // pause scroll when opening bio
  };

  return (
    <section className="speakers">
      <h2>Meet Our Speakers</h2>
      <div
        className={`speaker-belt ${paused ? "paused" : ""}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {[...speakers, ...speakers].map((sp, index) => (
          <div
            key={index}
            className={`speaker-card ${
              selected === (index % speakers.length) ? "active" : ""
            }`}
            onClick={() => toggleSpeaker(index % speakers.length)}
          >
            <img src={sp.img} alt={sp.name} />
            <h3>{sp.name}</h3>
            <p className="topic">{sp.topic}</p>
            {selected === (index % speakers.length) && (
              <div className="speaker-bio">
                <p>{sp.bio}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}