import { useEffect, useRef, useState } from 'react';
import heroProductVideo from '../imports/Saregama_Carvaan_model_animation_202605180125.mp4';
import heroBgImg from '../imports/Frame_1-1.png';
import heroProductImg from '../imports/5hi.jpg_2_1-1.png';
import carvaanLogo from '../imports/carvaanTitleHm_1.png';
import zoukLogo from '../imports/Zouk-Logo_1.png';
import featuresBgImg from '../imports/2_hi_CROP_4.png';
import audioImg from '../imports/3hi.jpg_2crop.png';
import audioTrack from '../imports/Hum_tere_pyaar_mai_web.mp3';
import veganBgImg from '../imports/3hi.jpg_2.png';
import sideViewImg from '../imports/Side_view_render_1.png';
import aboutBgImg from '../imports/Image__Carvaan_Heritage_.png';
import connectivityBgImg from '../imports/Section.png';
import lifestyleImg from '../imports/20260411_1123_Image_Generation_remix_01knxhjwasf47av30j2f5r844y.png';
import deepBurgundyImg from '../imports/Deep_Burgundy_Close-up_1-1.png';
import matchedPaletteImg from '../imports/20260410_1702_Image_Generation_remix_01knvjkaqrfhpr9m6xtjw13wd4-1.png';
import brushedGoldImg from '../imports/Side_view_render_2-1.png';
import leatherCloseup from '../imports/Zouk_Vegan_Leather_texture_close-up_1.png';
import goldPanelImg from '../imports/Gold_Panel_Detail_.jpg';
import dialKnobImg from '../imports/Dial_Knob_Close-up.jpg';

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const heroProductRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioSectionRef = useRef<HTMLElement>(null);

  const [content, setContent] = useState({
    heroTitle: '5000 Songs.',
    heroTitleEm: 'One Touch.',
    heroTitleEnd: 'Forever.',
    heroSub: "Where heritage meets consciousness. A collaboration between India's most beloved music player and its most loved vegan leather brand.",
  });
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
      }
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }
      requestAnimationFrame(animateRing);
    };

    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 80);
      }

      // Parallax effect
      const scrolled = window.scrollY;
      if (heroProductRef.current && scrolled < window.innerHeight) {
        heroProductRef.current.style.transform = `translateY(${scrolled * 0.15}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    animateRing();

    // Intersection Observer for scroll reveals
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));

    // Audio autoplay observer
    const audioObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && audioRef.current && !audioPlayed) {
          audioRef.current.play().catch(err => console.log('Audio autoplay prevented:', err));
          setAudioPlayed(true);
        }
      });
    }, { threshold: 0.5 });

    if (audioSectionRef.current) {
      audioObserver.observe(audioSectionRef.current);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      reveals.forEach(el => observer.unobserve(el));
      if (audioSectionRef.current) {
        audioObserver.unobserve(audioSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="saregama-page">
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={cursorRingRef}></div>

      <nav className="saregama-nav" ref={navRef}>
        <a href="#" className="nav-brand" contentEditable suppressContentEditableWarning>Saregama × Zouk</a>
        <ul className="nav-links">
          <li><a href="#collab">Collaboration</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#lifestyle">Story</a></li>
          <li><a href="#cta">Limited Edition</a></li>
        </ul>
        <a href="#cta" className="nav-cta">Get Yours</a>
      </nav>

      {/* HERO */}
      <section id="hero" className="saregama-section">
        <div className="hero-bg-image" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '75vh',
          backgroundImage: `url(${heroBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>
        <div className="hero-badge" contentEditable suppressContentEditableWarning>Limited Edition — 2024</div>
        <div className="hero-collab" contentEditable suppressContentEditableWarning>Saregama Carvaan × Zouk</div>
        <h1 className="hero-h1" contentEditable suppressContentEditableWarning>
          {content.heroTitle}<br /><em>{content.heroTitleEm}</em><br />{content.heroTitleEnd}
        </h1>
        <p className="hero-sub" contentEditable suppressContentEditableWarning>{content.heroSub}</p>

        <div className="hero-product" ref={heroProductRef} style={{ marginTop: '8rem' }}>
          <img
            src={heroProductImg}
            alt="Saregama Carvaan Product"
            style={{
              width: '75%',
              height: '75vh',
              objectFit: 'contain',
              filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.7))',
              display: 'block',
              margin: '0 auto'
            }}
          />
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section id="collab" className="saregama-section">
        <div className="collab-inner">
          <div className="collab-header reveal">
            <div className="section-tag">The Collaboration</div>
            <h2 className="collab-title" contentEditable suppressContentEditableWarning>Two Icons of Indian Culture.<br />One Limited Edition.</h2>
            <div className="gold-line"></div>
          </div>
          <div className="collab-grid">
            <div className="collab-card reveal reveal-delay-1" style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${carvaanLogo})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.1,
                zIndex: 0,
                pointerEvents: 'none'
              }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="collab-card-num">01</div>
                <h3 contentEditable suppressContentEditableWarning>Saregama Carvaan</h3>
                <p contentEditable suppressContentEditableWarning>India's most beloved portable music player. A celebration of our musical heritage, bringing timeless Bollywood melodies to every home with warmth and nostalgia. 5000 songs, one touch, a lifetime of memories.</p>
              </div>
            </div>
            <div className="collab-card reveal reveal-delay-2" style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${zoukLogo})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.15,
                zIndex: 0,
                pointerEvents: 'none'
              }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="collab-card-num">02</div>
                <h3 contentEditable suppressContentEditableWarning>Zouk</h3>
                <p contentEditable suppressContentEditableWarning>Founded by Disha Singh in Mumbai in 2016, Zouk is India's most loved PETA-certified vegan leather brand — 100% cruelty-free, fusing traditional Indian fabrics like Ikat, Jute, and Khadi with premium vegan leather. Trusted by Sara Ali Khan.</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }} className="reveal">
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--text-light)', fontWeight: 300, maxWidth: '600px', margin: '0 auto' }} contentEditable suppressContentEditableWarning>United by a shared love for heritage, craftsmanship, and conscious living — this collaboration celebrates what it means to be proudly Indian and ethically forward.</p>
          </div>
        </div>
      </section>

      {/* DESIGN STORY */}
      <section id="design-story" className="saregama-section">
        <div className="design-story-inner">
          <div className="design-story-header reveal">
            <div className="section-tag">Design Story</div>
            <h2 className="design-story-title" contentEditable suppressContentEditableWarning>Wrapped in Zouk.<br />Tuned by Saregama.</h2>
            <p className="design-story-sub" contentEditable suppressContentEditableWarning>Every detail tells a story of conscious luxury</p>
          </div>

          <div className="design-cards reveal">
            <div className="design-card">
              <img src={deepBurgundyImg} alt="Deep Burgundy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="design-card-overlay">
                <div className="design-card-label" contentEditable suppressContentEditableWarning>Deep Burgundy</div>
                <p className="design-card-desc" contentEditable suppressContentEditableWarning>Rich, tactile vegan leather with a warmth that echoes old Bollywood romance</p>
              </div>
            </div>
            <div className="design-card">
              <img src={matchedPaletteImg} alt="Matched Palette" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="design-card-overlay">
                <div className="design-card-label" contentEditable suppressContentEditableWarning>Matched Palette</div>
                <p className="design-card-desc" contentEditable suppressContentEditableWarning>Pairs perfectly with Zouk's signature burgundy bags — a complete lifestyle aesthetic</p>
              </div>
            </div>
            <div className="design-card">
              <img src={brushedGoldImg} alt="Brushed Gold" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="design-card-overlay">
                <div className="design-card-label" contentEditable suppressContentEditableWarning>Brushed Gold</div>
                <p className="design-card-desc" contentEditable suppressContentEditableWarning>Perforated speaker panel, dial knob, and carry handle finished in heritage gold</p>
              </div>
            </div>
          </div>

          <div className="design-quote reveal">
            <p contentEditable suppressContentEditableWarning>"Where every touch is luxury, every note is memory"</p>
          </div>
        </div>
      </section>

      {/* VEGAN LEATHER */}
      <section id="vegan" className="saregama-section">
        <div className="vegan-bg-image" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${veganBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>
        <div className="vegan-inner">
          <div className="reveal">
            <div className="section-tag">The Future is Vegan</div>
            <h2 className="vegan-headline" contentEditable suppressContentEditableWarning>No Compromise.<br />On <span>Sound.</span> On <span>Style.</span><br />On <span>Values.</span></h2>
            <p className="vegan-tagline" contentEditable suppressContentEditableWarning>Vegan leather isn't just an alternative — it's the future</p>
          </div>

          <div className="vegan-pillars">
            <div className="vegan-pillar reveal reveal-delay-1">
              <span className="vegan-pillar-icon">✦</span>
              <h3 contentEditable suppressContentEditableWarning>100% Cruelty-Free</h3>
              <p contentEditable suppressContentEditableWarning>PETA Certified. No animals harmed in the making of this masterpiece. Conscious luxury that stands for something greater.</p>
            </div>
            <div className="vegan-pillar reveal reveal-delay-2">
              <span className="vegan-pillar-icon">◈</span>
              <h3 contentEditable suppressContentEditableWarning>Environmentally Conscious</h3>
              <p contentEditable suppressContentEditableWarning>Sustainable materials that reduce environmental impact without compromising on quality, texture, or durability.</p>
            </div>
            <div className="vegan-pillar reveal reveal-delay-3">
              <span className="vegan-pillar-icon">◇</span>
              <h3 contentEditable suppressContentEditableWarning>Premium Quality</h3>
              <p contentEditable suppressContentEditableWarning>Indistinguishable from traditional leather in look, feel, and durability. Zouk proves luxury needs no compromise.</p>
            </div>
          </div>

          <div className="vegan-quote-block reveal">
            <blockquote contentEditable suppressContentEditableWarning>"This isn't just about what we make. It's about how we make it. And who we are when we choose to make it differently."</blockquote>
            <p style={{ marginTop: '1.5rem', fontSize: '11px', letterSpacing: '0.2em', color: 'var(--gold)', fontFamily: "'Cinzel',serif" }}>— Zouk × Saregama Carvaan</p>
          </div>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section id="video-showcase" className="saregama-section" style={{
        backgroundColor: '#510912',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '4rem 2rem'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          position: 'relative'
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.5))'
            }}
          >
            <source src={heroProductVideo} type="video/mp4" />
          </video>
          <p style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '12px',
            fontStyle: 'italic',
            margin: 0
          }}>
            This video animation is AI generated
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="saregama-section">
        <div className="about-bg-image" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${aboutBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>
        <div className="about-inner">
          <div className="about-visual reveal">
            <img src={sideViewImg} alt="Saregama Carvaan Side View" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="about-content">
            <div className="section-tag reveal">About the Carvaan</div>
            <h2 className="about-title reveal" contentEditable suppressContentEditableWarning>Decades of <em>Memories.</em><br />One Beautiful Device.</h2>
            <p className="about-text reveal" contentEditable suppressContentEditableWarning>Pre-loaded with 5,000 evergreen Hindi songs from legendary voices that shaped the soul of India — this is Bollywood's heart in your hands. No internet. No playlist. Just music, the way it was always meant to feel.</p>
            <p className="about-text reveal" contentEditable suppressContentEditableWarning>The Carvaan has always been more than a speaker. It is an emotional object. It is nostalgia you can hold. Now, wrapped in Zouk vegan leather, it is also a statement of what you stand for.</p>
            <div className="about-artists reveal">
              <div className="artist-chip" contentEditable suppressContentEditableWarning>Mohammed Rafi</div>
              <div className="artist-chip" contentEditable suppressContentEditableWarning>Lata Mangeshkar</div>
              <div className="artist-chip" contentEditable suppressContentEditableWarning>Kishore Kumar</div>
              <div className="artist-chip" contentEditable suppressContentEditableWarning>Asha Bhosle</div>
              <div className="artist-chip" contentEditable suppressContentEditableWarning>Mukesh</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="saregama-section">
        <div className="features-bg-image" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${featuresBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>
        <div className="features-inner">
          <div className="features-header reveal">
            <div className="section-tag">Features</div>
            <h2 className="features-title" contentEditable suppressContentEditableWarning>Everything You Need.<br />Nothing You Don't.</h2>
            <div className="gold-line"></div>
          </div>
          <div className="features-grid">
            {[
              { icon: '01', title: 'Saregama Mode', desc: '5,000 evergreen songs organized by artists, moods, and decades. Navigate with a simple turn of the gold dial.' },
              { icon: '02', title: 'FM / AM Radio', desc: 'Built-in radio tuner to catch your favourite stations. Morning news or evening melodies, all at your fingertips.' },
              { icon: '03', title: 'Bluetooth Streaming', desc: 'Seamlessly connect your smartphone to stream your own playlists through superior Carvaan speakers.' },
              { icon: '04', title: 'USB & AUX', desc: 'Play your personal collection from USB drives or connect external devices via AUX input.' },
              { icon: '05', title: 'Curated by Moods', desc: 'Romantic, devotional, patriotic songs organized to match every emotion and moment of your day.' },
              { icon: '06', title: 'Geetmala Collection', desc: 'Binaca Geetmala\'s legendary countdown shows — relive the weekly ritual that defined an era of Indian music.' },
            ].map((feature, i) => (
              <div key={i} className={`feature-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="feature-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="22" stroke="#C9A253" strokeWidth="1"/>
                    <path d="M16 30 Q24 10 32 30" stroke="#C9A253" strokeWidth="1.5" fill="none"/>
                    <circle cx="24" cy="30" r="3" fill="#C9A253"/>
                  </svg>
                  <span className="feature-num">{feature.icon}</span>
                </div>
                <h3 contentEditable suppressContentEditableWarning>{feature.title}</h3>
                <p contentEditable suppressContentEditableWarning>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LUXURY DETAILS */}
      <section id="luxury" className="saregama-section">
        <div className="luxury-inner">
          <div className="luxury-header reveal">
            <div className="section-tag">Design Details</div>
            <h2 className="luxury-title" contentEditable suppressContentEditableWarning>Luxury Without Compromise</h2>
            <div className="gold-line"></div>
            <p style={{ fontSize: '15px', color: 'var(--text-light)', fontWeight: 300, marginTop: '1rem' }} contentEditable suppressContentEditableWarning>Every detail, from texture to finish, speaks of thoughtful design and conscious craft</p>
          </div>
          <div className="luxury-items">
            {[
              { label: 'Material', title: 'Zouk Vegan Leather', text: 'Tactile, warm, and utterly premium — the deep burgundy finish that started it all. Sourced and crafted with Zouk\'s signature commitment to cruelty-free luxury materials.', img: leatherCloseup },
              { label: 'Acoustic Panel', title: 'Gold Perforated Panel', text: 'Precision-cut metal grille in brushed gold — where sound meets sculpture. Each perforation is both functional and deeply beautiful.', img: goldPanelImg },
              { label: 'Control', title: 'Heritage Dial Knob', text: 'Smooth, weighted gold dial — tuning feels like turning back time. One touch, and 5000 songs open before you like a chapter of old India.', img: dialKnobImg },
            ].map((item, i) => (
              <div key={i} className="luxury-item reveal">
                <div className="luxury-item-img">
                  {item.img ? (
                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="img-placeholder">{item.label.toUpperCase()}</div>
                  )}
                </div>
                <div className="luxury-item-content">
                  <div className="luxury-item-label" contentEditable suppressContentEditableWarning>{item.label}</div>
                  <h3 className="luxury-item-title" contentEditable suppressContentEditableWarning>{item.title}</h3>
                  <p className="luxury-item-text" contentEditable suppressContentEditableWarning>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTIVITY */}
      <section id="connectivity" className="saregama-section">
        <div className="connectivity-bg-image" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${connectivityBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>
        <div className="connectivity-inner">
          <div className="section-tag reveal">Connectivity</div>
          <h2 className="conn-title reveal" contentEditable suppressContentEditableWarning>Play It Your Way</h2>
          <p style={{ fontSize: '15px', color: 'var(--text-light)', fontWeight: 300, marginTop: '1rem' }} className="reveal" contentEditable suppressContentEditableWarning>Versatile connectivity options for every listening preference</p>
          <div className="conn-icons">
            {[
              { label: 'Bluetooth 5.0', desc: 'Wireless streaming from any device' },
              { label: 'FM / AM Radio', desc: 'Built-in tuner for live broadcasts' },
              { label: 'USB Port', desc: 'Play your personal music library' },
              { label: 'AUX Input', desc: 'Connect external audio sources' },
            ].map((conn, i) => (
              <div key={i} className={`conn-item reveal reveal-delay-${i + 1}`}>
                <svg className="conn-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10 L28 10 L28 38 L20 38 M20 24 L14 30 M20 24 L14 18 M28 24 L34 30 M28 24 L34 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <div className="conn-label" contentEditable suppressContentEditableWarning>{conn.label}</div>
                <p className="conn-desc" contentEditable suppressContentEditableWarning>{conn.desc}</p>
              </div>
            ))}
          </div>
          <div className="conn-specs reveal">
            {[
              { val: '5+', label: 'Hours Playback' },
              { val: '5K', label: 'Pre-loaded Songs' },
              { val: '10W', label: 'Dual Stereo' },
              { val: '4', label: 'Input Options' },
            ].map((spec, i) => (
              <div key={i} className="conn-spec">
                <span className="conn-spec-val" contentEditable suppressContentEditableWarning>{spec.val}</span>
                <span className="conn-spec-label" contentEditable suppressContentEditableWarning>{spec.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIO */}
      <section id="audio" className="saregama-section" ref={audioSectionRef}>
        <div className="audio-inner" style={{ display: 'flex', gap: '4rem', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ flex: '1' }}>
            <div className="section-tag reveal">Audio Quality</div>
            <h2 className="audio-title reveal" contentEditable suppressContentEditableWarning>Rich. Warm.<br /><em>Unforgettable.</em></h2>
            <div className="audio-wave">
              <svg viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0 40 Q25 10 50 40 Q75 70 100 40 Q125 10 150 40 Q175 70 200 40 Q225 10 250 40 Q275 70 300 40 Q325 10 350 40 Q375 70 400 40 Q425 10 450 40 Q475 70 500 40 Q525 10 550 40 Q575 70 600 40 Q625 10 650 40 Q675 70 700 40 Q725 10 750 40 Q775 70 800 40" stroke="#C9A253" strokeWidth="1" opacity="0.4"/>
                <path d="M0 40 Q25 20 50 40 Q75 60 100 40 Q125 20 150 40 Q175 60 200 40 Q225 20 250 40 Q275 60 300 40 Q325 20 350 40 Q375 60 400 40 Q425 20 450 40 Q475 60 500 40 Q525 20 550 40 Q575 60 600 40 Q625 20 650 40 Q675 60 700 40 Q725 20 750 40 Q775 60 800 40" stroke="#C9A253" strokeWidth="1.5" opacity="0.7"/>
              </svg>
            </div>
            <p className="audio-text reveal" contentEditable suppressContentEditableWarning>Whether it's Lata's ethereal voice or Kishore's playful energy, the Carvaan's tuned acoustics bring out nuances you've never noticed before — even in songs you've heard a thousand times.</p>
            <div className="audio-specs reveal">
              {[
                { val: 'Dual 5W', label: 'Stereo Speakers' },
                { val: 'Enhanced', label: 'Bass Response' },
                { val: 'Vocal', label: 'Clarity Optimized' },
              ].map((spec, i) => (
                <div key={i} className="audio-spec">
                  <span className="audio-spec-val" contentEditable suppressContentEditableWarning>{spec.val}</span>
                  <span className="audio-spec-label" contentEditable suppressContentEditableWarning>{spec.label}</span>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              <audio ref={audioRef} controls style={{ width: '100%', filter: 'sepia(0.3) saturate(1.2)' }}>
                <source src={audioTrack} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className="reveal" style={{ flex: '1', border: '2px solid #C9A253', padding: '1rem', borderRadius: '8px', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}>
            <img src={audioImg} alt="Carvaan Audio Quality" style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4))' }} />
          </div>
        </div>
      </section>

      {/* LIFESTYLE */}
      <section id="lifestyle" className="saregama-section">
        <div className="lifestyle-img">
          <img src={lifestyleImg} alt="Mornings Made Meaningful" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
        </div>
        <div className="lifestyle-bg"></div>
        <div className="lifestyle-content">
          <div className="lifestyle-overtitle reveal" contentEditable suppressContentEditableWarning>A Moment of Stillness</div>
          <h2 className="lifestyle-title reveal" contentEditable suppressContentEditableWarning>Mornings Made Meaningful</h2>
          <p className="lifestyle-body reveal" contentEditable suppressContentEditableWarning>Imagine this: golden hour light filtering through your window, a cup of chai steaming on the table, your Zouk bag resting nearby. The Carvaan plays softly — maybe Lata's "Lag Jaa Gale" or Rafi's "Baharon Phool Barsao." The burgundy leather catches the light. Time slows down.</p>
          <blockquote className="lifestyle-quote reveal" contentEditable suppressContentEditableWarning>"In a world that rushes, this is permission to pause. To remember. To feel."</blockquote>
          <ul className="lifestyle-bullets reveal">
            <li contentEditable suppressContentEditableWarning>A slow, intentional morning ritual</li>
            <li contentEditable suppressContentEditableWarning>The feeling of being proudly, unapologetically Indian</li>
            <li contentEditable suppressContentEditableWarning>Conscious luxury that tells your story</li>
          </ul>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', color: 'var(--gold-light)', marginTop: '2rem', fontSize: '1.1rem' }} className="reveal" contentEditable suppressContentEditableWarning>"Not just music. A way of living."</p>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="saregama-section">
        <div className="cta-inner">
          <div className="cta-badge reveal" contentEditable suppressContentEditableWarning>Limited Edition Release</div>
          <h2 className="cta-title reveal" contentEditable suppressContentEditableWarning>Only a Few.<br /><em>Made with Intention.</em></h2>
          <p className="cta-sub reveal" contentEditable suppressContentEditableWarning>Once they're gone, they're gone forever</p>
          <p className="cta-text reveal" contentEditable suppressContentEditableWarning>This collaboration between Saregama Carvaan and Zouk is strictly limited. Numbered units with a certificate of authenticity. Don't miss your chance to own a piece of conscious luxury and musical heritage.</p>
          <a href="#" className="cta-btn reveal">Get Yours Now</a>
          <p className="cta-note reveal" contentEditable suppressContentEditableWarning>Limited availability <span></span> Numbered units <span></span> Certificate of authenticity included</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-collab" contentEditable suppressContentEditableWarning>A Collaboration Between</div>
        <div className="footer-brands">
          <span className="footer-brand" contentEditable suppressContentEditableWarning>SAREGAMA CARVAAN</span>
          <span className="footer-divider">×</span>
          <span className="footer-brand" contentEditable suppressContentEditableWarning>ZOUK</span>
        </div>
        <p className="footer-copy" contentEditable suppressContentEditableWarning>Heritage · Craftsmanship · Conscious Living</p>
      </footer>
    </div>
  );
}
