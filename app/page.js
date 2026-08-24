'use client';

import { useEffect, useState } from "react";

const services = [
  ["Web Development", "Modern, responsive websites and business web applications."],
  ["Website Design", "Professional UI layouts, landing pages and portfolio websites."],
  ["Mobile App Development", "Android and cross-platform application development."],
  ["CV / Resume Writing", "ATS-friendly CVs, resumes and professional profile documents."],
  ["Cover Letter Writing", "Tailored cover letters for job and freelance applications."],
  ["Data Entry", "Accurate data entry, spreadsheet work and document processing."],
  ["Transcription", "Audio and video transcription with careful formatting."],
  ["Virtual Assistance", "Online research, administration and digital support."],
  ["Graphic Design", "Social media graphics, documents and promotional designs."],
  ["Document Formatting", "Professional formatting of Word, PDF and business documents."],
  ["AI Data Annotation", "Data labeling and AI training/annotation tasks."],
  ["IT / Computer Support", "General computer, software and website troubleshooting."],
];

const projects = [
  {
    title: "Portfolio Design",
    category: "Portfolio",
    description: "Professional personal and freelancer portfolio website design.",
    type: "link",
    link: "https://www.github.OmarAliCode",
  },
  {
    title: "CV, Resume & Cover Letter Writing",
    category: "CV & Documents",
    description: "Professional ATS-friendly CVs, resumes and cover letters.",
    type: "images",
    images: [
      "/work/cv/cv-1.jpg",
      "/work/cv/cv-2.jpg",
      "/work/cv/testmony.jpg",
      "/work/cv/cover-letter.jpg",
    ],
  },
  {
    title: "Website Design & Development",
    category: "Web Development",
    description: "Responsive websites and modern web applications for businesses and individuals.",
    type: "link",
    link: "https://protech-solution.onrender.com/",
  },
  {
    title: "Graphic Design",
    category: "Graphic Design",
    description: "Professional graphics, promotional materials and social media designs.",
    type: "images",
    images: [
      "/work/graphics/design-1.jpg",
      "/work/graphics/design-2.jpg",
      "/work/graphics/design-3.jpg",
      "/work/graphics/design-4.jpg",
    ],
  },
];

export default function Home() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({ name: "", message: "" });
  const [request, setRequest] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  const [sent, setSent] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    try { setComments(JSON.parse(localStorage.getItem("portfolio-comments") || "[]")); } catch {}
  }, []);

  function submitComment(e) {
    e.preventDefault();
    if (!comment.name || !comment.message) return;
    const item = { ...comment, date: new Date().toLocaleDateString() };
    const next = [item, ...comments].slice(0, 12);
    setComments(next);
    localStorage.setItem("portfolio-comments", JSON.stringify(next));
    setComment({ name: "", message: "" });
    setSent("Comment added successfully.");
    setTimeout(() => setSent(""), 3000);
  }

  function submitRequest(e) {
    e.preventDefault();
    if (!request.name || !request.email || !request.service || !request.message) return;
    const subject = encodeURIComponent(`Service Request: ${request.service}`);
    const body = encodeURIComponent(
      `Name: ${request.name}\nEmail: ${request.email}\nPhone/WhatsApp: ${request.phone}\nService: ${request.service}\nBudget: ${request.budget || "Not specified"}\n\nMessage:\n${request.message}`
    );
    window.location.href = `mailto:mwalimomar22gmail.com?subject=${subject}&body=${body}`;
  }

  const filtered = filter === "All" ? projects : projects.filter(p => p[1] === filter);

  return (
    <main>
      <aside className="sidebar">
        <img
  className="profile-photo"
  src="/my-photo.jpg"
  alt="Omar Ali"
/>
        <h1>Omar Ali</h1>
        <p className="role">Freelancer | Digital Solutions</p>
        <div className="contact-mini">
          <span>✉</span><a href="mailto:mwalimomar22@gmail.com">mwalimomar22@gmail.com</a>
          <span>☎</span><a href="tel:+254725487454">+254 725 487 454</a>
          <span>⌖</span><span>Kenya</span>
        </div>
        <div className="socials">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="GitHub">gh</a>
          <a href="#" aria-label="TikTok">♪</a>
        </div>
        <a className="purple-btn full" href="#request">Request a Service</a>
      </aside>

      <section className="content">
        <nav className="nav">
          <a href="#about">About</a><a href="#services">Services</a><a href="#portfolio">Portfolio</a>
          <a href="#comments">Comments</a><a href="#request">Request Service</a><a href="#contact">Contact</a>
        </nav>

        <section id="about" className="section hero">
          <div className="eyebrow">FREELANCER | DIGITAL SERVICES</div>
          <h2>Building useful Digital Solutions with <span>Professional Quality.</span></h2>
          <p>
            I am a Computer Science graduate and experienced freelancer providing web development,
            design, digital support, document services and AI-related freelance work.
          </p>
          <div className="actions">
            <a className="purple-btn" href="#request">Hire Me</a>
            <a className="outline-btn" href="#portfolio">View My Work</a>
          </div>
        </section>

        <section className="section">
          <div className="section-title"><h3>About Me</h3></div>
          <p>
            I help individuals, job seekers, entrepreneurs and businesses turn their ideas into
            professional digital results. My work focuses on clean design, practical technology,
            accurate documents and reliable online support.
          </p>
          <div className="stats">
            <div><strong>10+</strong><small>Years Experience</small></div>
            <div><strong>20+</strong><small>Services</small></div>
            <div><strong>100%</strong><small>Client Focus</small></div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-title"><h3>What I'm Doing</h3></div>
          <div className="cards">
            {services.map(([title, desc], i) => (
              <article className="service-card" key={title}>
                <div className="service-icon">{String(i + 1).padStart(2, "0")}</div>
                <h4>{title}</h4><p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="section-title"><h3>My Work</h3></div>
          <div className="filters">
            {["All", "Web Development", "Web Design"].map(x => (
              <button key={x} className={filter === x ? "active" : ""} onClick={() => setFilter(x)}>{x}</button>
            ))}
          </div>
         <div className="portfolio-grid">
  {filtered.map((project) => (
    <article className="project" key={project.title}>

      {project.type === "link" ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-image"
        >
          <div className="project-image">
            <span>VIEW PROJECT ↗</span>
          </div>
        </a>
      ) : (
        <div className="project-images">
          {project.images.slice(0, 4).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} example ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className="project-body">
        <small>{project.category}</small>
        <h4>{project.title}</h4>
        <p>{project.description}</p>

        {project.type === "link" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Visit Project ↗
          </a>
        )}

        {project.type === "images" && (
          <button
            className="project-button"
            onClick={() => window.open(project.images[0], "_blank")}
          >
            View Examples ↗
          </button>
        )}
      </div>

    </article>
  ))}
</div>
        </section>

        <section id="comments" className="section">
          <div className="section-title"><h3>Client Comments</h3></div>
          <div className="comment-layout">
            <form className="panel-form" onSubmit={submitComment}>
              <h4>Leave a comment</h4>
              <input placeholder="Your name" value={comment.name} onChange={e => setComment({...comment, name:e.target.value})}/>
              <textarea placeholder="Write your comment..." rows="5" value={comment.message} onChange={e => setComment({...comment, message:e.target.value})}/>
              <button className="purple-btn" type="submit">Post Comment</button>
              {sent && <p className="success">{sent}</p>}
            </form>
            <div className="comments-list">
              {comments.length === 0 && <div className="empty">Be the first client to leave a comment.</div>}
              {comments.map((c, i) => <article className="comment" key={i}><strong>{c.name}</strong><small>{c.date}</small><p>{c.message}</p></article>)}
            </div>
          </div>
        </section>

        <section id="request" className="section request">
          <div className="section-title"><h3>Request a Service</h3></div>
          <p>Tell me what you need. I will review your request and contact you with the next steps and final price.</p>
          <form className="request-form" onSubmit={submitRequest}>
            <input required placeholder="Full name" value={request.name} onChange={e=>setRequest({...request,name:e.target.value})}/>
            <input required type="email" placeholder="Email address" value={request.email} onChange={e=>setRequest({...request,email:e.target.value})}/>
            <input placeholder="Phone / WhatsApp" value={request.phone} onChange={e=>setRequest({...request,phone:e.target.value})}/>
            <select required value={request.service} onChange={e=>setRequest({...request,service:e.target.value})}>
              <option value="">Select a service</option>{services.map(([s])=><option key={s}>{s}</option>)}
            </select>
            <input placeholder="Estimated budget (optional)" value={request.budget} onChange={e=>setRequest({...request,budget:e.target.value})}/>
            <textarea required className="wide" rows="6" placeholder="Describe what you need..." value={request.message} onChange={e=>setRequest({...request,message:e.target.value})}/>
            <button className="purple-btn wide" type="submit">Send Service Request</button>
          </form>
        </section>

<section id="donate" className="section">
  <div className="section-title">
    <h3>Donate</h3>
  </div>

  <p>
    If you appreciate my work and would like to support my freelance journey,
    you can make a voluntary donation. Every contribution is greatly appreciated.
  </p>

  <div className="payment-grid">
    <div className="payment-card">
      <b>M-Pesa</b>
      <p>Support me through M-Pesa.</p>
      <strong>PayNo. : +254725487454</strong>
    </div>

    <div className="payment-card">
      <b>PayPal</b>
      <p>International supporters can donate through PayPal.</p>

      <a
        className="outline-btn"
        href="mwalimomar22@gmail"
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate with PayPal
      </a>
    </div>
  </div>
</section>

        <section id="contact" className="section contact">
          <div className="section-title"><h3>Contact Me</h3></div>
          <p>Ready to work together? Use the service request above or contact me directly.</p>
          <div className="contact-buttons">
            <a className="purple-btn" href="mailto:mwalimomar22@gmail.com">Email Me</a>
            <a className="outline-btn" href="https://wa.me/+254725487454" target="_blank">WhatsApp</a>
          </div>
        </section>

        <footer>© 2026 Omar Ali. All rights reserved.</footer>
      </section>
    </main>
  );
}
