
import React from 'react';

const About = () => {
  return (
    <div className="opacity-0 animate-fadeIn animate-delay-100 section-container" style={{ backgroundColor: '#161616'}}>
      <h2 className="section-title">About</h2>
      
      <div className="space-y-4 text-muted-foreground">
        <p>
          Technology has always fascinated me, especially in software development, system analysis,
          and cybersecurity. I love solving complex problems and making tech more intuitive, secure, and 
          useful for people. Learning never stops for me, I’m always exploring new skills, certifications, and 
          projects to stay ahead.
        </p>
        
        <p>
        Beyond work, I enjoy collaborating, sharing knowledge, and contributing to open-source projects. 
        I’m passionate about self-improvement and constantly pushing myself to grow. At the end of the day, 
        my goal is simple: keep innovating and use technology to make life better.
        </p>
      </div>
    </div>
  );
};

export default About;
