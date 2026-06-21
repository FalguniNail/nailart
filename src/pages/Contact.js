import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!form.firstName.trim()) {
      nextErrors.firstName = 'First name is required';
    }
    if (!form.lastName.trim()) {
      nextErrors.lastName = 'Last name is required';
    }
    if (!form.email.trim()) {
      nextErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address';
    }
    if (!form.phone.trim()) {
      nextErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-+().]{7,}$/.test(form.phone)) {
      nextErrors.phone = 'Please enter a valid phone number';
    }
    if (!form.message.trim()) {
      nextErrors.message = 'Message is required';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 600));

    const submissions = JSON.parse(localStorage.getItem('nailEleganceContacts') || '[]');
    submissions.push({
      ...form,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem('nailEleganceContacts', JSON.stringify(submissions));

    setForm(initialForm);
    setErrors({});
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="page contact-page">
      <section className="contact-header animate-fade-in">
        <div className="hero-overlay hero-overlay-light" />
        <Header variant="compact" />
      </section>

      <section className="contact-hero animate-fade-in">
        <div className="hero-overlay" />
        <div className="contact-hero-content animate-fade-in-up">
          <h1>Book Your Nail Art Session</h1>
          <p>
            Tell us the shape, length, and design you want. We will confirm your appointment and prep the right colors before you arrive.
          </p>
        </div>
      </section>

      <section className="contact-location">
        <div className="location-image-wrap animate-fade-in-up">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop&q=85"
            alt="Luxury nail salon interior"
            loading="lazy"
          />
        </div>
        <div className="location-map-wrap animate-fade-in-up animate-delay-2">
          <h2>Visit Nails by Falguni</h2>
          <p>Plan your appointment and arrive ready for a detailed, polished set.</p>
          <div className="location-map">
            <iframe
              title="Nails by Falguni on Google Maps"
              src="https://maps.google.com/maps?q=luxury+nail+salon&t=&z=14&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://maps.google.com/?q=luxury+nail+salon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-map"
          >
            Open Map
          </a>
        </div>
      </section>

      <section className="contact-form-section animate-fade-in-up">
        {submitted && (
          <div className="form-success" role="status">
            Thank you! Your message has been received. We will contact you shortly.
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName" className="visually-hidden">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name*"
                value={form.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'input-error' : ''}
              />
              {errors.firstName && (
                <span className="field-error">{errors.firstName}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="visually-hidden">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name*"
                value={form.lastName}
                onChange={handleChange}
                className={errors.lastName ? 'input-error' : ''}
              />
              {errors.lastName && (
                <span className="field-error">{errors.lastName}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="visually-hidden">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address*"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && (
                <span className="field-error">{errors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="visually-hidden">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone number*"
                value={form.phone}
                onChange={handleChange}
                className={errors.phone ? 'input-error' : ''}
              />
              {errors.phone && (
                <span className="field-error">{errors.phone}</span>
              )}
            </div>
          </div>

          <div className="form-group form-group-full">
            <label htmlFor="message" className="visually-hidden">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message*"
              rows="6"
              value={form.message}
              onChange={handleChange}
              className={errors.message ? 'input-error' : ''}
            />
            {errors.message && (
              <span className="field-error">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
