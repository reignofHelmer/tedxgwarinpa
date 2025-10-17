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
    name: "Remi Osifo", 
    img: "/chris2.jpg", 
    topic: "Redefining Leadership in the Digital Age",
    bio: "Remi Osifo is a leadership coach and digital strategist helping professionals adapt and thrive in fast-changing work environments."
  },
  { 
    name: "Imal Silva", 
    img: "/osaze3.jpg", 
    topic: "The Future of African Innovation",
    bio: "Imal Silva is a visionary tech entrepreneur building solutions that empower African communities through innovation and education."
  },
  { 
    name: "Charles Born", 
    img: "/remi4.jpg", 
    topic: "The Art of Storytelling in a Modern World",
    bio: "Charles Born is a storyteller, author, and creative director inspiring audiences through compelling narratives and visual art."
  },
  { 
    name: "Chris N. Obinna", 
    img: "/rotimi5.jpg", 
    topic: "Building Bridges Between Technology and Humanity",
    bio: "Chris Obinna explores how technology can improve lives while preserving human connection, ethics, and creativity."
  },
  { 
    name: "Osaze Efe", 
    img: "/imal6.jpg", 
    topic: "Purpose, Passion, and the Power of Impact",
    bio: "Osaze Efe is a purpose-driven social innovator focused on empowering the next generation to live meaningful, impactful lives."
  },
  { 
    name: "Rotimi Olawale", 
    img: "/charles7.jpg", 
    topic: "Championing Youth Advocacy in Africa",
    bio: "Rotimi Olawale is a youth advocate and policy strategist committed to amplifying young African voices in governance and development."
  },
  { 
    name: "Jemima Damina", 
    img: "/jemima8.jpg", 
    topic: "Creative Expression as a Tool for Social Change",
    bio: "Jemima Damina is a filmmaker and creative entrepreneur dedicated to telling stories that inspire positive change and representation."
  }
];

export default function Speakers() {
  const [selected, setSelected] = useState(null);

  const toggleSpeaker = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <section className="speakers">
      <h2>Meet Our Speakers</h2>
      <div className="speaker-grid">
        {speakers.map((sp, index) => (
          <div
            key={index}
            className={`speaker-card ${selected === index ? "active" : ""}`}
            onClick={() => toggleSpeaker(index)}
          >
            <img src={sp.img} alt={sp.name} />
            <h3>{sp.name}</h3>
            <p>{sp.topic}</p>
            {selected === index && (
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
