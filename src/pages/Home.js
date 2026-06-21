import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import manicureImg from '../img/elegant-pastel-pink-natural-manicure-scaled.jpg';
import handPaintedArtImg from '../img/Hand-Painted Art.jpg';
import extensionsSculptingImg from '../img/Extensions & Sculpting.jpeg';
import nailDesignImg from '../img/images.jpg';

const services = [
  {
    title: 'Chrome & Glazed Sets',
    description:
      'Mirror chrome, pearl glaze, and soft reflective finishes shaped for everyday wear.',
    image: manicureImg,
  },
  {
    title: 'Hand-Painted Art',
    description:
      'Florals, French tips, tiny icons, aura blends, and custom designs painted with precision.',
    image: handPaintedArtImg,
  },
  {
    title: 'Extensions & Sculpting',
    description:
      'Balanced gel extensions, overlays, almond shaping, and repairs built to last.',
    image: extensionsSculptingImg,
  },
  {
    title: 'Bridal Nail Looks',
    description:
      'Soft shimmer, pearls, French details, and elegant finishes for wedding events.',
    image: nailDesignImg,
  },
  {
    title: 'Gel Polish Refresh',
    description:
      'Quick color changes, glossy gel polish, cuticle care, and long-lasting shine.',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Acrylic Nail Art',
    description:
      'Durable acrylic sets with clean shaping, polished color, and custom accent details.',
    image:
      'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Party Nail Art',
    description:
      'Glitter, shimmer, rhinestones, and statement accents for parties and special days.',
    image:
      'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Nail Care Repair',
    description:
      'Gentle nail strengthening, cleanup, reshaping, and repair support for healthy growth.',
    image:
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=400&fit=crop&q=80',
  },
];

const trends = ['Aura nails', 'Micro French', '3D charms', 'Cat eye gel'];

function Home() {
  return (
    <div className="page home-page">
      <section className="hero animate-fade-in">
        <div className="hero-overlay" />
        <Header variant="overlay" />
        <div className="floating-sparkles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-content animate-fade-in-up">
          <p className="eyebrow">Nails by Falguni</p>
          <h1>Beauty at Your Fingertips</h1>
          <p>
            Custom nail art, glossy gel finishes, and sculpted extensions for hands
            that look camera-ready from every angle.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Book an Appointment
          </Link>
        </div>
        <div className="hero-art animate-fade-in-up animate-delay-2" aria-hidden="true">
          <div className="polish-bottle">
            <div className="polish-cap" />
            <div className="polish-glass">
              <div className="polish-shine" />
            </div>
          </div>
          <div className="nail-fan">
            <span className="nail nail-1" />
            <span className="nail nail-2" />
            <span className="nail nail-3" />
            <span className="nail nail-4" />
          </div>
        </div>
      </section>

      <section className="trend-strip" aria-label="Popular nail art styles">
        <div className="trend-track">
          {[...trends, ...trends].map((trend, index) => (
            <span key={`${trend}-${index}`}>{trend}</span>
          ))}
        </div>
      </section>

      <section className="services-section">
        <p className="section-kicker animate-fade-in-up">Studio services</p>
        <h2 className="animate-fade-in-up">Designed for your style</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`service-card animate-fade-in-up animate-delay-${index + 1}`}
            >
              <div className="service-image-wrap">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hours-section">
        <div className="hours-image-wrap animate-fade-in-up">
          <img src={manicureImg} alt="Elegant manicured hands" loading="lazy" />
        </div>
        <div className="hours-content animate-fade-in-up animate-delay-2">
          <p className="section-kicker">Appointments</p>
          <h2>Fresh sets, refills, and event-ready details</h2>
          <p className="hours-intro">
            Choose a design in the studio or bring your own inspiration. We help
            match length, shape, color, and finish before the first coat.
          </p>
          <div className="hours-list">
            <p>Tuesday - Friday / 9:00 AM - 7:00 PM</p>
            <p>Saturday - Sunday / 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
