import React  from 'react';
import './style.scss';

//UI
import {Container,Row, Col} from 'react-bootstrap';
import P from '../../components/UI/P/P'
import H1 from '../../components/UI/H1/H1'
import H2 from '../../components/UI/H2/H2'
import H3 from '../../components/UI/H3/H3'
import H4 from '../../components/UI/H4/H4'

import tableImg from '../../assets/img/table.jpg'

import {Link} from 'react-router-dom'
//i18n
import { useTranslation } from 'react-i18next';



//About--------------------------------------------------------
const Confi = () =>{



    //i18n
    const {t} = useTranslation();

 


    return (
        <div className='how'>
            <Container className='about__container' style={{ maxWidth: '1000px' }}>
                <H1>PRIVACY POLICY</H1>
                <H2>Welcome to World Tour Audio Guide!</H2>
                <P textAlign={"start"}>World Tour Audio Guide is owned and operated by World tour guide B.V.
                </P>
                <P textAlign={"start"}>(Hereinafter referred to as "World Tour Audio Guide").
                    World Tour Audio Guide values your privacy and the protection of your personal data. This privacy policy describes what information we collect from you, how we collect it, how we use it, how we obtain your consent, how long we keep it in our databases and, if necessary, with whom we share it.
                </P>
                <P textAlign={"start"}>By using the platform, you are accepting the practices described in this privacy policy. Your use of the platform is also subject to our terms and conditions. In this privacy policy, the words "platform" refers to the World Tour Audio Guide mobile application and website together, "we", "us", "our" and "World Tour Audio Guide" refers to World Tour Audio Guide and "you" and "user" 
                    refers to you, the user of World Tour Audio Guide.
                </P>
                <P textAlign={"start"}>This privacy policy may change from time to time. Your continued use of the platform after we make changes to this privacy policy is deemed acceptance of those changes, so please check this policy periodically for updates. This privacy policy has been developed and is maintained in accordance with all applicable federal and international laws and regulations and, in particular, the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR - European Regulations).
                </P>

                <H4 textAlign={"start"}>1. GENERAL INFORMATION</H4> 
                <P textAlign={"start"}>
                    The personal data of users that are collected and processed through:
                </P>
                <P textAlign={"start"} fontWeight={700}>
                    World Tour Audio Guide mobile application (Available on Google Play and App Store).
                </P>
                <P textAlign={"start"} fontWeight={700}>
                   <Link  target='blank'  style={{color: 'blue'}} to={'https://www.worldtouraudioguide.com'}>https://www.worldtouraudioguide.com</Link>
                </P>
                 <P textAlign={"start"}>Will be under the responsibility and in charge of:</P>
                 <P textAlign={"start"} fontWeight={700}>
                    World tour guide B.V. 
                </P>
                <P textAlign={"start"} >
                    World Tour Guide B.V.<br/>
                    Hoogstraat 115J<br/>
                    3011PL Rotterdam<br/>
                    +31625568864<br/>
                    Info@worldtouraudioguide.com<br/>
                </P>
                <H4 textAlign={"start"}>
                    2. HOW DO YOU OBTAIN MY CONSENT?
                </H4>
                <P textAlign={"start"} >
                    By downloading and using the mobile application, using the website, registering as a user, using the functionalities available on the platform, contributing content to create audio guides, writing a review, contacting us through our contact details and providing us with personal information to communicate with you, you consent to our collection, storage and use of your information on the terms contained in this privacy policy. You may withdraw your consent at any time by sending us your request through our contact information.
                </P>
                <H4 textAlign={"start"}>
                    3. TYPES OF INFORMATION COLLECTED
                </H4>
                <P textAlign={"start"} >
                    The information we collect from our users helps us to continually improve the user experience on the platform. These are the types of information we collect:
                        Information you provide to us. You provide information when you download the mobile application, register as a user, provide content to create audio guides, use the functionalities available on the platform, write a review and/or communicate with us through our contact information or contact forms. As a result of those actions, you may provide us with the following information:
                </P>
                <P textAlign={"start"}>
                        First name and last name<br/>
                        Organization<br/>
                        Phone number<br/>
                        Email <br/>
                        Any additional information related to you that you provide to us directly or indirectly through our platform.<br/>
                </P>
                <P textAlign={"start"}>
                    World Tour Audio Guide will not collect any personally identifiable information about you unless you provide it.
                </P>
                <P textAlign={"start"}>
                    <b>Information Collected Automatically:</b> By accessing and using the platform, you automatically provide us with the following information:
                </P>
                <P textAlign={"start"}>
                    Your IP address <br/>
                    Browser and device characteristics<br/>
                    Your operating system<br/>
                    Referrer URLs<br/>
                </P>
                <P textAlign={"start"}>
                        <b>GOOGLE Analytics (Website).</b> We use Google Analytics provided by Google, Inc., USA (“Google”). These tool and technologies collect and analyze certain types of information, including IP addresses, device and software identifiers, referring and exit URLs, feature use metrics and statistics, usage and purchase history, media access control address (MAC Address), mobile unique device identifiers, and other similar information via the use of cookies. The information generated by Google Analytics (including your IP address) may be transmitted to and stored by Google on servers in the United States. We use the GOOGLE Analytics collection of data to enhance the website and improve our service.
                </P>
                <P textAlign={"start"}>Please consult Google's privacy policy here:</P>
                <Link target='blank'  style={{color: 'blue'}}  to={'https://policies.google.com/privacy'}>https://policies.google.com/privacy</Link>
                <P textAlign={"start"}>
                    <b>Firebase Crashlytics and Firebase Analytics (Mobile app):</b> We use Firebase Crashlytics and Firebase Analytics provided by Google, Inc. of the United States ("Google"). These tools and technologies collect and analyse certain types of information, such as feature usage metrics and statistics, usage history, unique device identifiers and other similar information. The information generated by Firebase Crashlytics and Firebase Analytics may be transmitted to and stored by Google on servers in the United States. We use Firebase Crashlytics and Firebase Analytics data collection to improve our platform.
                        Please refer to Firebase's privacy policy: 
                </P>
                <Link target='blank'  style={{color: 'blue'}}  to={'https://firebase.google.com/support/privacy'}>https://firebase.google.com/support/privacy.</Link>
                <P textAlign={"start"}>
                    <b>Social Media: </b>On our platform you will find links and functions linked to different social networks or services, where you can share your information. It is advisable to consult the privacy and data protection policy of each social network used on our platform. 
                    Facebook: 
                    <Link target='blank'  style={{color: 'blue'}}  to={'https://www.facebook.com/privacy/explanation'}> https://www.facebook.com/privacy/explanation</Link><br/>
                    Instagram: 
                    <Link target='blank'  style={{color: 'blue'}}  to={'http://instagram.com/about/legal/privacy/'}> http://instagram.com/about/legal/privacy/</Link>
                </P>
                <P textAlign={"start"}>
                    <b>Contact information: </b>We may access some personal information about the user, such as name and email address, when the user or any third party communicates with us through our contact information. Personal information provided through our contact information is not stored on any World Tour Audio Guide server and will be stored on the respective server of our email service.
                </P>
                <H4 textAlign={"start"}>4. HOW LONG WE KEEP YOUR DATA</H4>
                <P textAlign={"start"}>
                    Personal data provided by users through the use of the platform will be retained for the time necessary to provide the functionalities available on the platform and create the audio guides or until the user maintains the account on the platform or decides to close it or until World Tour Audio Guide closes and deletes the user's account or until the user requests the deletion of his data. World Tour Audio Guide may retain personal data for a longer period provided that the user has consented to such processing, as long as such consent is not withdrawn. In addition, World Tour Audio Guide may be obliged to retain personal data for a longer period provided that this is required for compliance with a legal obligation or by order of an authority. Once the retention period has expired, the personal data will be deleted. Therefore, the right of access, the right of deletion, the right of rectification and the right to data portability cannot be asserted after the retention period has expired.
                </P>
                <H4 textAlign={"start"}>5. HOW WE USE YOUR INFORMATION. </H4>
                <P textAlign={"start"}>
                    In general, we use the information we collect primarily to provide, maintain, protect and improve our platform and our current services. We use personal information collected through our platform as described below:
                    ⦁	Provide the mobile application (Available on Google Play and App store).<br/>
                    ⦁	User registration.<br/>
                    ⦁	Provide the functionalities available on the platform.<br/>
                    ⦁	Provide the audio guides according to the user's content.<br/>
                    ⦁	Publish user reviews on the platform.<br/>
                    ⦁	Understand and improve your experience using our platform.<br/>
                    ⦁	Respond to your comments or questions through our contact information.<br/>
                    ⦁	Send you related information, including confirmations, invoices, technical notices, updates, security alerts, and support and administrative messages.<br/>
                    ⦁	Communicate with you about upcoming events, offers and news about content, products and services offered by World Tour Audio Guide and our partners.<br/>
                    ⦁	World Tour Audio Guide marketing purposes.<br/>
                    ⦁	Link or combine your information with other data we obtain from third parties to help us understand your needs and provide you with better service.<br/>
                    ⦁	Protect, investigate and deter fraudulent, unauthorized or illegal activities.<br/>
                </P>
                <H4 textAlign={"start"}>6. HOW WE SHARE INFORMATION</H4>
                <P textAlign={"start"}>
                    Information about our customers is an important part of our business, and we are not in the business of selling it to others. We share customer information only as described below.
                </P>
                <P textAlign={"start"}>
                    <b>Third-Party Service Providers.</b> We use third party services to perform certain functions on our platform. Some of these functions and services are: Building and hosting the platform, performing tracking and analytics functions on the platform (Google Analytics, Firebase Crashlytics), sending emails, marketing services and search results.
                </P>
                <P textAlign={"start"}>
                    These third-party services and tools may have access to personal information needed to perform their functions, but may not use that information for other purposes. Information shared with these third-party services will be treated and stored in accordance with their respective privacy policies and our privacy policy. 
                </P>
                <P textAlign={"start"}>
                    <b>Email marketing:</b> We use the information provided by users to conduct marketing campaigns and send relevant information about our products and services. By registering as a user on the platform, you authorize us to use your information for email marketing. We will use third-party services and platform to perform email marketing, so we may share certain information with some of these third parties for the sole and exclusive purpose of sending our emails.
                </P>
                <P textAlign={"start"}>
                    <b>Business Transfers. </b> In the event World Tour Audio Guide creates, merges with, or is acquired by another entity, your information will likely be transferred. World Tour Audio Guide will send you an email or post a prominent notice on our platform before your information becomes subject to another privacy policy.
                </P>
                <P textAlign={"start"}>
                    <b>Protection of World Tour Audio Guide and Others. </b> We release personal information when we believe release is appropriate to comply with the law, enforce or apply our terms and conditions and other agreements, or protect the rights, property, or safety of World Tour Audio Guide, our users, or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction.
                </P>
                <P textAlign={"start"}>
                    <b>Anonymous Information.</b> World Tour Audio Guide uses anonymous browsing information collected automatically by our servers primarily to help us administer and improve the platform. We may also use aggregated anonymous information to provide information about the Platform to potential business partners and other unaffiliated entities. This information is not personally identifiable.
                </P>
                <H4 textAlign={"start"}>7. PROTECTION OF YOUR INFORMATION</H4>
                <P textAlign={"start"}>
                    We work to protect the security of your information during transmission by using Secure Sockets Layer (SSL) software, which encrypts information you provide through the website and platform. If transactions are processed on the website, transaction information is transmitted to and from the platform in encrypted form using industry-standard SSL connections to help protect such information from interception. We restrict authorized access to your personal information to those persons who have a legitimate need to know that information and to those persons you have authorized to have access to that information. World Tour Audio Guide follows generally accepted industry standards to protect the personal information submitted to us, both during transmission and once World Tour Audio Guide receives it. No method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, while World Tour Audio Guide strives to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so.
                </P>
                <H4 textAlign={"start"}>8. RIGHTS </H4>
                <P textAlign={"start"}>
                    Users who provide information through our platform, as data subjects, have the right to access, rectify, download or delete their information, as well as to restrict and oppose certain processing of their information. While some of these rights apply generally, others only apply in certain limited circumstances. These rights are described below:
                </P>
                <P textAlign={"start"}>
                    <b>⦁ Access and portability:</b> to access and know what information is stored on our servers, you can send us your request through our contact information
                </P>
                <P textAlign={"start"}>
                    <b>⦁ Rectification, restriction, limitation and deletion:</b> You may also rectify, restrict, limit or delete much of your information.
                </P>
                <P textAlign={"start"}>
                    <b>⦁ Right to be informed:</b> Users of our platform will be informed, upon request, about what data we collect, how it is used, how long it is kept and whether it is shared with third parties.
                </P>
                <P textAlign={"start"}>
                    <b>⦁ Object:</b> Where we process your data based on our legitimate interests, as explained above, or in the public interest, you may object to this processing in certain circumstances. In such cases, we will stop processing your information unless we have legitimate grounds to continue processing it or where necessary for legal reasons.
                </P>
                <P textAlign={"start"}>
                    <b>⦁ Withdraw consent:</b> Where you have previously given your consent, for example to allow us to process and store your personal information, you have the right to withdraw your consent to the processing and storage of your information at any time. For example, you can withdraw your consent by updating your settings. In certain cases, we may continue to process your information after you have withdrawn your consent if we have a lawful basis for doing so or if your withdrawal of consent was limited to certain processing activities.
                </P>
                <P textAlign={"start"}>
                    <b>⦁ Complaint:</b> If you wish to lodge a complaint about our use of your information (and without prejudice to any other rights you may have), you have the right to do so with your local supervisory authority. Users may exercise all of these rights by contacting us via the contact information or contact page.
                </P>
                <P textAlign={"start"}>
                    <b>⦁ Rights related to automated decision-making, including profiling:</b> Users may request that we provide them with a copy of the automated processing activities we conduct if they believe that data is being unlawfully processed.
                </P>
                <P textAlign={"start"}>
                    Users or owners of the personal data they provide through the platform can exercise these rights over their personal data at any time and without any limitation by sending us their request through our contact information.
                </P>
                <H4 textAlign={"start"}>9. PROTECTION OF CHILDREN'S ONLINE PRIVACY </H4>
                <P textAlign={"start"}>
                    We comply with the requirements of the personal data protection regulations regarding the protection of personal data of minors. We do not collect any information from children under the age of 13. Our platform is intended for persons over the age of 13. If we become aware that a minor has provided us with personal information, we will take steps to delete that information, terminate that person's account and restrict access to that person's account.
                </P>
                <H4 textAlign={"start"}>10. THIRD PARTIES</H4>
                <P textAlign={"start"}>
                    Except as expressly included in this privacy policy, this document addresses only the use and disclosure of information World Tour Audio Guide collects from you. If you disclose your information to others, whether other users or World Tour Audio Guide vendors, different rules may apply to their use or disclosure of the information you disclose to them. World Tour Audio Guide does not control the privacy policies of third parties, and you are subject to the privacy policies of those third parties where applicable. World Tour Audio Guide is not responsible for the privacy or security practices of other Internet platform, including those linked to or from the World Tour Audio Guide platform. World Tour Audio Guide encourages you to ask questions before disclosing your personal information to others.
                </P>
                <H4 textAlign={"start"}>11. CONTACT </H4>
                <P textAlign={"start"}>
                    If you have questions or concerns about this privacy policy and the treatment and security of your data, please contact us using the contact information below:
                </P>
                <P textAlign={"start"}>
                    <b>World Tour Audio Guide.</b>
                    World Tour Guide B.V.<br/>
                    Hoogstraat 115J<br/>
                    3011PL Rotterdam<br/>
                    +31625568864<br/>
                    Info@worldtouraudioguide.com<br/>

                </P>


                {/*==================================================================================*/}


                <H1>COOKIE POLICY</H1>
                <H4 textAlign={"start"}>Welcome to World Tour Audio Guide!</H4>  
                <P textAlign={"start"}>
                    World Tour Audio Guide is owned and operated by World tour guide B.V.<br/>
                    This cookie policy explains how and why cookies and other similar technologies may be stored on and accessed from your device when you use or visit:
                </P>
                <P textAlign={"start"} fontWeight={700}>
                   <Link  target='blank'  style={{color: 'blue'}} to={'https://www.worldtouraudioguide.com'}>https://www.worldtouraudioguide.com</Link>
                </P>
                 <P textAlign={"start"}>Will be under the responsibility and in charge of:</P>
                 <P textAlign={"start"} fontWeight={700}>
                    World tour guide B.V. 
                </P>
                <P textAlign={"start"} >
                    World Tour Guide B.V.<br/>
                    Hoogstraat 115J<br/>
                    3011PL Rotterdam<br/>
                    +31625568864<br/>
                    Info@worldtouraudioguide.com<br/>
                </P>
                <P textAlign={"start"} >
                    This cookie policy should be read together with our privacy policy and our terms and conditions.
                        By using the website, you accept the use of cookies by World Tour Audio Guide, in the terms contained in this policy.
                </P>

                <H1 textAlign={"start"}>1. WHAT ARE COOKIES?</H1>
                <P textAlign={"start"} >
                         Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to recognize your device and remember if you have been to the website before. Cookies are a very common web technology; most websites use cookies and have done so for years. Cookies are widely used to make the website work more efficiently. Cookies are used to measure which parts of the website users visit and to personalize their experience. Cookies also provide information that helps us monitor and improve the performance of the website.
                 </P>
                 <H4 textAlign={"start"}>2. COOKIE SETTINGS</H4>
                 <P textAlign={"start"} >
                    If you do not want cookies to be dropped on your device, you can adjust the setting of your Internet browser to reject the setting of all or some cookies and to alert you when a cookie is placed on your device. For further information about how to do so, please refer to your browser ‘help’, ‘tool’, or ‘edit’ section. Please note that if you use your browser settings to block all cookies, including strictly necessary cookies, you may not be able to access or use all or parts of the functionalities of the website.
                        If you want to remove previously-stored cookies, you can manually delete the cookies at any time. However, this will not prevent the website from placing further cookies on your device unless and until you adjust your Internet browser setting as described above.
                        We provide the links for the management and blocking of cookies depending on the browser you use:
                 </P>
                 <P textAlign={"start"} fontWeight={700}>
                    Microsoft Edge <Link  target='blank'  style={{color: 'blue'}} to={'https://support.microsoft.com/en-us/office/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09?ui=en-us&rs=en-us&ad=us'}>https://support.microsoft.com/en-us/office/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09?ui=en-us&rs=en-us&ad=us</Link>
                </P>
                <P textAlign={"start"} fontWeight={700}>
                    Firefox:  <Link  target='blank'  style={{color: 'blue'}} to={'https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox'}>https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox</Link>
                </P>
                <P textAlign={"start"} fontWeight={700}>
                    Chrome:   <Link  target='blank'  style={{color: 'blue'}} to={'https://support.google.com/chrome/answer/95647?hl=en'}>https://support.google.com/chrome/answer/95647?hl=en</Link>
                </P>
                <P textAlign={"start"} fontWeight={700}>
                    Safari  <Link  target='blank'  style={{color: 'blue'}} to={'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac'}>https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</Link>
                </P>
                <P textAlign={"start"} fontWeight={700}>
                    Opera:  <Link  target='blank'  style={{color: 'blue'}} to={'https://help.opera.com/en/latest/web-preferences'}>https://help.opera.com/en/latest/web-preferences/</Link>
                </P>
                <P textAlign={"start"} >
                In cases where you access the website through an iOS or Android mobile device, please follow the instructions below to delete or block cookies on your device:
                </P>
                <P textAlign={"start"} fontWeight={700}>
                    Android:   <Link  target='blank'  style={{color: 'blue'}} to={'https://support.google.com/answer/32050'}>https://support.google.com/answer/32050</Link>
                </P>
                <P textAlign={"start"} fontWeight={700}>
                    iOS:  <Link  target='blank'  style={{color: 'blue'}} to={'https://support.apple.com/en-us/HT201265'}>https://support.apple.com/en-us/HT201265</Link>
                </P>
                <H4 textAlign={"start"}>3. COOKIES WE USE</H4>
                <P textAlign={"start"} >
                    We use the following cookies on our website:
                </P>
                <img src={tableImg} alt="tableImg"/>
                <H4 textAlign={"start"}>4. PURPOSES OF OUR COOKIES</H4>
                <P textAlign={"start"}>
                    Our cookies are used for the following purposes:
                    Strictly Necessary: These cookies are essential for the website to perform its basic functions.
                    Security: We use these cookies to help identify and prevent potential security risks.
                    Performance: Performance cookies collect information on how users interact with our website, including what pages are visited most, as well as other analytical data. We use these details to improve how our website functions and to understand how users interact with them.
                    Analytics. We use Google Analytics as data analysis tools. These tools and technologies collect and analyze certain types of information, such as IP addresses, device and software identifiers, referring and exit URLs, feature usage metrics and statistics, media access control address (MAC address), unique mobile device identifiers and other similar information through the use of cookies. We use GOOGLE Analytics data collection to improve our platforms and services.
                </P>
                <H4 textAlign={"start"}>5. CONTACT US</H4>
                <P textAlign={"start"}>
                    If you have questions or concerns about this cookie policy and the handling and security of your data, please contact us through our contact page or via the contact information below:
                </P>
                <P textAlign={"start"}>
                    <b>World Tour Audio Guide.</b> 
                </P>
                <P textAlign={"start"}>
                         World Tour Guide B.V.<br/>
                        Hoogstraat 115J<br/>
                        3011PL Rotterdam<br/>
                        +31625568864<br/>
                        Info@worldtouraudioguide.com<br/>
                </P>


                {/*==================================================================================*/}

                <H1>TERMS AND CONDITIONS</H1>
                <H4 textAlign={"start"}>Welcome to World Tour Audio Guide!</H4>  
                <P textAlign={"start"}>
                    World Tour Audio Guide is owned and operated by World tour guide B.V.<br/>
                    These are the terms and conditions for: 
                </P>
                <P textAlign={"start"} fontWeight={700}>
                World Tour Audio Guide mobile application (Available on Google Play and App Store).
                </P>
                <P textAlign={"start"} fontWeight={700}>
                   <Link  target='blank'  style={{color: 'blue'}} to={'https://www.worldtouraudioguide.com'}>https://www.worldtouraudioguide.com</Link>
                </P>
                <P textAlign={"start"} >
                    By using the platform, you agree to be bound by these terms and conditions and our privacy policy. In these terms and conditions, the words "platform" refer to the World Tour Audio Guide mobile application and website together, "we", "us", "our" and "World Tour Audio Guide" refer to World Tour Audio Guide and "you" and "user" refer to you, the user of World Tour Audio Guide.
                    The following terms and conditions apply to your use of the platform. This includes mobile and tablet versions, as well as any other version of World Tour Audio Guide accessible via desktop, mobile, tablet, social media or other devices.
                    <b>PLEASE READ THESE CONDITIONS CAREFULLY BEFORE DOWNLOADING AND USING THE FUNCTIONALITIES AVAILABLE ON THE PLATFORM.</b>
                </P>
                <H4 textAlign={"start"}>
                    1. ACCEPTANCE OF TERMS
                </H4>
                <P textAlign={"start"} >
                    By using the platform, you agree to be bound by this agreement. If you do not accept the terms of this agreement, you should not use the platform and discontinue use of the platform immediately. We may modify this agreement from time to time, and such modification shall be effective upon its posting on the platform. You agree to be bound by any modification to these terms and conditions when you use World Tour Audio Guide after any such modification is posted; it is therefore important that you review this agreement regularly.
                    Use of the platform and services is prohibited for children under the age of 13. For children under the age of 18 and over the age of 13, it is the responsibility of parents and legal guardians to determine whether use of the platform or any of the services available on the platform is appropriate for their child or ward.
                    By using the platform, you represent and warrant that you have the full right, power and authority to enter into this agreement and to fully perform all of your obligations hereunder. You further represent and warrant that you are under no legal disability or contractual restriction that prevents you from entering into this agreement.
                </P>
                <H4 textAlign={"start"}>
                    2. ACCOUNT
                </H4>
                <P textAlign={"start"} >
                    Users will be able to register and open an account on the platform to search, create and publish audio guides on the platform. When registering on the platform, the user must choose a password and may be asked for additional information such as email address and phone number. You are responsible for maintaining the confidentiality of your password and account information, and are fully responsible for all activities that occur under your password or account. You agree to (a) immediately notify World Tour Audio Guide of any unauthorized use of your password or account or any other breach of security, and (b) ensure that you log out of your account at the end of each session. You may never use another user's account without World Tour Audio Guide's prior authorization. World Tour Audio Guide will not be liable for any loss or damage arising from your breach of this agreement.
                    Users can cancel their accounts at any time and for any reason through the account settings or by sending us their request through our contact information. Such cancellation will only result in the deletion of the account and the deletion of all personal data transferred to World Tour Audio Guide.
                    World Tour Audio Guide reserves the right to terminate your account or your access immediately, with or without notice, and without liability to you, if World Tour Audio Guide believes that you have breached any of these terms, provided World Tour Audio Guide with false or misleading information, or interfered with another's use of the platform or the service.
                </P>
                <H4 textAlign={"start"}>
                    3. USER CONTENT 
                </H4>
                <P textAlign={"start"} >
                    Users can provide content to the platform to create and publish audio guides on the platform. The User retains any copyrights or any other rights they may have in the content they provide through the platform. World Tour Audio Guide is not responsible for the accuracy, safety or legality of content posted on the platform by Users. The user is solely and exclusively responsible for its content and the consequences of its publication. The user may add, edit or remove content provided to the platform at any time. By providing content through the platform, the user grants World Tour Audio Guide a worldwide, non-exclusive, royalty-free, fully paid right and license to host, store, transfer, display, perform, reproduce and modify the user content for the sole purpose of displaying it through the platform and to the general public.
                </P>
                <H4 textAlign={"start"}>
                    4. CONTENT LIMITATIONS
                </H4>
                <P textAlign={"start"} >
                    World Tour Audio Guide disclaims all liability in connection with the content of the user. The User is solely responsible for the content and the consequences of providing content through the platform. By providing user content through the platform, you affirm, represent and warrant that:
                    <br/>You are the user and owner of the content you provide through the platform, or have the necessary licenses, rights, consents and permissions to authorize World Tour Audio Guide to publish and display your content through the platform.
                    <br/>Your content does not and will not (i) infringe, violate or misappropriate any third party right, including any copyright, trademark, patent, trade secret, moral right, right of privacy, right of publicity or any other intellectual property or proprietary right; (ii) libels, defames, slanders or invades the right of privacy, publicity or other proprietary rights of any other person; or (iii) causes World Tour Audio Guide to violate any law or regulation.
                    <br/>Your content could not be considered by a reasonable person to be objectionable, profane, indecent, pornographic, harassing, threatening, embarrassing, hateful or otherwise inappropriate.
                    <br/>Your content does not and will not contain hateful content, threat of physical harm or harassment.
                    <br/>Any violation of these terms and conditions or the publication of prohibited content on the platform may result in the removal of the content on the platform and the suspension of the user's account.
                </P>
                <H4 textAlign={"start"}>
                    5. CONTENT MONITORING
                </H4>
                <P textAlign={"start"} >
                    World Tour Audio Guide may, at any time and without notice, filter, remove, edit or block any user content that, in our sole judgment, violates these terms or is otherwise objectionable. If a user or content owner notifies us that user content allegedly does not conform to these terms, we may investigate the allegation and determine in our sole discretion whether to remove the user content, which we reserve the right to do at any time and without notice. You acknowledge and agree that World Tour Audio Guide reserves the right, and may from time to time, monitor all information transmitted or received through the Service for operational and other purposes. If at any time World Tour Audio Guide decides to monitor content, World Tour Audio Guide continues to assume no responsibility or liability for the content or for any loss or damage incurred as a result of the use of the content. During monitoring, information may be examined, recorded, copied and used in accordance with our privacy policy.
                </P>
                <H4 textAlign={"start"}>
                    6. INTELLECTUAL PROPERTY RIGHTS - OWNERSHIP AND LICENSES
                </H4>
                <P textAlign={"start"} >
                <br/>You certify that you are the sole owner of all intellectual property rights (such as copyrights and trademarks) in your content or that you have obtained all necessary rights in order to give us and other users licenses to use it. This includes all authorizations needed to take part in the activities covered by these conditions in any country where World Tour Audio Guide is reachable, but especially in the United States, the United Kingdom, and the European Union.
                <br/>You consent to granting us a license to use all of your content for any purpose reasonably linked to the provision and operation of World Tour Audio Guide, including any act prohibited by any intellectual property rights (including copyrights) in such content. These actions include repurposing, making accessible, and communicating to the public, showing, performing, and disseminating your material as well as translating, adapting, and producing derivative works of it.
                <br/>The license you grant to us pursuant to the preceding paragraph is perpetual, non-exclusive, transferable, worldwide and free of charge. This means that the license will remain in effect even after the expiration or termination of your agreement with us and your cessation of use of World Tour Audio Guide, that we are not required to compensate you for the license, and that we are free to sublicense your Content to others or give or transfer the license to others. This license enables us to do things like add stickers, text, and watermarks to your material, share it with other World Tour Audio Guide users, and use it for other typical World Tour Audio Guide functions. We will never sell your content to other platforms, but in the event that we sell our business or all of its assets to a third party, we may sell or transfer any license you give us herein.
                <br/>You give us the restricted right to send notices of infringement (including copyright or trademark infringement) on your behalf to any third-party website or service that hosts or promotes unlawful copies of your content, despite the fact that we do not own your content. Although we are not required to, we reserve the right to send or remove any such notification from any third-party website or service at any time. We do not have to look out for plagiarism of your material, nor are we required to. You consent to giving us all permissions and other details if asked by us so that we can submit infringement notices on your behalf. For information on how to report a copyright infringement claim, see the Copyright Infringement section in this document.
                <br/>You give up the right to object to the treatment of any Content you post on World Tour Audio Guide in a derogatory manner under any relevant law. This waiver has no bearing on your possession of any intellectual property rights in your content or your right to prevent unauthorized duplication of your work. The disclaimer's objective is to give us permission to process your material and add watermarks, stickers, or text to it.
                </P>
                <H4 textAlign={"start"}>
                    7. DISCLAIMER
                </H4>
                <P textAlign={"start"} >
                    By using the platform and the content available on the platform, you accept personal responsibility for the use of the platform and the content displayed on the platform. World Tour Audio Guide provides resources and content for informational purposes only. We do not warrant that the information available on the platform is accurate, complete or up-to-date. Any use of the platform and the content displayed on the platform is the sole and exclusive responsibility of the user.
                </P>
                <H4 textAlign={"start"}>
                    8. LICENSE TO USE THE PLATFORM
                </H4>
                <P textAlign={"start"} >
                    <br/>World Tour Audio Guide grants you a personal, worldwide, royalty-free, non-assignable, non-exclusive license to use the platform. This license is for the sole purpose of allowing you to use the features available on the platform in the manner permitted by these terms. You may not copy, modify, distribute, sell or lease any part of our platform or included software, nor may you reverse engineer or attempt to extract the source code of such software, unless such restrictions are prohibited by law, or you have our written permission.
                    <br/>The user agrees not to use the platform and the services negligently, for fraudulent purposes or in an unlawful manner. Likewise, the user agrees not to partake in any conduct or action that could damage the image, interests, or rights of the World Tour Audio Guide platform or third parties.
                    <br/>World Tour Audio Guide reserves the right to terminate your access immediately, with or without notice, and without liability to you, if World Tour Audio Guide believes that you have violated any of these terms or interfered with the use of the platform by others.
                </P>
                <H4 textAlign={"start"}>
                    9. PLATFORM COPYRIGHT
                </H4>
                <P textAlign={"start"} >
                    All materials on World Tour Audio Guide, including, without limitation, names, logos, trademarks, games, images, text, columns, graphics, videos, photographs, illustrations, software and other elements are protected by copyrights, trademarks and/or other intellectual property rights owned and controlled by World Tour Audio Guide or by third parties that have licensed or otherwise provided their material to the platform. You acknowledge and agree that all Materials on World Tour Audio Guide are made available for limited, non-commercial, personal use only. Except as specifically provided herein. No material may be copied, reproduced, republished, sold, downloaded, posted, transmitted, or distributed in any way, or otherwise used for any purpose, by any person or entity, without World Tour Audio Guide prior express written permission. You may not add, delete, distort, or otherwise modify the material. Any unauthorized attempt to modify any material, to defeat or circumvent any security features, or to utilize World Tour Audio Guide or any part of the material for any purpose other than its intended purposes is strictly prohibited.
                </P>
                <H4 textAlign={"start"}>
                    10. COPYRIGHT INFRINGEMENT 
                </H4>
                <P textAlign={"start"} >
                    World Tour Audio Guide will respond to all enquiries, complaints and claims relating to alleged infringement by breach or violation of the provisions contained in international copyright and intellectual property laws and regulations. World Tour Audio Guide respects the intellectual property of others and expects users to do the same. If you believe, in good faith, that any material provided on the World Tour Audio Guide platform infringes your copyright or other intellectual property rights, please submit your request via our contact information, with the following information:  
                </P>
                <P textAlign={"start"} >
                <br/>Identification of the intellectual property right that is allegedly infringed. All relevant registration numbers or a statement regarding ownership of the work should be included.
                <br/>A statement that specifically identifies the location of the infringing material, in sufficient detail so that World Tour Audio Guide can find it on the platform. 
                <br/>Your name, address, telephone number and email address.
                <br/>A statement by you that you have a good faith belief that the use of the allegedly infringing material is not authorized by the copyright owner, or its agents, or by law.
                <br/>A statement by you, made under penalty of perjury, that the information in your notification is accurate, and that you are the copyright owner or authorized to act on its behalf.
                <br/>An electronic or physical signature of the copyright owner or of the person authorized to act on the copyright owner's behalf.
                </P>
                <H4 textAlign={"start"}>
                    11. REVIEWS
                </H4>
                <P textAlign={"start"} >
                    The platform will have a review system, where users can rate the audio guides available on the platform. The opinions of the users are the sole responsibility and autonomy of the users. World Tour Audio Guide does not control or modify the comments or ratings made by users.
                </P>
                <H4 textAlign={"start"}>
                    12. PROHIBITED ACTIVITIES
                </H4>
                <P textAlign={"start"} >
                    The content and information available on the platform (including, but not limited to, data, information, text, music, sound, photos, graphics, video, maps, icons or other material), as well as the infrastructure used to provide such content and information, is proprietary to World Tour Audio Guide or licensed to the World Tour Audio Guide by third parties. For all content other than your content, you agree not to otherwise modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell or re-sell any information, software or services obtained from or through the platform. In addition, the following activities are prohibited:
                    <br/> Access, monitor, reproduce, distribute, transmit, broadcast, display, sell, license, copy or otherwise exploit any content of the services, including but not limited to, using any robot, spider, scraper or other automated means or any manual process for any purpose not in accordance with this agreement or without our express written permission.
                    <br/>Violate the restrictions in any robot exclusion headers on the services or bypass or circumvent other measures employed to prevent or limit access to the services.
                    <br/>Take any action that imposes, or may impose, in our discretion, an unreasonable or disproportionately large load on our infrastructure.
                    <br/>Deep-link to any portion of the services for any purpose without our express written permission.
                    <br/>"Frame", "mirror" or otherwise incorporate any part of the platform into any other platforms or service without our prior written authorization.
                    <br/>Attempt to modify, translate, adapt, edit, decompile, disassemble, or reverse engineer any software programs used by World Tour Audio Guide in connection with the services.
                    <br/>Circumvent, disable or otherwise interfere with security-related features of the platform or features that prevent or restrict use or copying of any content.
                </P>
                <H4 textAlign={"start"}>
                    13. DISCLAIMER OF WARRANTIES 
                </H4>
                <P textAlign={"start"} >
                Because of the nature of the Internet World Tour Audio Guide provides and maintains the platform on an "as is", "as available" basis and makes no promise that use of the platform will be uninterrupted or entirely error free. We are not responsible to you if we are unable to provide our Internet services for any reason beyond our control.
                <br/>Except as provided above we can give no other warranties, conditions or other terms, express or implied, statutory or otherwise and all such terms are hereby excluded to the maximum extent permitted by law.
                <br/>You will be responsible for any breach of these terms by you and if you use the platform in breach of these terms you will be liable to and will reimburse World Tour Audio Guide for any loss or damage caused as a result.
                <br/>World Tour Audio Guide shall not be liable for any amount for failure to perform any obligation under this Agreement if such failure is due to the occurrence of any unforeseen event beyond its reasonable control, including, without limitation, Internet outages, communications outages, fire, flood, or any uncontrollable act of nature.
                <br/>These terms do not affect your statutory rights as a consumer which are available to you.
                <br/>Subject as aforesaid, to the maximum extent permitted by law, World Tour Audio Guide excludes liability for any loss or damage of any kind howsoever arising, including without limitation any direct, indirect or consequential loss whether or not such arises out of any problem you notify to World Tour Audio Guide and World Tour Audio Guide shall have no liability to pay any money by way of compensation, including without limitation all liability in relation to:
                <br/>Any incorrect or inaccurate information on the platform.
                <br/>The infringement by any person of any Intellectual Property Rights of any third party caused by their use of the platform.
                <br/>Any loss or damage resulting from your use or the inability to use the platform or resulting from unauthorized access to, or alteration of your transmissions or data in circumstances which are beyond our control.
                <br/>Any loss of profit, wasted expenditure, corruption or destruction of data or any other loss which does not directly result from something we have done wrong.
                <br/>Any amount or kind of loss or damage due to viruses or other malicious software that may infect a user's computer equipment, software, data or other property caused by persons accessing or using content from the platform or from transmissions via emails or attachments received from World Tour Audio Guide.
                <br/>All representations, warranties, conditions and other terms which but for this notice would have effect.
                </P>
                <H4 textAlign={"start"}>
                    14. PLATFORM FAILURES
                </H4>
                <P textAlign={"start"} >
                    World Tour Audio Guide will not accept any responsibility for failed, partial or garbled computer transmissions, for any breakdown, failure, connection or availability of computer, telephone, network, electronic or Internet hardware or software, for Internet accessibility or availability or traffic congestion or for any unauthorized human acts, including platform errors or mistakes in general.
                </P>
                <H4 textAlign={"start"}>
                     15. INDEMNIFICATION
                </H4>
                <P textAlign={"start"} >
                    You agree to defend and indemnify World Tour Audio Guide from and against any claims, causes of action, demands, recoveries, losses, damages, fines, penalties or other costs or expenses of any kind or nature including but not limited to reasonable legal and accounting fees, brought by third parties as a result of:
                    <br/>Your breach of this agreement or the documents referenced herein.
                    <br/>Your violation of any law or the rights of a third party.
                    <br/>Your use of the World Tour Audio Guide platform.
                </P>
                <H4 textAlign={"start"}>
                    16. CHANGES AND TERMINATION
                </H4>
                <P textAlign={"start"} >
                    We may change the platform and these terms at any time, in our sole discretion and without notice to you. You are responsible for remaining knowledgeable about these terms. Your continued use of the platform constitutes your acceptance of any changes to these terms and any changes will supersede all previous versions of the terms. Unless otherwise specified herein, all changes to these terms apply to all users take effect. Furthermore, we may terminate this agreement with you under these terms at any time by notifying you in writing (including by email) or without any warning.
                </P>
                <H4 textAlign={"start"}>
                    17. INTEGRATION CLAUSE
                </H4>
                <P textAlign={"start"} >
                    This agreement together with the <b>privacy policy</b> and any other legal notices published by World Tour Audio Guide, shall constitute the entire agreement between you and World Tour Audio Guide concerning and governs your use of the platform.
                </P>
                <H4 textAlign={"start"}>
                    18. DISPUTES
                </H4>
                <P textAlign={"start"} >
                    <br/>The user agrees that any dispute, claim or controversy arising out of or relating to these terms and conditions, or the breach, termination, enforcement, interpretation or validity thereof or the use of the platform, shall be resolved by binding arbitration between the user and World Tour Audio Guide, provided that each party retains the right to bring an individual action in a court of competent jurisdiction.
                    <br/>In the event that a dispute arises in connection with the use of the platform or breach of these terms and conditions, the parties agree to submit their dispute to arbitration resolution before a reputable arbitration organization as mutually agreed by the parties and in accordance with applicable commercial arbitration rules.
                    <br/>You agree to initiate a formal dispute proceeding by sending us a communication through our contact information. World Tour Audio Guide may choose to send you a written offer after receiving your initial communication. If we offer and send you a settlement offer and you do not accept the offer, or we are unable to resolve your dispute satisfactorily and you wish to continue with the dispute process, you must initiate the dispute resolution process before an accredited arbitration organization and file a separate Demand for Arbitration. Any award rendered by the arbitration tribunal shall be final and conclusive on the parties. 
                    <br/>To the fullest extent permitted by law, you agree that you will not file, join or participate in any class action lawsuit in connection with any claim, dispute or controversy that may arise in connection with your use of the platform.
                    <br/>The courts of The Netherlands shall have jurisdiction over any dispute, controversy or claim relating to World Tour Audio Guide and its business operations. Any such dispute or controversy shall be brought and resolved in the courts of The Netherlands.
                </P>
                <H4 textAlign={"start"}>
                    19. FINAL PROVISIONS
                </H4>
                <P textAlign={"start"} >
                    These conditions are governed by the laws of The Netherlands. Use of the World Tour Audio Guide platform is unauthorized in any jurisdiction that does not give effect to all provisions of these terms and conditions.
                    <br/>Our performance of these terms is subject to existing laws and legal process, and nothing contained in these terms limits our right to comply with law enforcement or other governmental or legal requests or requirements relating to your use of our platform or information provided to or gathered by us with respect to such use.
                    <br/>If any part of these terms is found to be invalid, illegal or unenforceable, the validity, legality and enforceability of the remaining provisions will not in any way be affected or impaired. Our failure or delay in enforcing any provision of these terms at any time does not waive our right to enforce the same or any other provision(s) hereof in the future.
                    <br/>Any rights not expressly granted herein are reserved.
                </P>
                <H4 textAlign={"start"}>
                    20. CONTACT INFORMATION
                </H4>
                <P textAlign={"start"} >
                    <br/>If you have questions or concerns about these terms, please contact us using the contact information below:
                    <br/> World Tour Audio Guide.
                    <br/> World Tour Guide B.V.
                    <br/>Hoogstraat 115J
                    <br/> 3011PL Rotterdam
                    <br/>+31625568864
                    <br/> Info@worldtouraudioguide.com
                </P>
            </Container>
        </div>
    )
}

export default Confi;