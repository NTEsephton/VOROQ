import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary lift-on-hover mb-10">
          <ArrowLeft className="h-4 w-4" /> Back to VOROQ
        </Link>
        <img src="/logo-black.svg" alt="VOROQ" className="h-12 w-auto mb-8" />
        <h1 className="font-display text-4xl font-bold tracking-tighter mb-2">Privacy Policy</h1>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted mb-10">Last updated — September 2026</p>

        <div className="space-y-8 font-body text-sm sm:text-base leading-relaxed text-ink/80">
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-2">1. Information we collect</h2>
            <p>When you submit a form on this site, we collect your name, email address, phone number, and any project details you share with us. We also collect standard analytics data such as pages visited and referral source.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-2">2. How we use it</h2>
            <p>We use your information to respond to enquiries, prepare proposals, and — where you've opted in — send occasional updates about our services. We never sell your data to third parties.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-2">3. Data storage</h2>
            <p>Your information is stored securely and retained only as long as necessary to provide our services or as required by law.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-2">4. Your rights</h2>
            <p>You can request access to, correction of, or deletion of your personal data at any time by emailing VOROQ@voroq.co.uk.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-2">5. Contact</h2>
            <p>Questions about this policy? Reach us at VOROQ@voroq.co.uk.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
