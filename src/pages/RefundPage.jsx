import LegalLayout from '../components/LegalLayout';
import heroImg from '../assets/images/blog/herb-garden.jpg';

export default function RefundPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Refund & Return Policy"
      description="Our commitment: if you are not delighted, you get your money back. No questions, no friction."
      image={heroImg}
      crumbs={['Refund Policy']}
      lastUpdated="May 1, 2026"
    >
      <p>
        Retirement Hobby Hub offers a small selection of paid services, including the Sunday Letter Premium
        subscription, occasional digital workshops, and printed pattern bundles. This Refund & Return Policy
        explains how returns and refunds are handled for each.
      </p>

      <h2>The Short Version</h2>
      <blockquote>
        If you are not delighted with anything you purchase from us, write to us within 30 days at{' '}
        retirementhobbyhub@gmail.com and we will refund you in full. No forms, no questions, no friction.
      </blockquote>

      <h2>Sunday Letter Premium Subscriptions</h2>
      <h3>Monthly subscriptions</h3>
      <ul>
        <li>You may cancel at any time from your account page or by emailing us.</li>
        <li>Cancellation stops future charges. You retain access until the end of your current billing period.</li>
        <li>If you request a refund within 14 days of any monthly renewal, we will refund that month in full.</li>
      </ul>

      <h3>Annual subscriptions</h3>
      <ul>
        <li>Full refund within 30 days of purchase, no questions asked.</li>
        <li>After 30 days, pro-rated refunds on request for the unused portion of your subscription.</li>
        <li>Cancellation at any time stops the auto-renewal at the end of the annual period.</li>
      </ul>

      <h2>Digital Workshops & Courses</h2>
      <ul>
        <li>Full refund within 14 days of purchase if you have completed less than 30% of the material.</li>
        <li>After 14 days or 30% completion, refunds are reviewed case-by-case — write to us with your concern and we will respond within 2 business days.</li>
        <li>Workshop materials remain available for replay for 12 months after purchase.</li>
      </ul>

      <h2>Printed Pattern Bundles & Physical Goods</h2>
      <ul>
        <li>Returns accepted within 30 days of delivery, in original condition.</li>
        <li>You are responsible for return shipping unless the item arrived damaged or incorrect.</li>
        <li>Refunds are issued to the original payment method within 5-7 business days of receiving the returned item.</li>
        <li>If your item arrived damaged or incorrect, send us a photograph and we will ship a replacement at no cost.</li>
      </ul>

      <h2>How to Request a Refund</h2>
      <ol>
        <li>Email <a href="mailto:retirementhobbyhub@gmail.com">retirementhobbyhub@gmail.com</a> with the subject line "Refund request".</li>
        <li>Include your order number (found in your purchase confirmation email) or the email address used to purchase.</li>
        <li>Optionally, tell us what didn't work for you — this helps us improve for future members, but it is not required.</li>
        <li>We respond within one business day and refunds are processed within 5-7 business days.</li>
      </ol>

      <h2>Non-Refundable Items</h2>
      <p>The following are not eligible for refunds:</p>
      <ul>
        <li>Donations or one-time tips to the editorial team.</li>
        <li>Custom or personalized printed goods after production has started.</li>
        <li>Digital downloads explicitly marked as final-sale (clearly noted at checkout).</li>
      </ul>

      <h2>Chargebacks</h2>
      <p>
        If you have a billing concern, please contact us before initiating a chargeback. We can almost always
        resolve issues directly and far more quickly than the bank dispute process. Chargebacks filed without
        first contacting us may result in account suspension.
      </p>

      <h2>Questions</h2>
      <p>
        Refund questions, billing issues, or anything else — write to <a href="mailto:retirementhobbyhub@gmail.com">retirementhobbyhub@gmail.com</a> or
        mail us at 245 Cedar Lane, Phoenix, AZ 85001, USA. We treat every message personally.
      </p>
    </LegalLayout>
  );
}
