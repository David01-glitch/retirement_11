import LegalLayout from '../components/LegalLayout';
import heroImg from '../assets/images/blog/wooden-bookshelf.jpg';

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      description="The rules that keep our community kind, safe, and inspiring for everyone."
      image={heroImg}
      crumbs={['Terms']}
      lastUpdated="May 1, 2026"
    >
      <p>
        Welcome to Retirement Hobby Hub. By accessing or using our website at retirementhobbyhub.com (the
        "Service"), you agree to be bound by these Terms & Conditions. Please read them carefully. If you do
        not agree to these terms, please do not use the Service.
      </p>

      <h2>1. Who We Are</h2>
      <p>
        Retirement Hobby Hub is a blog and online community for retirees and adults 50+ focused on gardening,
        woodworking, painting, knitting, cooking, photography, and creative DIY crafts. We are based at 245
        Cedar Lane, Phoenix, AZ 85001, USA. You can reach us at retirementhobbyhub@gmail.com.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        The Service is intended for users who are at least 18 years old. By using the Service, you confirm that
        you meet this requirement and that you are legally able to enter into binding agreements.
      </p>

      <h2>3. Use of the Service</h2>
      <p>You may use the Service for personal, non-commercial purposes. You agree that you will not:</p>
      <ul>
        <li>Copy, reproduce, or republish our articles, tutorials, or photography without written permission.</li>
        <li>Use automated systems (scrapers, bots, spiders) to access the Service.</li>
        <li>Attempt to interfere with, disrupt, or compromise the Service.</li>
        <li>Use the Service to send unsolicited messages, spam, or commercial promotions.</li>
        <li>Impersonate another person or misrepresent your affiliation with any organization.</li>
        <li>Post content that is unlawful, harmful, threatening, defamatory, obscene, or harassing.</li>
      </ul>

      <h2>4. User-Generated Content</h2>
      <p>
        When you post comments, share project photos, or contribute to community discussions, you retain
        ownership of your content. However, you grant Retirement Hobby Hub a non-exclusive, royalty-free,
        worldwide license to display, distribute, and adapt your content for the purpose of operating and
        promoting the Service.
      </p>
      <p>
        You are responsible for your content. We may remove any content that we believe, in our sole
        discretion, violates these Terms or is otherwise harmful to the community.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All content on the Service that is not user-generated — including articles, tutorials, photography,
        illustrations, logos, and design — is owned by Retirement Hobby Hub or our licensors and is protected
        by copyright, trademark, and other intellectual property laws.
      </p>

      <h2>6. Newsletter</h2>
      <p>
        By subscribing to our weekly newsletter, you consent to receive emails from us. You can unsubscribe at
        any time using the link in every email or by contacting us directly.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        The Service may contain links to third-party websites or services. We are not responsible for the
        content, privacy practices, or availability of those external sites.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        Our tutorials and project guides are provided for educational and recreational purposes only. Please
        exercise caution when working with tools, plants, food, or heat. Always follow manufacturer safety
        instructions and consult a professional when in doubt.
      </p>
      <p>
        The Service is provided "as is" and "as available" without warranties of any kind, either express or
        implied. We do not warrant that the Service will be uninterrupted, error-free, or completely secure.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Retirement Hobby Hub shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages arising from your use of the Service, including
        but not limited to injury, property damage, or loss of data resulting from following our tutorials or
        community advice.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Retirement Hobby Hub, its officers, employees, and contributors
        from any claims, damages, or expenses arising from your violation of these Terms or your misuse of the
        Service.
      </p>

      <h2>11. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your access to the Service at any time, with or without
        notice, for conduct that we believe violates these Terms or is harmful to other users or to us.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Arizona, United States, without regard to its
        conflict of law provisions. Any disputes shall be resolved in the courts located in Maricopa County,
        Arizona.
      </p>

      <h2>13. Changes to These Terms</h2>
      <p>
        We may modify these Terms from time to time. Material changes will be communicated through the website
        and, where appropriate, by email to newsletter subscribers. Continued use of the Service after changes
        constitutes acceptance of the new Terms.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about these Terms? Email <a href="mailto:retirementhobbyhub@gmail.com">retirementhobbyhub@gmail.com</a> or
        write to 245 Cedar Lane, Phoenix, AZ 85001, USA.
      </p>
    </LegalLayout>
  );
}
