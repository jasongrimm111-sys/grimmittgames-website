// Builds /privacy/, /terms/ and /cookies/ with the home page's header and footer. Run: node _tools/legal.js
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const home = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const toHome = s => s.replace(/href="#/g, 'href="/#');
const header = toHome(home.match(/<header>[\s\S]*?<\/header>/)[0]);
const footer = toHome(home.match(/<footer>[\s\S]*?<\/footer>/)[0]);
const UPDATED = '28 October 2026';
const CO = 'Grimmitt Games Limited, a company registered in England and Wales (company number 17531910)';
const MAIL = '<a href="mailto:contact@grimmittgames.com">contact@grimmittgames.com</a>';

const pages = {
  privacy: {
    title:'Privacy policy', desc:'How Grimmitt Games handles personal information on grimmittgames.com.',
    body:`
<p>This policy explains what personal information we handle when you visit <strong>grimmittgames.com</strong> (the "website") or email us, and the choices you have. It is written to meet the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
<div class="box"><strong>In short:</strong> the website has no accounts, forms, adverts, analytics or tracking, and sets no cookies. If you email us, we use your message only to reply.</div>

<h2>Who we are</h2>
<p>The website is run by ${CO} ("Grimmitt Games", "we", "us"). We are the controller of the personal information described here. You can contact us about anything in this policy at ${MAIL}.</p>
<p>Our game <strong>Monkey Vine Rush</strong> has its own privacy policy at <a href="https://monkeyvinerush.com/privacy/">monkeyvinerush.com/privacy</a>, which covers the game and its website.</p>

<h2>What we collect</h2>
<p><strong>When you browse the website:</strong> we don't collect anything ourselves. There are no sign-ups, forms, analytics, advertising or social media plug-ins, and our fonts, images and videos are all served from our own site, so no third party learns about your visit from us.</p>
<p><strong>Our web host:</strong> the website is hosted by GitHub Pages (GitHub, Inc.). Like any web server, GitHub receives technical information when your browser requests a page, such as your IP address, browser type and the page requested, and keeps it for a short time for security and to keep the service running. We can't see or access this information. GitHub's handling of it is described in the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub General Privacy Statement</a>.</p>
<p><strong>When you email us:</strong> we receive your email address, your name if you include it, and whatever you choose to write. We use this only to read and reply to your message and to keep a record of our conversation.</p>

<h2>Why we use it (legal basis)</h2>
<p>We handle emails on the basis of our <strong>legitimate interests</strong> in responding to people who contact us and running our business. Where your email relates to a contract with us, we rely on that contract.</p>

<h2>Who we share it with</h2>
<p>We don't sell or rent personal information, and we don't share it for marketing. Emails to our address pass through our email forwarding service and are stored by our email provider, who act only on our instructions. Some of these providers are based in, or store data in, the United States; where that happens, the transfer is protected by the UK's data adequacy arrangements or by standard data protection contract terms approved for the UK. We would only disclose information if the law required us to.</p>

<h2>How long we keep it</h2>
<p>We keep emails for as long as we need them to deal with your enquiry and any follow-up, and then delete them, normally within two years of our last contact, unless the law requires us to keep them longer.</p>

<h2>Your rights</h2>
<p>Under UK data protection law you have the right to:</p>
<ul>
<li>ask for a copy of the personal information we hold about you;</li>
<li>ask us to correct information that is wrong or incomplete;</li>
<li>ask us to delete your information;</li>
<li>ask us to restrict how we use it, or object to our using it;</li>
<li>ask us to transfer information you gave us to you or someone else (data portability).</li>
</ul>
<p>To use any of these rights, email ${MAIL}. We will reply within one month. It is free of charge in most cases.</p>
<p>If you're unhappy with how we've handled your information, please tell us first so we can try to put it right. You also have the right to complain to the Information Commissioner's Office (ICO), the UK's data protection regulator: <a href="https://ico.org.uk/make-a-complaint/">ico.org.uk/make-a-complaint</a> or 0303 123 1113.</p>

<h2>Children</h2>
<p>The website is suitable for all ages and collects no information from visitors. We ask that children under 13 get a parent's or guardian's help before emailing us.</p>

<h2>Changes to this policy</h2>
<p>If we change how we handle personal information, for example by adding a contact form or analytics, we will update this policy and the date at the top before the change takes effect.</p>`},
  terms: {
    title:'Terms of use', desc:'The terms that apply when you use grimmittgames.com.',
    body:`
<p>These terms apply when you use <strong>grimmittgames.com</strong> (the "website"), which is run by ${CO} ("Grimmitt Games", "we", "us"). By using the website you agree to them. If you don't agree, please don't use the website.</p>
<p>These terms cover the website only. Playing <strong>Monkey Vine Rush</strong> is covered by the game's own <a href="https://monkeyvinerush.com/terms/">terms of service</a>, and downloads from the App Store are also covered by Apple's terms.</p>

<h2>Using the website</h2>
<p>You may view the website and share links to it for your own, non-commercial use. Please don't:</p>
<ul>
<li>use the website in any way that breaks the law or harms anyone;</li>
<li>try to gain unauthorised access to the website, its hosting or any connected system, or interfere with how it works;</li>
<li>copy large parts of the website, or scrape it with automated tools, except as normal search engines do.</li>
</ul>

<h2>Our content and brands</h2>
<p>Everything on the website, including text, images, videos, logos and the names "Grimmitt Games" and "Monkey Vine Rush", belongs to us or our licensors and is protected by copyright, trade mark and other laws. Except as these terms allow, you may not copy, change or use it without our written permission. For press or partnership use of our logos and screenshots, please contact ${MAIL}.</p>
<p>Apple, the Apple logo, iPhone, iPad and App Store are trademarks of Apple Inc., registered in the U.S. and other countries.</p>

<h2>Links to other websites</h2>
<p>The website links to other sites, such as the App Store and monkeyvinerush.com. We aren't responsible for the content or privacy practices of sites we don't run.</p>

<h2>Accuracy and availability</h2>
<p>We work to keep the website accurate and available, but it is provided "as is". Information about our games, such as features, prices and availability, can change, and the website may occasionally be unavailable or contain mistakes. We may change or remove any part of it at any time.</p>

<h2>Our liability</h2>
<p>Nothing in these terms limits or excludes our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot be limited or excluded under the law of England and Wales. Otherwise, we are not liable for any loss or damage arising from your use of the website, including any loss of profit, business or data, or any loss that was not reasonably foreseeable. If you are a consumer, nothing in these terms affects your legal rights.</p>

<h2>Changes to these terms</h2>
<p>We may update these terms from time to time. The date at the top shows when they last changed, and the version on this page always applies.</p>

<h2>Law and disputes</h2>
<p>These terms are governed by the law of England and Wales. Any dispute will be handled by the courts of England and Wales, except that if you live in Scotland or Northern Ireland you may also bring proceedings in your home courts.</p>

<h2>Contact</h2>
<p>Questions about these terms: ${MAIL}.</p>`},
  cookies: {
    title:'Cookie policy', desc:'grimmittgames.com sets no cookies.',
    body:`
<div class="box"><strong>The short version:</strong> grimmittgames.com does not use cookies or any similar technology, so there is nothing to accept or turn off.</div>

<h2>What cookies are</h2>
<p>Cookies are small text files a website can save on your device, for example to remember settings or to track visits. Similar technologies include browser storage (such as "local storage"), tracking pixels and device fingerprinting. Under the UK's Privacy and Electronic Communications Regulations (PECR), a website must ask your permission before using any of these unless they are strictly necessary.</p>

<h2>What this website uses</h2>
<div class="tablewrap"><table>
<thead><tr><th>Type</th><th>Used?</th><th>Details</th></tr></thead>
<tbody>
<tr><td>Strictly necessary cookies</td><td>No</td><td>The website doesn't need any cookies to work.</td></tr>
<tr><td>Analytics or statistics</td><td>No</td><td>We don't measure or track visits.</td></tr>
<tr><td>Advertising or tracking</td><td>No</td><td>There are no adverts, tracking pixels or social media plug-ins.</td></tr>
<tr><td>Browser storage</td><td>No</td><td>The website doesn't save anything on your device.</td></tr>
<tr><td>Third-party content</td><td>No</td><td>Our fonts, images and videos are served from our own site, so no other company can set cookies through it.</td></tr>
</tbody></table></div>
<p>Our web host, GitHub Pages, does not set cookies on the website. If you follow a link to another site, such as the App Store, that site's own cookie policy applies.</p>

<h2>Monkey Vine Rush</h2>
<p>The Monkey Vine Rush website has its own <a href="https://monkeyvinerush.com/cookies/">cookie policy</a>.</p>

<h2>If this changes</h2>
<p>If we ever add something that uses cookies or similar technology, we will update this policy first and, where the law requires it, ask for your permission before anything is set.</p>

<h2>Contact</h2>
<p>Questions about cookies: ${MAIL}.</p>`},
};

for (const [slug, p] of Object.entries(pages)){
  const html = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${p.title} · Grimmitt Games</title>
<meta name="description" content="${p.desc}">
<meta name="theme-color" content="#0b0d13">
<link rel="canonical" href="https://www.grimmittgames.com/${slug}/">
<link rel="icon" href="/img/mark.svg" type="image/svg+xml">
<link rel="icon" href="/img/mark-192.png" type="image/png" sizes="192x192">
<link rel="apple-touch-icon" href="/img/mark-180.png">
<link rel="preload" href="/fonts/SpaceGrotesk.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/site.css">
</head>
<body>

${header}

<main class="doc">
  <div class="wrap">
    <p class="kicker">Legal</p>
    <h1>${p.title}</h1>
    <p class="updated">Last updated ${UPDATED}</p>
${p.body.trim()}
  </div>
</main>

${footer.replace(`<a href="/${slug}/">`, `<a href="/${slug}/" aria-current="page">`)}
</body>
</html>
`;
  fs.mkdirSync(path.join(root, slug), { recursive:true });
  fs.writeFileSync(path.join(root, slug, 'index.html'), html);
}
console.log('built', Object.keys(pages).join(', '));
