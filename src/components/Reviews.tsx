const reviews = [
  {
    name: "James Miller",
    country: "USA",
    flag: "🇺🇸",
    text: "Jun was incredibly professional and easy to communicate with from the start. His English is excellent, and he made everything smooth, from airport pickup to meetings. I didn't have to worry about anything.",
  },
  {
    name: "Claire Dubois",
    country: "France",
    flag: "🇫🇷",
    text: "I was traveling alone and felt very comfortable with Jun. He is kind, attentive, and has a great sense of humor. It felt more like being driven by a friend than a service.",
  },
  {
    name: "Li Wei",
    country: "China",
    flag: "🇨🇳",
    text: "Jun helped me not only with transportation but also with communication during my meetings. He is reliable, patient, and very professional. I highly recommend his service.",
  },
  {
    name: "Takashi Yamamoto",
    country: "Japan",
    flag: "🇯🇵",
    text: "Very punctual and polite. The car was clean, and the ride was smooth. Jun's calm and respectful manner made the whole experience very pleasant.",
  },
  {
    name: "Daniel Tan",
    country: "Singapore",
    flag: "🇸🇬",
    text: "Everything was well organized and efficient. Jun understands what travelers need and delivers a high-quality service. I would definitely use his service again.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3">
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
    <section id="reviews" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-gold/10 text-gold-dark text-xs tracking-[0.2em] uppercase mb-6 rounded-sm">
            Testimonials
          </div>
          <h2
            className="text-3xl sm:text-4xl font-semibold text-primary mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Customers Say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-sm border border-border p-7 hover:shadow-lg hover:border-gold/20 transition-all duration-300"
            >
              <StarRating />
              <p className="text-text-light text-sm leading-relaxed mb-5 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-lg">
                  {review.flag}
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">{review.name}</div>
                  <div className="text-xs text-text-light">{review.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
