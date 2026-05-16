export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Content
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn Podcast Transcripts into{" "}
          <span className="text-[#58a6ff]">SEO Blog Posts</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste your transcript, get a fully optimized blog post with meta description, key quotes, and headings — in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No credit card surprises.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "📝", title: "SEO Blog Post", desc: "Full article with H1/H2 structure, keyword density, and readability score." },
          { icon: "💬", title: "Key Quotes", desc: "Automatically pulls the most shareable quotes from your episode." },
          { icon: "🔍", title: "Meta Description", desc: "Ready-to-paste meta description under 160 characters for every post." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited transcript conversions",
              "SEO-optimized blog post output",
              "Key quotes extraction",
              "Meta description generation",
              "Export to Markdown or HTML",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What transcript formats are supported?",
              a: "You can paste plain text transcripts from any source — Descript, Otter.ai, Rev, or manual transcriptions. No special format required."
            },
            {
              q: "How long does it take to generate a blog post?",
              a: "Most transcripts are processed in under 30 seconds. Longer episodes (60+ min) may take up to a minute."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} PodcastSEO. All rights reserved.</p>
      </footer>
    </main>
  );
}
