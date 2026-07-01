"use client";

import { useId, useRef, useState } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import type { IndustryContactContent } from "@/content/industry-contact/types";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import "@/components/industries/heroes/industry-hero.css";
import "@/components/industries/industry-contact.css";

const easeOut = [0.22, 1, 0.36, 1] as const;

type FormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type ReachOutContactSectionProps = {
  content: IndustryContactContent;
  formIdPrefix?: string;
};

export default function ReachOutContactSection({
  content,
  formIdPrefix = "reach-out-contact",
}: ReachOutContactSectionProps) {
  const rootRef = useRef<HTMLElement>(null);
  const titleId = useId();
  const active = useSectionReveal(rootRef, {
    amount: 0.1,
    margin: "0px 0px -8% 0px",
    delay: 120,
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: content.defaultService,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      service: content.defaultService,
      message: "",
    });
  };

  return (
    <section
      ref={rootRef}
      className={`archmation-industry-contact${active ? " is-inview" : ""}`}
      aria-labelledby={titleId}
    >
      <div className="archmation-industry-hero__bg" aria-hidden="true">
        <div className="archmation-industry-hero__bg-base" />
        <div className="archmation-industry-hero__bg-gradient" />
        <div className="archmation-industry-hero__bg-grid" />
        <div className="archmation-industry-hero__bg-spotlight archmation-industry-hero__bg-spotlight--tr" />
        <div className="archmation-industry-hero__bg-spotlight archmation-industry-hero__bg-spotlight--bl" />
        <div className="archmation-industry-hero__bg-spotlight archmation-industry-hero__bg-spotlight--mid" />
        <div className="archmation-industry-hero__bg-shimmer" />
      </div>

      <div className="archmation-industry-hero__inner">
        <div className="archmation-industry-contact__grid">
          <motion.div
            className="archmation-industry-contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <div className="archmation-industry-contact__intro">
              <p className="archmation-industry-hero__label">{content.eyebrow}</p>
              <h2 id={titleId} className="archmation-industry-hero__title">
                {content.title}
              </h2>
              {content.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="archmation-industry-hero__desc archmation-industry-contact__intro-text"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              className="archmation-industry-contact__divider"
              aria-hidden="true"
            />

            <div className="archmation-industry-contact__branches">
              {content.branches.map((branch) => (
                <div
                  key={`${branch.type}-${branch.location}`}
                  className="archmation-industry-contact__card"
                >
                  <MapPin
                    className="archmation-industry-contact__card-icon"
                    size={24}
                    aria-hidden="true"
                  />
                  <div className="archmation-industry-contact__card-body">
                    <h3 className="archmation-industry-contact__card-title">
                      {branch.type}
                    </h3>
                    <p className="archmation-industry-contact__card-text">
                      {branch.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="archmation-industry-contact__divider"
              aria-hidden="true"
            />

            <div className="archmation-industry-contact__methods">
              <div className="archmation-industry-contact__card">
                <Phone
                  className="archmation-industry-contact__card-icon"
                  size={24}
                  aria-hidden="true"
                />
                <div className="archmation-industry-contact__card-body">
                  <h3 className="archmation-industry-contact__card-title">
                    {content.phoneLabel}
                  </h3>
                  <p className="archmation-industry-contact__card-text">
                    Phone: {content.phone}
                  </p>
                  <p className="archmation-industry-contact__card-text">
                    Whatsapp: {content.whatsapp}
                  </p>
                </div>
              </div>

              <div className="archmation-industry-contact__card">
                <Mail
                  className="archmation-industry-contact__card-icon"
                  size={24}
                  aria-hidden="true"
                />
                <div className="archmation-industry-contact__card-body">
                  <h3 className="archmation-industry-contact__card-title">
                    {content.emailLabel}
                  </h3>
                  {content.emails.map((email) => (
                    <p
                      key={email}
                      className="archmation-industry-contact__card-text"
                    >
                      {email}
                    </p>
                  ))}
                </div>
              </div>

              <div className="archmation-industry-contact__card">
                <Clock
                  className="archmation-industry-contact__card-icon"
                  size={24}
                  aria-hidden="true"
                />
                <div className="archmation-industry-contact__card-body">
                  <h3 className="archmation-industry-contact__card-title">
                    {content.hoursLabel}
                  </h3>
                  <p className="archmation-industry-contact__card-text">
                    {content.hoursDays}
                  </p>
                  <p className="archmation-industry-contact__card-text">
                    {content.hoursTime}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="archmation-industry-contact__form-panel"
            initial={{ opacity: 0, x: 40 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.15 }}
          >
            <div className="archmation-industry-contact__form-card">
              <h3 className="archmation-industry-contact__form-title">
                {content.formTitle}
              </h3>

              <form
                className="archmation-industry-contact__form"
                onSubmit={handleSubmit}
              >
                <div className="archmation-industry-contact__form-row">
                  <div className="archmation-industry-contact__field">
                    <label
                      className="archmation-industry-contact__label"
                      htmlFor={`${formIdPrefix}-name`}
                    >
                      Name
                    </label>
                    <input
                      id={`${formIdPrefix}-name`}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="archmation-industry-contact__input"
                      required
                    />
                  </div>
                  <div className="archmation-industry-contact__field">
                    <label
                      className="archmation-industry-contact__label"
                      htmlFor={`${formIdPrefix}-company`}
                    >
                      Company
                    </label>
                    <input
                      id={`${formIdPrefix}-company`}
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company"
                      className="archmation-industry-contact__input"
                    />
                  </div>
                </div>

                <div className="archmation-industry-contact__form-row">
                  <div className="archmation-industry-contact__field">
                    <label
                      className="archmation-industry-contact__label"
                      htmlFor={`${formIdPrefix}-phone`}
                    >
                      Phone
                    </label>
                    <input
                      id={`${formIdPrefix}-phone`}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="archmation-industry-contact__input"
                    />
                  </div>
                  <div className="archmation-industry-contact__field">
                    <label
                      className="archmation-industry-contact__label"
                      htmlFor={`${formIdPrefix}-email`}
                    >
                      Email
                    </label>
                    <input
                      id={`${formIdPrefix}-email`}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="archmation-industry-contact__input"
                      required
                    />
                  </div>
                </div>

                <div className="archmation-industry-contact__field">
                  <label
                    className="archmation-industry-contact__label"
                    htmlFor={`${formIdPrefix}-service`}
                  >
                    Service
                  </label>
                  <select
                    id={`${formIdPrefix}-service`}
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="archmation-industry-contact__select"
                  >
                    {content.services.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="archmation-industry-contact__field">
                  <label
                    className="archmation-industry-contact__label"
                    htmlFor={`${formIdPrefix}-message`}
                  >
                    Message
                  </label>
                  <textarea
                    id={`${formIdPrefix}-message`}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={5}
                    className="archmation-industry-contact__textarea"
                  />
                </div>

                <div className="archmation-industry-contact__submit-wrap">
                  <motion.button
                    type="submit"
                    className="archmation-industry-hero__cta"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span
                      className="archmation-industry-hero__cta-shine"
                      aria-hidden="true"
                    />
                    <span className="archmation-industry-hero__cta-label">
                      {content.submitLabel}
                    </span>
                    <ArrowRight
                      className="archmation-industry-hero__cta-icon"
                      size={16}
                      aria-hidden="true"
                    />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
