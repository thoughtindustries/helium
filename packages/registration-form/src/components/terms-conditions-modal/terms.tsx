import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { isEmpty } from 'lodash';
import { useTermsAndConditionsContext } from '../terms-conditions/terms-conditions';
import parse from 'html-react-parser';

const GlobalTerms = ({ globalTerms }: { globalTerms: string }): JSX.Element => {
  const query = gql`
    query CompanyDetailsQuery {
      CompanyDetails {
        __typename
        name
      }
    }
  `;

  const { data } = useQuery(query);
  const companyName = data && data.CompanyDetails.name;
  // Apply tailwind stylings to global terms
  if (globalTerms.includes('<ol>')) {
    globalTerms = globalTerms.replace(
      '<ol>',
      '<ol className="text-sm mb-4 text-gray-600 list-decimal pl-8">'
    );
  }
  if (globalTerms.includes('<ul>')) {
    globalTerms = globalTerms.replace(
      '<ul>',
      '<ul className="text-sm mb-4 text-gray-600 list-disc pl-8">'
    );
  }
  const content = parse(globalTerms);

  return (
    <>
      <h4 className="font-bold text-xl text-gray-800 mb-4">{companyName}</h4>
      <div>{content}</div>
      <div className="w-full border-t border-gray-200 my-4" />
    </>
  );
};

const TermsConditionsModal = (): JSX.Element => {
  const { globalTerms } = useTermsAndConditionsContext();

  return (
    <>
      {!isEmpty(globalTerms) ? <GlobalTerms globalTerms={globalTerms} /> : null}
      <h4 className="font-bold text-xl text-gray-800 mb-4">
        Thought Industries Terms &amp; Conditions
      </h4>
      <div>
        <h5 className="font-bold text-center text-gray-800 mb-4">CONDITIONS OF USE</h5>

        <p className="text-sm mb-4 text-gray-600">
          Welcome to ThoughtIndustries.com. Thought Industries, Inc. and/or its affiliates (“Thought
          Industries”) provide an online learning infrastructure and hosting solution (“TI Service”)
          for use by its subscribers to create customized online learning and ecommerce websites
          (“Subscribers&apos; Websites”).
        </p>

        <p className="text-sm mb-4 text-gray-600">
          PLEASE READ THIS DOCUMENT CAREFULLY. IT CONTAINS VERY IMPORTANT INFORMATION ABOUT YOUR
          RIGHTS AND OBLIGATIONS, AS WELL AS LIMITATIONS AND EXCLUSIONS.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS AND CONDITIONS, YOU MAY NOT ACCESS TI
          SERVICE.
        </p>

        <h6 className="font-bold mb-4">
          <u>USE OF TI SERVICE</u>
        </h6>

        <p className="text-sm mb-4 text-gray-600">
          You agree not to use TI Service for any unauthorized or illegal purpose. You will be
          responsible for ensuring that you do not violate any laws in your jurisdiction. You agree
          not to upload or transmit viruses, worms, malware, or any other code that will damage or
          impair the TI Service. You accept sole responsibility for all your activities using TI
          Service, including any content you transmit, submit, post or share on Subscribers&apos;
          Website and/or TI Service.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          In addition to all the above prohibitions, you agree that you will not knowingly use the
          TI Service to:
        </p>

        <p className="text-sm mb-4 text-gray-600">
          (a) upload, post, email, transmit, or otherwise make available any unsolicited or
          unauthorized advertising, promotional materials, &quot;junk mail,&quot; &quot;spam,&quot;
          &quot;chain letters,&quot; &quot;pyramid schemes,&quot; or any other form of solicitation;
          or
        </p>

        <p className="text-sm mb-4 text-gray-600">
          (b) Spam or engage in unethical marketing, advertising, any other practice connected in
          any way to spam including, sending content or emails which do not comply with the CAN-SPAM
          Act of 2003.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          Thought Industries reserves the right to investigate any of your activity involving the
          use of TI Service.
        </p>

        <h6 className="font-bold mb-4">
          <u>INTELLECTUAL PROPERTY</u>
        </h6>

        <p className="text-sm mb-4 text-gray-600">
          TI Service is the property of Thought Industries, Inc. Unless otherwise stated, all
          content is protected by the Copyright Laws of the United States in addition to foreign
          copyright laws and international conventions and treaties. Thought Industries does not
          claim any intellectual property rights over content on Subscribers&apos; Websites. All
          rights are reserved unless otherwise stated.
        </p>

        <h6 className="font-bold mb-4">
          <u>CONTENT ON SUBSCRIBER&apos;S WEBSITE</u>
        </h6>

        <p className="text-sm mb-4 text-gray-600">
          Thought Industries does not monitor its Subscribers&apos; Websites or any contents placed
          on Subscribers&apos; Websites. References to any products or links to third party sites
          provided by Subscribers on Subscribers&apos; Websites are not owned or controlled by
          Thought Industries. Thought Industries has no control over, and assumes no responsibility
          for any content, product offered for sale or sold by Subscribers, any third party content,
          and the polices of Subscribers&apos; or any third party. Thought Industries does not
          endorse, recommend or favor any products offered for sale or sold by Subscribers.
        </p>

        <h6 className="font-bold mb-4">
          <u>YOUR ACCOUNT AND PROFILE</u>
        </h6>

        <p className="text-sm mb-4 text-gray-600">
          In order to use a Subscriber&apos;s Website, you must set up an account. Thought
          Industries will only use your information to supply the TI Service in accordance with its
          Privacy Policy. You acknowledge and agree that any information supplied to Thought
          Industries, including without limitation payment information may be used by Thought
          Industries to supply the TI Service. You are solely responsible for the security of your
          account and must protect your password. You are fully responsible for all activities that
          occur under your account and you agree not to permit anyone else to use your account.
        </p>

        <h6 className="font-bold mb-4">
          <u>WARRANTY DISCLAIMER AND LIMITATION OF LIABILITY</u>
        </h6>

        <p className="text-sm mb-4 text-gray-600">
          TO THE FULLEST EXTENT PERMITTED BY LAW, THOUGHT INDUSTRIES, ITS OFFICERS, DIRECTORS,
          EMPLOYEES, AND AGENTS DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH TI
          SERVICE AND SUBSCRIBERS&apos; WEBSITES AND YOUR USE THEREOF. THOUGHT INDUSTRIES MAKES NO
          WARRANTIES OR REPRESENTATIONS REGARDING THE ACCURACY OR COMPLETENESS OF SUBSCRIBER&apos;S
          CONTENT ON SUBSCRIBERS&apos; WEBSITE OR THE CONTENT OF ANY SITES LINKED TO THE
          SUBSCRIBER&apos;S WEBSITE.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          IN NO EVENT SHALL THOUGHT INDUSTRIES, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE
          LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL
          DAMAGES WHATSOEVER RESULTING FROM ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF ANY CONTENT
          ON SUBSCRIBERS&apos; WEBSITES, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
          WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF TI SERVICE, (III) ANY UNAUTHORIZED
          ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR
          OTHER INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR
          FROM TI SERVICE OR SUBSCRIBERS&apos; WEBSITES, (IV) ANY BUGS, VIRUSES, TROJAN HORSES, OR
          THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH TI SERVICE OR SUBSCRIBERS&apos; WEBSITES
          BY ANY THIRD PARTY, AND/OR (V) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR
          DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED,
          TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA TI SERVICE OR SUBSCRIBERS&apos; WEBSITES. THE
          FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN
          THE APPLICABLE JURISDICTION.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          YOU SPECIFICALLY ACKNOWLEDGE THAT THOUGHT INDUSTRIES SHALL NOT BE LIABLE FOR
          SUBSCRIBER&apos;S CONTENT OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD
          PARTY AND THAT THE RISK OF HARM OR DAMAGE FROM THE FOREGOING RESTS ENTIRELY WITH YOU.
          THOUGHT INDUSTRIES DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY
          PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH TI SERVICE OR
          SUBSCRIBERS&apos; WEBSITES OR ANY HYPERLINKED WEBSITE OR FEATURED IN ANY BANNER OR OTHER
          ADVERTISING, AND THOUGHT INDUSTRIES WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE
          FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR
          SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
          ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
          THOUGHT INDUSTRIES MAKES NO REPRESENTATIONS THAT THE TI SERVICE IS APPROPRIATE OR
          AVAILABLE FOR USE IN ALL LOCATIONS. THOSE WHO ACCESS OR USE THE TI SERVICE FROM
          JURISDICTIONS PROHIBITING SUCH USE, DO SO AT THEIR OWN VOLITION AND ARE RESPONSIBLE FOR
          COMPLIANCE WITH LOCAL LAW.
        </p>

        <h6 className="font-bold mb-4">
          <u>INDEMNITY</u>
        </h6>

        <p className="text-sm mb-4 text-gray-600">
          You agree to defend, indemnify and hold harmless Thought Industries, its parent
          corporation, officers, directors, employees and agents, from and against any and all
          claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including
          but not limited to attorney&apos;s fees) arising from: (i) your use of and access to TI
          Service or Subscribers&apos; Websites; (ii) your violation of any term of these Conditions
          of Use; (iii) your violation of any third party right, including without limitation any
          copyright, property, or privacy right; or (iv) any claim that your content caused damage
          to a third party. This defense and indemnification obligation will survive these
          Conditions of Use and your use of the TI Service.
        </p>

        <h6 className="font-bold mb-4">
          <u>FORCE MAJEURE</u>
        </h6>

        <p className="text-sm mb-4 text-gray-600">
          Thought Industries shall not be liable, under any circumstances, for any delay, disruption
          or failure of the TI Service or Subscribers&apos; Websites directly or indirectly
          resulting from events beyond the control of Thought Industries.
        </p>

        <h6 className="font-bold mb-4">
          <u>SUBSCRIBERS&apos; CONDITIONS</u>
        </h6>

        <p className="text-sm mb-4 text-gray-600">
          Thought Industries does not take any responsibility for any additional condition of use of
          Subscribers&apos; Website. Any additional conditions of use or policies of Thought
          Industries Subscribers shall not limit or modify any of the terms of this Condition of Use
          including, without limitation, the Warranty Disclaimers and Limitation of Liability
          section stipulated above.
        </p>

        <h6 className="font-bold mb-4">
          <u>AUTHORIZED USER REFUNDS</u>
        </h6>

        <p className="text-sm mb-4 text-gray-600">
          Any claim seeking a refund by an authorized user of the Thought Industries service is
          governed by the applicable terms and conditions/terms of service issued by the provider of
          the service to authorized users (the provider of the service is Thought Industries&apos;
          contracted customer, which then makes the service available to authorized users). The
          provider of the service should be contacted directly with any claim by an authorized user
          for a refund. Thought Industries does not provide refunds to authorized users.
        </p>

        <h6 className="font-bold mb-4">
          <u>PRIVACY POLICY</u>
        </h6>

        <p className="text-sm mb-4 text-gray-600">
          <u>Effective Date:</u>
          &nbsp;May 25, 2018.
          <br />
          <u>Last Updated Date:</u>
          &nbsp;February 3, 2020.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          Thought Industries
          <br />
          3 Post Office Square
          <br />
          Boston, MA 02109
          <br />
          <a href="mailto:support@thoughtindustries.com">support@thoughtindustries.com</a>
        </p>

        <p className="text-sm mb-4 text-gray-600">
          This Privacy Policy describes how Thought Industries, Inc. (&ldquo;Thought
          Industries&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects
          personal information about you, uses your personal information, discloses your personal
          information, or the limited circumstances by which we may share your personal information
          with others. We do not sell your personal information for any purpose.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          At Thought Industries we transform how learning experiences are created, managed, and
          delivered.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          This Privacy Policy applies to all personal information or personal data that may be
          collected by us from you directly or from our customers using Thought Industries&rsquo;
          services, to establish and maintain your account, or to any personal information or
          personal data that may be part of the content that you submit or manage using our
          services.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          Please contact us at{' '}
          <a href="mailto:support@thoughtindustries.com">support@thoughtindustries.com</a> if (i)
          you wish to find out more about our use and disclosure of your personal data and how to
          limit it, (ii) you wish to exercise your right to access, amend, or delete any personal
          data we hold about you; or (iii) you have any other questions or concerns about this
          Privacy Policy.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          The California Consumer Privacy Act of 2018 (the &ldquo;CCPA&rdquo;). Thought Industries
          operates as a Service Provider as defined under the CCPA, processing personal information
          on behalf of our customers. Thought Industries will never &ldquo;sell&rdquo; your personal
          information as defined under the CCPA; and we only use your personal information to
          provide our services as agreed upon with our customers, and not for any other business or
          commercial purpose. California residents have specific rights under the CCPA regarding
          their personal information, and you may contact the business that collects your personal
          information (for which Thought Industries acts as a Service Provider only) to learn more
          about your rights under the CCPA.
        </p>

        <p className="text-sm mb-4 text-gray-600">Summary:</p>
        <ul className="text-sm mb-4 text-gray-600 list-disc pl-8">
          <li>
            You have many rights over the collection, use, disclosure, or sale of your personal
            information to include:
          </li>
          <ul className="list-disc mb-4 list-inside pl-8 list-outside">
            <li>
              Right to know what personal information we collect, use, disclose, or sell (Note: We
              never sell your personal information) about you;
            </li>
            <li>Right to delete your personal information;</li>
            <li>
              Right to opt-out of any sale of your personal information (Note: We never sell your
              personal information);
            </li>
            <li>Right to amend your personal information;</li>
            <li>Right to restrict the use of your personal information; and</li>
            <li>Right to non-discriminate against you for exercising your privacy rights.</li>
            <ul className="list-disc list-inside">
              <li>
                See Your Privacy Rights section and Requests to Exercise Rights section of this
                Privacy Policy for additional information.
              </li>
            </ul>
          </ul>
          <li>We use your information to:</li>
          <ul className="list-disc mb-4 list-outside pl-8">
            <li>
              Improve our website such as to see which features are most popular, counting visits,
              and improving our users&apos; experience by providing you a better, more intuitive,
              and satisfying experience of our services;
            </li>
            <li>Administer a contest, promotion, survey or other site feature;</li>
            <li>Send periodic emails;</li>
            <li>
              Set-up, maintain, and protect your data and account in order to utilize our services;
            </li>
            <li>To bill you for the use of our services; and</li>
            <li>Keeping our services secure</li>
          </ul>
          <li>
            We use cookies and other online data collection technologies. See Cookies Policy for
            additional information.
          </li>
        </ul>
        <p className="text-sm mb-4 text-gray-600">
          What information do we collect and the categories of information collected?
        </p>
        <p className="text-sm mb-4 text-gray-600">
          When you visit our site, request additional information about our services, or
          register/pay for our services, we collect the following information from you:
        </p>
        <p className="text-sm mb-4 text-gray-500">Personal Identification</p>
        <ul className="text-sm mb-4 text-gray-600 list-outside list-disc pl-8">
          <li>
            <u>Full Name</u>&nbsp;- collected to provide additional information, registration for
            services, and payment for services. For example, we may ask you to provide your name
            along with information about your general interest in our services. Your submission of
            this type of information as a guest on the Site is not required.
          </li>
        </ul>

        <p className="text-sm mb-4 text-gray-500">Personal Directory</p>
        <ul className="text-sm mb-4 text-gray-600 list-outside list-disc pl-8">
          <li>
            <u>Email Address</u>&nbsp;- collected to provide additional information, registration
            for services, and payment for services. For example, we may ask you to provide your
            email address along with information about your general interest in our services. Your
            submission of this type of information as a guest on the Site is not required.
          </li>
        </ul>
        <p className="text-sm mb-4 text-gray-500">Online Identifiers</p>
        <ul className="text-sm mb-4 text-gray-600 list-outside list-disc pl-8">
          <li>
            <u>IP Address</u>&nbsp;- collected when you visit our website as well as the time and
            duration of your visit and the pages on the website you visited. Our website receives
            the internet protocol (&ldquo;IP&rdquo;) address of your computer (or the proxy server
            you use to access the World Wide Web). We use your IP Address to help diagnose problems
            with our server, and to administer our Web site.
          </li>
          <li>
            <u>Cookies</u>&nbsp;- collected when you visit our website to include browser type. Our
            website receives your computer operating system and type of web browser you are using,
            email patterns, your mobile device (including your UDID) and mobile operating system (if
            you are accessing Our Site using a mobile device), as well as the name of your ISP or
            your mobile carrier. We use cookies, web beacons, and other techniques to identify your
            browser and device to your guest activity on our website. The cookies utilized by us are
            solely for the purpose of allowing our website and platform to function and perform
            better; there are no additional cookies utilized by Thought Industries for any
            third-party. See our Cookies Policy section for further information.
          </li>
          <li>
            <u>Geo Location</u>&nbsp;- collected when you visit our website. We use cookies, web
            beacons, and other techniques to identify your browser and device to your guest activity
            on our website.
          </li>
        </ul>
        <p className="text-sm mb-4 text-gray-500">Miscellaneous</p>
        <ul className="text-sm mb-4 text-gray-600 list-outside list-disc pl-8">
          <li>
            <u>Survey Responses</u>&nbsp; (where applicable) - collected to provide additional
            information about and improve service offering.
          </li>
          <li>
            <u>Web Analytics</u>&nbsp;- collected about your use of the website such as mouse clicks
            and scrolling activities. For example, we use Google Analytics. The providers of these
            web analytics tools may capture data about your activity on our website, via cookies and
            other techniques. This data is used only by Thought Industries for the operation,
            performance and improvement of our website and platform.
          </li>
          <li>
            <u>Referrer (from another website)</u>&nbsp;- collected to learn more about the activity
            on a referrer site. You may have arrived to our website by clicking on an advertisement
            or content published by a third party, that third party may provide information to us
            about your activity on their site. Due to the communications standards on the internet,
            when you visit Our Site we automatically receive the URL of the site from which you came
            and the site to which you are going when you leave Our Site.
          </li>
          <li>
            <u>Combination with Other Data</u>&nbsp;- we may combine information we collect about
            you as a website guest with the information we collect about you as a service user when
            you register for our service such as your name.
          </li>
        </ul>
        <p className="text-sm mb-4 text-gray-500">
          How do we use the information we collect about you and what is the legal basis for this
          use?
        </p>
        <ul className="text-sm mb-4 text-gray-600 list-outside list-disc pl-8">
          <li>
            To fulfill a contract - we&apos;ll use your personal information as part of contractual
            obligations we have when rendering you our services. This includes:
          </li>
          <ul className="text-sm mb-4 text-gray-600 list-outside list-disc pl-8">
            <li>Service Registration</li>
            <li>Identity Verification</li>
            <li>Billing/Payments</li>
            <li>Necessary Communications about services</li>
            <li>Customer Support</li>
          </ul>
          <li>To conduct business under a legitimate interest such as:</li>
          <ul className="text-sm mb-4 text-gray-600 list-outside list-disc pl-8">
            <li>
              Providing you with our website and services for which you have registered or
              requested;
            </li>
            <li>
              Analyzing your use of our website and service to better understand how they are being
              used to improve our website and service;
            </li>
            <li>Diagnose issues with our website and service;</li>
            <li>
              Deter, prevent, detect, and prosecute fraudulent activities or other
              security/technical related issues
            </li>
            <li>Protect against harm to the rights and freedoms of our users;</li>
            <li>Investigating and responding to any complaints; or</li>
            <li>
              In case of a merger or acquisition, your personal information may be considered one of
              the assets that is transferred as part of this arrangement.
            </li>
          </ul>
          <li>Legal obligations under the basis of common law or statute such as:</li>
          <ul className="text-sm mb-4 text-gray-600 list-outside list-disc pl-8">
            <li>
              Legal claims, compliance, or regulatory purposes as necessary to include any
              disclosures to comply with government requests, legal proceedings, or litigation;
            </li>
            <li>
              Responding to government or law enforcement authorities conducting investigations; or
            </li>
            <li>
              Deter, prevent, detect, and prosecute, fraud, illegal activities, security, or
              technical issues.
            </li>
          </ul>
          <li>
            Legitimate interest and our additional services: We&apos;ll use your personal
            information to provide you additional information about our services based on your
            consent and request for these services. This includes:
          </li>
          <ul className="text-sm mb-4 text-gray-600 list-outside list-disc pl-8">
            <li>Providing a demonstration of our services;</li>
            <li>Providing additional Information about our service offering;</li>
            <li>
              Placing cookies, web beacons, and other online data collection technologies according
              to our Cookies Policy section of this Privacy Policy and utilizing the information
              provided by these technologies;
            </li>
            <li>
              Providing periodic email marketing and updates to our services to include occasional
              company news, updates, related product or service information with the option to
              opt-out of future contact included as an Unsubscribe link at the bottom of the email
              to be removed from future emails; or
            </li>
            <li>
              Conducting surveys and market research about our customers, their interests, and their
              satisfaction of our services.
            </li>
          </ul>
          <li>
            Vital interests where the use or disclosure of your personal information is limited in
            scope and only applies to matters of life and death.
          </li>
          <li>
            Public interest where the use or disclosure of your personal information is related to
            the public good or in the best interest of society.
          </li>
        </ul>

        <p className="text-sm mb-4 text-gray-500">
          Sharing your personal information with third parties:
        </p>
        <p className="text-sm mb-4 text-gray-600">
          We do not sell, trade, or otherwise transfer to any third parties your personal
          information except for the purposes identified above and to the following categories of
          third parties that operate our website, conduct our business, or hired to services you as
          part of our service offering:
        </p>
        <ul className="text-sm mb-4 text-gray-600 list-outside list-disc pl-8">
          <li>Information and Cloud Service Providers</li>
          <li>Error Monitoring Service Providers</li>
          <li>File Type Conversion Providers</li>
          <li>Reporting Providers</li>
          <li>Marketing, Sales, and Advertising Partners</li>
          <li>Retailers and Resellers</li>
          <li>Payment Processors</li>
          <li>Fraud Monitoring and Prevention Providers</li>
        </ul>

        <p className="text-sm mb-4 text-gray-600">
          These third parties and our sharing of data (including personal data as described above)
          are necessary for the function, operation and improvement of our website and our platform.
          We require these companies to protect your personal data and comply with these privacy
          policies. We establish legally binding data protection agreements that implement specific
          data protection and privacy obligations of our third party service providers.
        </p>

        <p className="text-sm mb-4 text-gray-500">
          We may also share your personal information with third parties when:
        </p>
        <ul className="text-sm mb-4 text-gray-600 list-outside list-disc pl-8">
          <li>Required by law, subpoena, court order, or other legal proceeding;</li>
          <li>
            To prevent fraudulent or illegal activity including potential attacks or to protect
            against the harm to us, our clients, or the public; or
          </li>
          <li>New owners acquire or merge with us in a case of a merger or acquisition.</li>
        </ul>
        <p className="text-sm mb-4 text-gray-600">
          We may share anonymized/de-identified or aggregated information that does not identify you
          such as number of visitors to our site or other statistical information about our
          customers.
        </p>
        <p className="text-sm mb-4 text-gray-500">Displaying your information:</p>
        <p className="text-sm mb-4 text-gray-600">
          Our website and service offering may allow you to submit content or post comments. This
          information might be seen by others when you enter this information or create this
          content. Do not share any personal information in the creation of such content as it may
          be viewed or obtained by third parties.
        </p>

        <p className="text-sm mb-4 text-gray-500">Your Privacy Rights:</p>
        <p className="text-sm mb-4 text-gray-600">
          We consider the privacy of your personal information very important and are committed to
          handling your personal information with care. We abide by your rights to privacy to
          include:
        </p>
        <p className="text-sm mb-4 text-gray-500">Right to Access:</p>
        <p className="text-sm mb-4 text-gray-600">
          We acknowledge your right to access the personal information that we maintain about you.
          You have the right to obtain a list of the categories of personal information collected
          about you as well as other related information along with the source of the information.
          You also have the right to know the categories of information shared (or sold) to third
          parties and the purpose for such sharing as provided for in this Privacy Policy. More
          information on how you can request your right to access the personal information we
          collect, use, disclose, or sell can be found under Requests to Exercise Rights section of
          this Privacy Policy.
        </p>
        <p className="text-sm mb-4 text-gray-500">Right to Deletion:</p>
        <p className="text-sm mb-4 text-gray-600">
          We acknowledge your right to delete certain personal information that we may have
          collected about you. More information on how you can request your right to delete the
          personal information we collect, use, disclose, or sell can be found under Requests to
          Exercise Rights section of this Privacy Policy.
        </p>
        <p className="text-sm mb-4 text-gray-500">Right to Opt-out of Sharing:</p>
        <p className="text-sm mb-4 text-gray-600">
          You may have the right to opt-out of sharing certain Personal Information with third
          parties. More information on how to exercise this right to opt-out can be found under
          Requests to Exercise Rights section of this Privacy Policy.
        </p>
        <p className="text-sm mb-4 text-gray-500">Right to Amend/Rectify:</p>
        <p className="text-sm mb-4 text-gray-600">
          You have the right to amend or rectify any inaccuracies that you have identified with the
          information that we have about you. We process personal information only for the purposes
          for which it was collected and in accordance with this Privacy Policy or any applicable
          service-specific privacy notice. We review our data collection, storage, and processing
          practices to ensure that we only collect, store, and process the personal information
          needed to provide or improve our services. We take reasonable steps to ensure that the
          personal information we process is accurate, complete, and current, but we depend on our
          users to update or correct their personal information whenever necessary. More information
          on how you can request to amend or rectify your information can be found under Requests to
          Exercise Rights section of this Privacy Policy.
        </p>

        <p className="text-sm mb-4 text-gray-500">Right to Object/Restrict/Withdrawal Consent:</p>
        <p className="text-sm mb-4 text-gray-600">
          You have the right to object to the processing of your personal information if it is being
          processed under legitimate interests such as for direct marketing. You also have the right
          to withdraw your consent for the processing of your personal information at any time. We
          will cease processing of your information unless there is a legitimate purpose or required
          by law. We will primarily rely on your consent or legitimate interests for any use or
          disclosures that are not required by law.
        </p>
        <p className="text-sm mb-4 text-gray-500">Right to Non-Discrimination:</p>
        <p className="text-sm mb-4 text-gray-600">
          We will not discriminate or penalize you for exercising your rights.
        </p>
        <p className="text-sm mb-4 text-gray-500">Requests to Exercise Rights:</p>
        <p className="text-sm mb-4 text-gray-600">
          If you seek to exercise your rights to access, delete, opt-out, amend/rectify, or
          object/restrict/withdrawal consent, you have at least two (2) methods available:
        </p>
        <ol className="text-sm mb-4 text-gray-600 list-decimal pl-8">
          <li>
            <u>Interactive Web Form:</u>
            &nbsp;
            <a
              target="_blank"
              href="https://www.thoughtindustries.com/submit-ccpa-request"
              rel="noreferrer"
            >
              https://www.thoughtindustries.com/submit-ccpa-request
            </a>
          </li>
          <li>
            <u>Designated Email Address:</u>
            &nbsp; <a href="mailto:support@thoughtindustries.com">support@thoughtindustries.com</a>.
          </li>
        </ol>

        <p className="text-sm mb-4 text-gray-600">
          The methods for request will take two (2) steps: one to request the exercise of your
          rights and the other to verify your identity/request.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          We will respond to a request within ten (10) days and provide information on how it will
          be processed. We will respond to a request within forty-five (45) days that begins on the
          day the request was made. Note: It may take up to an additional forty-five (45) days to
          respond to a request for a maximum of ninety (90) days provided we notify you with an
          explanation within the initial forty-five (45) days to the reason why it is taking longer
          to fulfill the request.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          As part of the request, we need to verify your identity. Failure to verify identity may
          result in a denial of the request. We will notify you of the failure to verify the request
          and treat the request accordingly (i.e. request for delete will be treated as a request to
          opt-out of sharing/sale).
        </p>

        <p className="text-sm mb-4 text-gray-600">
          Once a request has been approved, we will honor the request to the best of our ability.
          The Record of request will be maintained for two (2) years.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          If fulfilling a request would reveal personal information about another or if you ask us
          to delete information that is required by law or defend ourselves against claims, your
          rights may be limited.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          If the request is denied, we will inform you of the denial and the basis for the denial.
          If the request was partially denied, we will notify you of the part that is exempt from
          the request and not use any personal information retained for any other purposes other
          that what may be exempt.
        </p>
        <p className="text-sm mb-4 text-gray-500">Fees</p>
        <p className="text-sm mb-4 text-gray-600">
          You can exercise your rights above free of charge or without penalty, but we may limit the
          number of requests you make or charge a reasonable fee as legally permitted if we find the
          request to be too burdensome or too frequent.
        </p>
        <p className="text-sm mb-4 text-gray-500">Authorized Agent</p>
        <p className="text-sm mb-4 text-gray-600">
          An authorized agent may be designated by you to exercise your rights. We will validate an
          authorized agent&apos;s identity the same way we validate your identity to exercise your
          rights in order to protect the confidentiality and security of your personal information.
          We will verify requests from authorized agents to ensure the security of your account and
          to comply with this Privacy Policy.
        </p>
        <p className="text-sm mb-4 text-gray-500">How do we protect your information?</p>
        <p className="text-sm mb-4 text-gray-600">
          We implement a variety of security measures to maintain the safety of your personal
          information when you place an order or enter, submit, or access your personal information.
          We employ administrative, physical, and technical security controls as necessary along
          with abiding by strict confidentiality obligations with our employees and third parties.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          We offer the use of a secure server. All information is transmitted via Secure Socket
          Layer (SSL) technology. Payment information is sent directly to and encrypted on our
          Payment gateway providers database.
        </p>

        <p className="text-sm mb-4 text-gray-600">
          Your personal information is securely stored on systems we own or with companies that we
          hire to provide services to you within the United States. We do not transfer any personal
          information outside of the US.
        </p>
        <p className="text-sm mb-4 text-gray-500">Complaints or Other Concerns</p>
        <p className="text-sm mb-4 text-gray-600">
          We regularly review our compliance with this Privacy Policy. Please feel free to direct
          any questions or concerns regarding this Privacy Policy or our treatment of personal
          information by contacting us through this web site, contacting our Privacy Official at
          <a href="mailto:support@thoughtindustries.com">support@thoughtindustries.com</a>
          or by writing to us at Your Privacy Rights, c/o Thought Industries, 3 Post Office Square,
          Boston, MA 02109. When we receive formal written complaints at this address, it is our
          policy to contact the complaining user regarding his or her concerns. We will cooperate
          with the appropriate regulatory authorities, including local data protection authorities,
          to resolve any complaints regarding the transfer of personal data that cannot be resolved
          between Thought Industries and an individual.
        </p>
        <p className="text-sm mb-4 text-gray-500">Cookies Policy</p>
        <p className="text-sm mb-4 text-gray-500">Online Data Collection Technologies</p>
        <p className="text-sm mb-4 text-gray-600">
          A browser cookie is a small piece of data that is stored on your device to help websites
          and mobile apps remember things about you. Cookies do not spy on you or otherwise invade
          your privacy, and they cannot invade your hard drive and steal information. Rather, they
          help you navigate a website as easily as possible. Other technologies, including Web
          storage and identifiers associated with your device, may be used for similar purposes. In
          this policy, we say &ldquo;cookies&rdquo; to discuss all of these technologies.
        </p>
        <p className="text-sm mb-4 text-gray-500">How We Use Cookies</p>
        <p className="text-sm mb-4 text-gray-600">
          Like most providers of online services, we use cookies for a number of reasons such as:
        </p>
        <ul className="text-sm mb-4 text-gray-600 list-disc pl-8">
          <li>Protecting your data and account,</li>
          <li>Helping us see which features are most popular,</li>
          <li>Counting visitors to a page,</li>
          <li>
            Improving our users&rsquo; experience by delivery content specific to your interests,
          </li>
          <li>
            Keeping our services easy to use in preventing you from reentering all your registration
            data at each connection,
          </li>
          <li>Keeping our services secure, and</li>
          <li>Generally providing you with a better, more intuitive, and satisfying experience.</li>
        </ul>

        <p className="text-sm mb-4 text-gray-600">
          The cookies we use generally fall into one of the following categories.
        </p>
        <ul className="text-sm mb-4 text-gray-600 list-disc pl-8">
          <li>
            <u>Preferences:</u>
            We use these cookies to remember your settings and preferences. For example, we may use
            these cookies to remember your language preferences.
          </li>
          <li>
            <u>Security:</u>
            We use these cookies to help identify and prevent security risks. For example, we may
            use these cookies to store your session information to prevent others from changing your
            password without your email and password.
          </li>
          <li>
            <u>Performance:</u>
            We use these cookies to collect information about how you interact with our services and
            to help us improve them. For example, we may use these cookies to determine if you have
            interacted with a certain page.
          </li>
          <li>
            <u>Analytics:</u>
            We use these cookies to help us improve our services. For example, we can use these
            cookies to learn more about which features are the most popular with our users and which
            ones might need some tweaks.
          </li>
        </ul>

        <p className="text-sm mb-4 text-gray-500">Your Choices</p>
        <p className="text-sm mb-4 text-gray-600">
          Your browser or device may allow you to block or otherwise limit the use of cookies.
          Cookies are an important part of how our services work, so removing, rejecting, or
          limiting the use of them could affect the availability and functionality of our services.
        </p>
        <p className="text-sm mb-4 text-gray-500">Browser Cookies</p>
        <p className="text-sm mb-4 text-gray-600">
          Your browser may provide you with the option to refuse some or all browser cookies. You
          may also be able to remove cookies from your browser. For more information about how to
          manage browser cookies, please follow the instructions provided by your browser.
        </p>
        <p className="text-sm mb-4 text-gray-500">Third Party Links</p>
        <p className="text-sm mb-4 text-gray-600">
          Occasionally, at our discretion, we may include or offer third-party products or services
          on our website. These third-party sites have separate and independent privacy policies. We
          therefore have no responsibility or liability for the content and activities of these
          linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any
          feedback about these sites.
        </p>
        <p className="text-sm mb-4 text-gray-500">Minors</p>
        <p className="text-sm mb-4 text-gray-600">
          We are in compliance with the requirements of the Children&apos;s Online Privacy
          Protection Act (COPPA). We do not intentionally collect any information on minors (under
          13 years of age or minors between 13 and 16 years of age). Our website, products and
          services are all directed to individuals who are at least 16 years old or older.
        </p>
        <p className="text-sm mb-4 text-gray-500">Retention of Information</p>
        <p className="text-sm mb-4 text-gray-600">
          We keep personal information for as long as we provide you services. We only keep
          information that we need for business purposes and limit the information for only the
          purposes it was intended for at the time of collection. We may retain personal information
          related to contracts or business transactions for seven (7) years after the last
          interaction with you. We may also permanently retain any requests to exercise your rights
          to ensure that we respect your requests in the future and to demonstrate our compliance
          with this Privacy Policy and other regulatory requirements.
        </p>

        <p className="text-sm mb-4 text-gray-500">Changes to Our Privacy Policy</p>
        <p className="text-sm mb-4 text-gray-600">
          Under certain circumstances where there is a material change to this Privacy Policy or
          where it may be required by law, we will provide notice to you of these changes as well as
          obtain consent from you where required. We may make notice of these changes by emailing
          you, posting this notice on this page (or within our service offering), or by other means
          required by law. We will update the Privacy Policy modification dated at the beginning of
          this Privacy Policy.
        </p>
        <p className="text-sm mb-4 text-gray-500">Contact Information</p>
        <p className="text-sm mb-4 text-gray-600">
          If there are any questions regarding this privacy policy you may contact us using the
          information below.
        </p>
        <p className="text-sm mb-4 text-gray-600">
          Your Privacy Rights
          <br />
          c/o Thought Industries
          <br />
          3 Post Office Square
          <br />
          Boston, MA 02109
          <br />
          <a href="mailto:support@thoughtindustries.com">support@thoughtindustries.com</a>
        </p>
      </div>
    </>
  );
};

TermsConditionsModal.displayName = 'TermsConditionsModal';
export default TermsConditionsModal;
