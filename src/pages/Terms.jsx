import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-background text-black dark:text-ink">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary lift-on-hover mb-10">
          <ArrowLeft className="h-4 w-4" /> Back to VOROQ
        </Link>
        <img src="/logo-black.svg" alt="VOROQ" className="h-12 w-auto mb-8 dark:invert" />
        <h1 className="font-display text-4xl font-bold tracking-tighter mb-2">Terms of Service</h1>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-black/50 dark:text-muted mb-10">Last updated — September 2026</p>

        <div className="space-y-8 font-body text-sm sm:text-base leading-relaxed text-black/70 dark:text-ink/80">
          <section>
            <h2 className="font-display text-xl font-semibold text-black dark:text-ink mb-2">1. Services</h2>
            <p>VOROQ provides website design and landing page development services under individually agreed project scopes and statements of work.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-black dark:text-ink mb-2">2. Engagements</h2>
            <p>Project timelines, deliverables, and pricing are confirmed in writing before work begins. Changes to scope may affect timeline and cost.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-black dark:text-ink mb-2">3. Payment</h2>
            <p>Invoices are due per the schedule set out in your project agreement. Late payment may result in a pause of active work.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-black dark:text-ink mb-2">4. Intellectual property</h2>
            <p>Ownership of final deliverables transfers to the client upon full payment. VOROQ retains the right to showcase completed work in its portfolio.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-black dark:text-ink mb-2">5. Liability</h2>
            <p>VOROQ is not liable for indirect or consequential losses arising from use of delivered work. Our total liability is limited to fees paid for the relevant engagement.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-black dark:text-ink mb-2">6. Contact</h2>
            <p>Questions about these terms? Reach us at VOROQ@voroq.co.uk.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
