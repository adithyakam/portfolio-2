// ---------- scrollTrigger plugin registration
gsap.registerPlugin(ScrollTrigger);

// ---------- card component
const Card = ({ imgSrc }) => {
  return (
    <div className="card">
      {/* cover */}
      <figure className="card-cover-container">
        {/* cover image */}
        <img src={imgSrc} className="card-cover" />
      </figure>
    </div>
  );
};

// ---------- react app
const App = () => {
  // ---------- gsap context
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ---------- lenis integration for smooth scroll
      const lenis = new Lenis();

      function raf(time) {
        lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // ---------- card parallax effect
      const cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        gsap.to(card.querySelector(".card-cover"), {
          yPercent: 25,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            marker: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    // ---------- cards ----------
    <section className="cards">
      <Card imgSrc="https://source.unsplash.com/user/tmokuenko" />
      <Card imgSrc="https://source.unsplash.com/user/wenhao_ryan" />
      <Card imgSrc="https://source.unsplash.com/user/mo_design_3d" />
      <Card imgSrc="https://source.unsplash.com/user/zetong" />
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
