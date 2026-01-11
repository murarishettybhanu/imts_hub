import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p>
                IMTS HUB Private Limited ("we," "us," "our," or "Company") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                <li>Financial Data: Financial information, such as data related to your payment method that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
                <li>Data From Social Networks: User information from social networks, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.</li>
                <li>Mobile Device Data: Device information, such as your mobile device ID, model, manufacturer, operating system, and information about your location, depending on your mobile device settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Use of Your Information</h2>
              <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email you regarding your order or other product/service information</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site</li>
                <li>Generate a personal profile about you for internal purposes</li>
                <li>Increase the efficiency and operation of the Site</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
                <li>Notify you of updates to the Site</li>
                <li>Process your transactions and send related information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Disclosure of Your Information</h2>
              <p>
                We may share or disclose your information in the following situations: by law or if we believe in good faith that such disclosure is necessary to (a) comply with applicable laws and regulations, (b) respond to your requests, or (c) protect the rights, property, and safety of the Company or others.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
                <br />
                Email: contact@imtshub.com
                <br />
                IMTS HUB Private Limited
              </p>
            </section>

            <section>
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PrivacyPolicy;
