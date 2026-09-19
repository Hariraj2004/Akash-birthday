import React from 'react';

interface Memory {
  src: string;
  alt: string;
  className: string;
  label: string;
}

const memories: Memory[] = [
  {
    src: '/images/WhatsApp_Image_2026-09-19_at_7.24.55_AM.jpeg',
    alt: 'Akash by a palm tree at the beach',
    className: 'memory memory-tall',
    label: 'Ocean air'
  },
  {
    src: '/images/WhatsApp_Image_2026-09-19_at_7.25.13_AM.jpeg',
    alt: 'Akash holding colorful lights',
    className: 'memory memory-tall',
    label: 'Bright spirit'
  },
  {
    src: '/images/WhatsApp_Image_2026-09-19_at_7.25.38_AM.jpeg',
    alt: 'Akash sharing a joyful family moment',
    className: 'memory memory-tall',
    label: 'Pure joy'
  },
  {
    src: '/images/WhatsApp_Image_2026-09-19_at_7.26.59_AM.jpeg',
    alt: 'Akash standing before a colorful mural',
    className: 'memory memory-tall',
    label: 'In full colour'
  },
  {
    src: '/images/WhatsApp_Image_2026-09-19_at_7.27.28_AM.jpeg',
    alt: 'Akash enjoying a quiet night by the road',
    className: 'memory memory-tall',
    label: 'Night stories'
  },
  {
    src: '/images/WhatsApp_Image_2026-09-19_at_7.25.58_AM.jpeg',
    alt: 'Akash on a peaceful green road',
    className: 'memory memory-wide',
    label: 'Keep moving forward'
  }
];

export default function App() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 text-on-photo mix-blend-difference md:px-9">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
          A special edition
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
          19 · 09 · 2026
        </span>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <img
          src="/images/WhatsApp_Image_2026-09-19_at_7.25.58_AM.jpeg"
          alt="Akash surrounded by greenery"
          className="hero-photo"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-on-photo/80">
            The celebration of
          </p>
          <h1 className="font-display text-6xl italic leading-[0.86] text-on-photo sm:text-7xl md:text-9xl">
            Happy Birthday
            <br />
            <span className="text-primary">Akash.</span>
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-20 bg-on-photo/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-on-photo/70">
              A day made for you
            </span>
          </div>
        </div>
      </header>

      {/* Heart of it all / Intro note */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-36">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.22em] text-primary">
          The heart of it all
        </p>
        <h2 className="font-display text-4xl leading-tight md:text-6xl">
          Here’s to a year as vibrant as your spirit and as boundless as the adventures ahead.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
          Akash, may this birthday bring you unforgettable moments, genuine laughter, and every happiness you deserve. Keep shining, keep exploring, and keep being wonderfully you.
        </p>
      </section>

      {/* Main Photo Story Section */}
      <section className="mx-auto max-w-7xl px-4 pb-28 md:px-8 md:pb-40">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          <figure className="relative overflow-hidden rounded-lg md:col-span-8 md:row-span-2">
            <img
              src="/images/WhatsApp_Image_2026-09-19_at_7.24.36_AM.jpeg"
              alt="Akash posing on a colorful surfboard inside a painted wave"
              className="h-full min-h-[620px] w-full object-cover object-center md:min-h-[900px]"
            />
            <figcaption className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.2em] text-on-photo">
              Ride every wave
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-lg md:col-span-4">
            <img
              src="/images/WhatsApp_Image_2026-09-19_at_7.23.49_AM.jpeg"
              alt="Akash with a friend at an airport"
              className="h-full min-h-[430px] w-full object-cover object-center"
            />
          </figure>

          <blockquote className="flex min-h-64 flex-col justify-center rounded-lg border border-accent/25 bg-accent/10 p-8 md:col-span-4">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              A birthday note
            </p>
            <p className="font-display text-2xl italic leading-snug">
              “To the guy who turns ordinary days into stories worth remembering. Happy Birthday, brother!”
            </p>
          </blockquote>
        </div>
      </section>

      {/* Memory Book Gallery */}
      <section className="bg-gallery py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                The memory book
              </p>
              <h2 className="font-display text-4xl italic md:text-6xl">
                Life in frames.
              </h2>
            </div>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Moments · laughter · life
            </span>
          </div>

          <div className="memory-grid">
            {memories.map((item) => (
              <figure key={item.src} className={item.className}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Best is Yet to Come */}
      <footer className="relative overflow-hidden bg-foreground px-6 py-32 text-center text-background md:py-44">
        <span className="closing-watermark">CELEBRATE</span>
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-6 text-3xl text-primary">✦</p>
          <h2 className="font-display text-5xl italic leading-tight md:text-8xl">
            The best is yet
            <br />
            to come.
          </h2>
          <p className="mx-auto mt-9 max-w-xl text-base leading-7 text-background/65">
            May the year ahead be full of good people, brave choices, beautiful places, and reasons to smile every single day.
          </p>
          <div className="mx-auto my-10 h-px w-20 bg-primary/60" />
          <p className="font-display text-2xl italic">Stay golden, Akash.</p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-background/45">
            With love, always
          </p>
        </div>
      </footer>
    </main>
  );
}
