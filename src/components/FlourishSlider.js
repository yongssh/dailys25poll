// FlourishSlider.js
import React, { useState, useEffect, useRef } from 'react';
import '../index.css';

export default function FlourishSlider({ slides }) {
  const [activeId, setActiveId] = useState(slides[0].storyId);
  const containerRef = useRef();

  useEffect(() => {
    const sections = Array.from(containerRef.current.querySelectorAll('section'));
    const obs = new IntersectionObserver(
      (entries) => {
        // pick the section >50% on-screen
        const best = entries
          .filter(e => e.isIntersecting)
          .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) setActiveId(best.target.dataset.storyid);
      },
      { threshold: [0.5] }
    );
    sections.forEach(sec => obs.observe(sec));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="flourish-slider">
      <div className="viewer">
        <iframe
          src={`https://flo.uri.sh/visualisation/${activeId}/embed?auto=1`}
          className="flourish-embed-iframe"
          scrolling="no"
          frameBorder="0"
          sandbox="allow-same-origin allow-scripts"
        />
      </div>
      <div className="narrative" ref={containerRef}>
        {slides.map(({ storyId, children }) => (
          <section key={storyId} data-storyid={storyId}>
            {children}
          </section>
        ))}
      </div>
    </div>
  );
}
