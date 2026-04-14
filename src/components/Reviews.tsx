import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const reviews = [
  {
    name: "James Miller",
    country: "USA",
    text: "Jun was incredibly professional and easy to communicate with from the start. His English is excellent, and he made everything smooth, from airport pickup to meetings. I didn't have to worry about anything.",
  },
  {
    name: "Claire Dubois",
    country: "France",
    text: "I was traveling alone and felt very comfortable with Jun. He is kind, attentive, and has a great sense of humor. It felt more like being driven by a friend than a service.",
  },
  {
    name: "Li Wei",
    country: "China",
    text: "Jun helped me not only with transportation but also with communication during my meetings. He is reliable, patient, and very professional. I highly recommend his service.",
  },
  {
    name: "Takashi Yamamoto",
    country: "Japan",
    text: "Very punctual and polite. The car was clean, and the ride was smooth. Jun's calm and respectful manner made the whole experience very pleasant.",
  },
  {
    name: "Daniel Tan",
    country: "Singapore",
    text: "Everything was well organized and efficient. Jun understands what travelers need and delivers a high-quality service. I would definitely use his service again.",
  },
  {
    name: "Charlotte Evans",
    country: "UK",
    text: "We travelled in Seoul as a family, and Jun made everything wonderfully easy for us. He was patient, thoughtful, and especially kind to our children. The journey was comfortable and stress-free throughout. We felt very well looked after and would happily recommend him to other families visiting Seoul.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      <div
        className="pointer-events-none absolute -top-10 right-4 lg:right-20 text-[12rem] lg:text-[18rem] font-normal text-gold/6 leading-none select-none"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        05
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-16">
            <div className="flex justify-center">
              <SectionLabel number="05" label="Testimonials" />
            </div>
            <h2
              className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-normal text-primary mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What <span className="italic text-gold">Guests Say</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <StarRating />
              <span className="text-sm text-text-light">5.0 average rating</span>
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 80}>
              <div className="group relative h-full bg-white rounded-sm border border-border p-8 hover:shadow-xl hover:border-gold/30 transition-all duration-500 hover:-translate-y-1">
                <span
                  className="absolute top-4 right-6 text-7xl leading-none text-gold/15 group-hover:text-gold/30 transition-colors pointer-events-none select-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;
                </span>

                <StarRating />
                <p className="text-text-light text-sm leading-relaxed mt-5 mb-8 relative">
                  {review.text}
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-full bg-linear-to-br from-gold/30 to-gold/10 flex items-center justify-center text-xs font-semibold text-gold-dark tracking-wider border border-gold/30">
                      {getInitials(review.name)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary">{review.name}</div>
                    <div className="text-[11px] tracking-[0.2em] uppercase text-gold-dark font-medium">
                      {review.country}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
