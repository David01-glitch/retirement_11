import LegalLayout from '../components/LegalLayout';
import heroImg from '../assets/images/hero/retirement-garden.jpg';

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      description="We respect your privacy. This page explains what we collect, why we collect it, and the choices you have."
      image={heroImg}
      crumbs={['Privacy']}
      lastUpdated="May 1, 2026"
    >
      <p>
        Retirement Hobby Hub ("we", "us", "our") operates the website at retirementhobbyhub.com (the "Service").
        This Privacy Policy explains how we collect, use, and protect information when you visit our Service,
        subscribe to our newsletter, or participate in our community features.
      </p>

      <h2>Information We Collect</h2>
      <h3>Information you provide directly</h3>
      <ul>
        <li><strong>Email address</strong> — when you subscribe to our weekly newsletter or contact us through the website.</li>
        <li><strong>Name and message content</strong> — when you fill out our contact form to reach our editorial team.</li>
        <li><strong>Comments and posts</strong> — when you participate in community discussions, challenges, or forums.</li>
      </ul>

      <h3>Information collected automatically</h3>
      <ul>
        <li><strong>Usage data</strong> — pages visited, time on page, referring website, device type, browser, and approximate location (city-level).</li>
        <li><strong>Cookies and similar technologies</strong> — small files stored on your device that help us remember preferences and measure how the Service is used.</li>
      </ul>

      <h2>How We Use Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>To deliver the Service, including newsletters, tutorials, and community features.</li>
        <li>To improve content and design based on aggregated usage patterns.</li>
        <li>To respond to support requests, partnership inquiries, and reader feedback.</li>
        <li>To protect against fraud, spam, and abuse of our community spaces.</li>
        <li>To comply with our legal obligations.</li>
      </ul>

      <h2>Cookies and Analytics</h2>
      <p>
        We use Google Analytics 4 (property G-4J046JXWVC) to understand how visitors use the Service. Google
        Analytics uses cookies to collect anonymized usage data. You can opt out at any time by declining cookies
        in our consent banner, by using browser settings, or by installing the{' '}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>.
      </p>
      <p>Cookie categories we use:</p>
      <ul>
        <li><strong>Strictly necessary</strong> — required for the site to function (session, security, consent record).</li>
        <li><strong>Analytics</strong> — Google Analytics, set only after you accept the consent banner.</li>
      </ul>

      <h2>Sharing of Information</h2>
      <p>
        We do not sell, rent, or trade your personal information. We share information only with the following
        categories of recipients, and only as necessary:
      </p>
      <ul>
        <li><strong>Service providers</strong> — hosting, email delivery, and analytics partners that process data on our behalf under contract.</li>
        <li><strong>Legal authorities</strong> — when required by law, court order, or to protect rights, safety, and property.</li>
      </ul>

      <h2>Your Rights</h2>
      <p>Depending on where you live, you may have the following rights:</p>
      <ul>
        <li><strong>Access</strong> — request a copy of the personal information we hold about you.</li>
        <li><strong>Correction</strong> — request that we correct inaccurate information.</li>
        <li><strong>Deletion</strong> — request deletion of your personal information.</li>
        <li><strong>Opt out</strong> — unsubscribe from our newsletter at any time using the link in every email.</li>
        <li><strong>Withdraw consent</strong> — change cookie preferences at any time.</li>
      </ul>
      <p>
        To exercise any of these rights, email us at <a href="mailto:retirementhobbyhub@gmail.com">retirementhobbyhub@gmail.com</a>.
        We will respond within 30 days.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain newsletter subscriber data for as long as you are subscribed plus 12 months for compliance
        records. Contact form messages are kept for 24 months. Aggregate analytics data is retained for up to 26
        months in line with Google Analytics defaults.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Our Service is designed for adults 50+ and is not directed to children under 13. We do not knowingly
        collect personal information from children. If you believe a child has provided information to us,
        please contact us so we can delete it.
      </p>

      <h2>International Visitors</h2>
      <p>
        Our servers are located in the United States. If you visit from outside the United States, you
        understand that your information will be transferred to and processed in the United States, where data
        protection laws may differ from those in your jurisdiction.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the new version on this page and
        update the "Last updated" date above. For material changes, we will notify newsletter subscribers by
        email.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about this Privacy Policy? Write to us:<br />
        <strong>Retirement Hobby Hub</strong><br />
        245 Cedar Lane<br />
        Phoenix, AZ 85001, USA<br />
        Email: <a href="mailto:retirementhobbyhub@gmail.com">retirementhobbyhub@gmail.com</a>
      </p>
    </LegalLayout>
  );
}
