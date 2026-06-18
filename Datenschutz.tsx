import { useEffect } from "react";
import { Link } from "react-router";

export function Datenschutz() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Datenschutzerklärung – ReMa";
  }, []);

  return (
    <div style={styles.page}>
      <style>{css}</style>

      {/* Nav */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLogo}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="1" y="1" width="20" height="20" rx="5" stroke="#FF3B30" strokeWidth="1.5"/>
            <path d="M7 11h8M11 7v8" stroke="#FF3B30" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span style={styles.navName}>ReMa</span>
        </Link>
        <div style={styles.navLinks}>
          <Link to="/impressum" style={styles.navLink}>Impressum</Link>
          <Link to="/" style={styles.navBack}>← Zurück zur Website</Link>
        </div>
      </nav>

      {/* Hero */}
      <header style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.eyebrow}>Rechtliches</div>
          <h1 style={styles.h1}>Datenschutzerklärung</h1>
          <p style={styles.heroSub}>
            Stand: {new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </header>

      {/* TOC */}
      <div style={styles.container}>
        <nav style={styles.toc} aria-label="Inhaltsverzeichnis">
          <div style={styles.tocTitle}>Inhaltsverzeichnis</div>
          <ol style={styles.tocList}>
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} style={styles.tocLink}>{item.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Content */}
        <main style={styles.main}>

          <Section id="verantwortlicher" title="1. Verantwortlicher">
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <Missing label="Name und vollständige Anschrift des Betreibers fehlen – müssen ergänzt werden" />
            <Missing label="E-Mail-Adresse fehlt – muss ergänzt werden" />
            <InfoBox>
              <strong>Hinweis:</strong> Bitte ergänzen Sie alle mit <span style={styles.missingInline}>[[ANGABE FEHLT]]</span> markierten Felder mit Ihren tatsächlichen Daten, bevor diese Seite veröffentlicht wird.
            </InfoBox>
          </Section>

          <Section id="grundsaetze" title="2. Grundsätze der Datenverarbeitung">
            <p>
              Der Betrieb dieser Website erfolgt mit dem Ziel, so wenige personenbezogene Daten wie möglich zu verarbeiten. Es werden bewusst keine Tracking-Dienste, keine Analyse-Tools, keine Werbenetzwerke und keine sozialen Plugins eingesetzt.
            </p>
            <p>
              Folgende Maßnahmen wurden gezielt ergriffen, um die Privatsphäre der Besucher zu schützen:
            </p>
            <ul style={styles.ul}>
              <li>Keine Einbindung von Google Fonts über externe Server (Schriftart wird lokal ausgeliefert)</li>
              <li>Keine Analyse-Cookies, kein Tracking, kein Remarketing</li>
              <li>Keine Social-Media-Plugins oder Einbettungen</li>
              <li>Kein Newsletter, kein Kontaktformular</li>
              <li>Keine Zahlungsanbieter</li>
              <li>Strikte Content Security Policy (CSP), die externe Verbindungen auf das technisch notwendige Minimum beschränkt</li>
            </ul>
          </Section>

          <Section id="hosting" title="3. Hosting über GitHub Pages">
            <p>
              Diese Website wird über <strong>GitHub Pages</strong> gehostet, einem Dienst der GitHub, Inc. GitHub Pages liefert die Website-Dateien direkt aus dem öffentlichen GitHub-Repository aus.
            </p>
            <p>
              Der Hosting-Anbieter ist:
            </p>
            <div style={styles.adressCard}>
              <strong>GitHub, Inc.</strong><br />
              88 Colin P Kelly Jr St<br />
              San Francisco, CA 94107<br />
              USA<br />
              (Tochterunternehmen der Microsoft Corporation)
            </div>
            <p>
              Beim Abruf dieser Website über GitHub Pages werden durch GitHub technisch notwendige Verbindungsdaten verarbeitet, darunter:
            </p>
            <ul style={styles.ul}>
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Aufgerufene URL / Seite</li>
              <li>HTTP-Statuscode</li>
              <li>Übertragene Datenmenge</li>
              <li>Referrer-URL (vorherige Seite, sofern übermittelt)</li>
              <li>Browser und Betriebssystem (User-Agent)</li>
            </ul>
            <p>
              GitHub Pages nutzt außerdem das CDN (Content Delivery Network) des Anbieters <strong>Fastly, Inc.</strong> zur Auslieferung der Website-Inhalte. Dabei kann die IP-Adresse des Besuchers auch an Fastly-Server weitergeleitet werden.
            </p>
            <h4 style={styles.h4}>Übermittlung in ein Drittland (USA)</h4>
            <p>
              GitHub und Fastly haben ihren Sitz in den USA. Die Datenübermittlung erfolgt auf Grundlage der von der EU-Kommission erlassenen Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) sowie ggf. des EU-U.S. Data Privacy Framework.
            </p>
            <h4 style={styles.h4}>Rechtsgrundlage</h4>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und erreichbaren Betrieb der Website).
            </p>
            <h4 style={styles.h4}>Speicherdauer</h4>
            <p>
              Informationen zur Speicherdauer von Server-Logfiles durch GitHub entnehmen Sie bitte der Datenschutzerklärung von GitHub:
            </p>
            <a
              href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement
            </a>
            <p>
              Spezifische Informationen zu GitHub Pages und Datenerhebung finden Sie unter:
            </p>
            <a
              href="https://docs.github.com/de/pages/getting-started-with-github-pages/about-github-pages#data-collection"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              https://docs.github.com/de/pages/getting-started-with-github-pages/about-github-pages#data-collection
            </a>
          </Section>

          <Section id="github-api" title="4. GitHub API – Automatischer Abruf beim Seitenbesuch">
            <Highlight>
              Diese Website ruft beim Laden der Seite automatisch Daten von der GitHub-API ab. Dabei wird die IP-Adresse des Besuchers erneut an GitHub übertragen – zusätzlich zur bereits unter Ziffer 3 beschriebenen Verarbeitung durch GitHub Pages.
            </Highlight>
            <p>
              Beim Aufruf dieser Website sendet der Browser des Besuchers automatisch und ohne gesonderte Handlung einen weiteren Netzwerkrequest an:
            </p>
            <CodeBlock>https://api.github.com/repos/ReMa-RemoteManager/rema/releases</CodeBlock>
            <p>
              Dieser Request dient dazu, die aktuellen Release-Informationen (Version, Datum, Dateigröße, Release Notes) der Software ReMa direkt von der GitHub-API zu laden und auf der Website anzuzeigen.
            </p>
            <h4 style={styles.h4}>Welche Daten werden übermittelt?</h4>
            <p>
              Bei jedem Abruf der GitHub-API wird mindestens die IP-Adresse des Besuchers an GitHub übermittelt. GitHub kann außerdem weitere technische Informationen wie den User-Agent des Browsers verarbeiten. Da Hosting (GitHub Pages, Ziffer 3) und API (api.github.com) vom selben Anbieter betrieben werden, liegt eine konsolidierte Datenverarbeitung durch GitHub, Inc. vor.
            </p>
            <h4 style={styles.h4}>Anbieter</h4>
            <p>
              Verantwortlich ist GitHub, Inc. (siehe Anbieterangaben unter Ziffer 3). Die Datenschutzerklärung von GitHub gilt auch für die API-Nutzung.
            </p>
            <h4 style={styles.h4}>Übermittlung in ein Drittland (USA)</h4>
            <p>
              Wie unter Ziffer 3 beschrieben erfolgt die Datenübermittlung auf Grundlage der Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) sowie ggf. des EU-U.S. Data Privacy Framework.
            </p>
            <h4 style={styles.h4}>Rechtsgrundlage</h4>
            <p>
              Die Rechtsgrundlage für diese Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Das berechtigte Interesse besteht darin, Besuchern stets aktuelle Versionsinformationen und Download-Links zur Software anzuzeigen, ohne diese Daten manuell pflegen zu müssen.
            </p>
            <InfoBox>
              <strong>Hinweis für den Betreiber:</strong> Prüfen Sie, ob das berechtigte Interesse nach Art. 6 Abs. 1 lit. f DSGVO für Ihren konkreten Fall ausreicht, oder ob eine andere Rechtsgrundlage (z. B. Einwilligung) besser geeignet ist. Falls Sie den GitHub-API-Abruf vermeiden möchten, können Release-Daten auch statisch in der HTML-Datei hinterlegt werden.
            </InfoBox>
          </Section>

          <Section id="cookies" title="5. Cookies">
            <p>
              Diese Website setzt <strong>keine eigenen Cookies</strong>. Es werden keine Analyse-Cookies, Tracking-Cookies, Marketing-Cookies oder ähnliche Technologien eingesetzt.
            </p>
            <p>
              Der Hosting-Anbieter kann technisch notwendige Session-Cookies oder ähnliche Technologien einsetzen. Informationen dazu finden Sie in der Datenschutzerklärung des Hosting-Anbieters.
            </p>
            <Missing label="Datenschutzerklärung des Hosting-Anbieters fehlt – bitte verlinken oder ergänzen" />
          </Section>

          <Section id="keine-weiteren" title="6. Nicht vorhandene Dienste">
            <p>
              Folgende Dienste und Technologien werden auf dieser Website ausdrücklich <strong>nicht</strong> eingesetzt und sind daher nicht Gegenstand dieser Datenschutzerklärung:
            </p>
            <ul style={styles.ul}>
              <li>Google Analytics, Matomo oder andere Web-Analyse-Tools</li>
              <li>Google Fonts über externe Server (Schriftart ist lokal eingebunden)</li>
              <li>Facebook Pixel, LinkedIn Insight Tag oder vergleichbare Tracking-Pixel</li>
              <li>Social-Media-Plugins (Facebook, X/Twitter, Instagram, LinkedIn etc.)</li>
              <li>Kontaktformulare</li>
              <li>Newsletter-Dienste</li>
              <li>Zahlungsanbieter</li>
              <li>Content Delivery Networks (CDNs) für eigene Ressourcen</li>
              <li>Werbedienste oder Werbenetzwerke</li>
              <li>Eingebettete Videos (YouTube, Vimeo etc.)</li>
              <li>Live-Chat oder Support-Widgets</li>
            </ul>
          </Section>

          <Section id="rechte" title="7. Ihre Rechte als betroffene Person">
            <p>
              Nach der DSGVO stehen Ihnen folgende Rechte zu:
            </p>
            <div style={styles.rightsGrid}>
              {rights.map((r) => (
                <div key={r.art} style={styles.rightCard}>
                  <div style={styles.rightArt}>{r.art}</div>
                  <div style={styles.rightTitle}>{r.title}</div>
                  <div style={styles.rightDesc}>{r.desc}</div>
                </div>
              ))}
            </div>
            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an den unter Ziffer 1 genannten Verantwortlichen.
            </p>
            <p>
              Sie haben außerdem das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren. Die zuständige Aufsichtsbehörde richtet sich nach dem Wohnsitz des Verantwortlichen.
            </p>
          </Section>

          <Section id="widerspruch" title="8. Widerspruchsrecht">
            <p>
              Soweit Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) verarbeitet werden, haben Sie gemäß Art. 21 DSGVO das Recht, jederzeit Widerspruch einzulegen. Im Fall des Widerspruchs verarbeiten wir Ihre personenbezogenen Daten nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen.
            </p>
          </Section>

          <Section id="aktualitaet" title="9. Aktualität dieser Datenschutzerklärung">
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand: {new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" })}.
            </p>
            <p>
              Durch die Weiterentwicklung dieser Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung ist jederzeit auf dieser Seite abrufbar.
            </p>
          </Section>

        </main>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerLeft}>
            © {new Date().getFullYear()} ReMa RemoteManager
          </div>
          <div style={styles.footerLinks}>
            <Link to="/impressum" style={styles.footerLink}>Impressum</Link>
            <Link to="/datenschutz" style={styles.footerLink}>Datenschutz</Link>
            <Link to="/" style={styles.footerLink}>← Website</Link>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <a href="#" style={styles.backTop} aria-label="Zurück nach oben">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={styles.section}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.sectionBody}>{children}</div>
    </section>
  );
}

function Missing({ label, inline }: { label: string; inline?: boolean }) {
  if (inline) {
    return <span style={styles.missingInline}>[[ANGABE FEHLT – {label}]]</span>;
  }
  return (
    <div style={styles.missing}>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
        <circle cx="8" cy="8" r="7" stroke="#FF3B30" strokeWidth="1.3"/>
        <path d="M8 5v3.5M8 10.5v.5" stroke="#FF3B30" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
      <span>[[ANGABE FEHLT – MUSS VOM WEBSITEBETREIBER ERGÄNZT WERDEN: {label}]]</span>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return <div style={styles.infoBox}>{children}</div>;
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <div style={styles.highlight}>{children}</div>;
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return <div style={styles.codeBlock}>{children}</div>;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const toc = [
  { id: "verantwortlicher", label: "1. Verantwortlicher" },
  { id: "grundsaetze", label: "2. Grundsätze der Datenverarbeitung" },
  { id: "hosting", label: "3. Hosting über GitHub Pages" },
  { id: "github-api", label: "4. GitHub API – Automatischer Abruf" },
  { id: "cookies", label: "5. Cookies" },
  { id: "keine-weiteren", label: "6. Nicht vorhandene Dienste" },
  { id: "rechte", label: "7. Ihre Rechte als betroffene Person" },
  { id: "widerspruch", label: "8. Widerspruchsrecht" },
  { id: "aktualitaet", label: "9. Aktualität dieser Erklärung" },
];

const rights = [
  {
    art: "Art. 15 DSGVO",
    title: "Auskunftsrecht",
    desc: "Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu verlangen.",
  },
  {
    art: "Art. 16 DSGVO",
    title: "Berichtigungsrecht",
    desc: "Sie haben das Recht, die unverzügliche Berichtigung unrichtiger personenbezogener Daten zu verlangen.",
  },
  {
    art: "Art. 17 DSGVO",
    title: "Löschungsrecht",
    desc: "Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern die gesetzlichen Voraussetzungen vorliegen.",
  },
  {
    art: "Art. 18 DSGVO",
    title: "Einschränkung der Verarbeitung",
    desc: "Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.",
  },
  {
    art: "Art. 20 DSGVO",
    title: "Datenübertragbarkeit",
    desc: "Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen Format zu erhalten.",
  },
  {
    art: "Art. 21 DSGVO",
    title: "Widerspruchsrecht",
    desc: "Sie haben das Recht, der Verarbeitung Ihrer Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zu widersprechen.",
  },
  {
    art: "Art. 77 DSGVO",
    title: "Beschwerderecht",
    desc: "Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.",
  },
  {
    art: "Art. 7 Abs. 3 DSGVO",
    title: "Widerruf der Einwilligung",
    desc: "Sofern eine Verarbeitung auf Einwilligung beruht, haben Sie das Recht, diese jederzeit zu widerrufen.",
  },
];

// ─── Styles ────────────────────────────────────────────────────────────────────

const C = {
  bg: "#050506",
  s1: "#0B0B0E",
  s2: "#121217",
  s3: "#1A1A20",
  b: "rgba(255,255,255,0.06)",
  bh: "rgba(255,255,255,0.11)",
  red: "#FF3B30",
  redA: "rgba(255,59,48,0.10)",
  redB: "rgba(255,59,48,0.20)",
  w: "#F5F5F7",
  g1: "#A1A1AA",
  g2: "#62626B",
  g3: "#3F3F46",
  orange: "rgba(251,146,60,0.12)",
  orangeB: "rgba(251,146,60,0.8)",
};

const styles: Record<string, React.CSSProperties> = {
  page: {
    background: C.bg,
    color: C.w,
    fontFamily: "'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
    WebkitFontSmoothing: "antialiased",
    minHeight: "100vh",
    lineHeight: "1.5",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 200,
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 32px",
    background: "rgba(5,5,6,0.88)",
    backdropFilter: "blur(32px) saturate(180%)",
    borderBottom: `1px solid ${C.b}`,
    boxShadow: "0 1px 0 rgba(255,255,255,.04)",
  },
  navLogo: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    textDecoration: "none",
    color: C.w,
    fontSize: 15,
    fontWeight: 800,
    letterSpacing: "-0.04em",
  },
  navName: {
    fontSize: 15,
    fontWeight: 800,
    letterSpacing: "-0.04em",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  navLink: {
    fontSize: 13,
    fontWeight: 500,
    color: C.g1,
    textDecoration: "none",
    padding: "6px 12px",
    borderRadius: 999,
    transition: "color 0.15s, background 0.15s",
  },
  navBack: {
    fontSize: 13,
    fontWeight: 600,
    color: C.red,
    textDecoration: "none",
    padding: "6px 12px",
    borderRadius: 999,
    background: C.redA,
  },
  hero: {
    paddingTop: 56,
    background: `radial-gradient(ellipse 80% 50% at 50% 0%, #1C1A2A 0%, #050506 65%)`,
    borderBottom: `1px solid ${C.b}`,
  },
  heroInner: {
    maxWidth: 780,
    margin: "0 auto",
    padding: "72px 24px 56px",
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
    color: C.red,
    marginBottom: 14,
  },
  h1: {
    fontSize: "clamp(36px, 5vw, 60px)",
    fontWeight: 900,
    lineHeight: 1.0,
    letterSpacing: "-0.045em",
    color: C.w,
    margin: "0 0 12px",
  },
  heroSub: {
    fontSize: 14,
    color: C.g2,
    margin: 0,
  },
  container: {
    maxWidth: 980,
    margin: "0 auto",
    padding: "48px 24px 80px",
    display: "grid",
    gridTemplateColumns: "220px 1fr",
    gap: 48,
    alignItems: "start",
  },
  toc: {
    position: "sticky" as const,
    top: 72,
    background: C.s1,
    border: `1px solid ${C.b}`,
    borderRadius: 14,
    padding: "20px 0",
  },
  tocTitle: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: C.g3,
    padding: "0 16px 10px",
    borderBottom: `1px solid ${C.b}`,
    marginBottom: 6,
  },
  tocList: {
    listStyle: "none",
    margin: 0,
    padding: "4px 8px",
    display: "flex",
    flexDirection: "column" as const,
    gap: 1,
  },
  tocLink: {
    display: "block",
    fontSize: 12,
    color: C.g1,
    textDecoration: "none",
    padding: "5px 8px",
    borderRadius: 7,
    transition: "color 0.15s, background 0.15s",
    lineHeight: 1.4,
  },
  main: {
    minWidth: 0,
  },
  section: {
    marginBottom: 48,
    paddingBottom: 48,
    borderBottom: `1px solid ${C.b}`,
    scrollMarginTop: 80,
  },
  sectionTitle: {
    fontSize: "clamp(18px, 2vw, 24px)",
    fontWeight: 700,
    letterSpacing: "-0.025em",
    color: C.w,
    margin: "0 0 20px",
  },
  sectionBody: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 14,
    fontSize: 14,
    color: C.g1,
    lineHeight: 1.75,
  },
  h4: {
    fontSize: 14,
    fontWeight: 600,
    color: C.w,
    margin: "4px 0 2px",
  },
  ul: {
    margin: 0,
    paddingLeft: 20,
    display: "flex",
    flexDirection: "column" as const,
    gap: 5,
  },
  missing: {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    background: C.redA,
    border: `1px solid ${C.redB}`,
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 12,
    color: "#FF7060",
    fontFamily: "'SF Mono', 'Fira Code', monospace",
    fontWeight: 500,
    lineHeight: 1.5,
  },
  missingInline: {
    background: C.redA,
    border: `1px solid ${C.redB}`,
    borderRadius: 4,
    padding: "1px 5px",
    fontSize: 11,
    color: "#FF7060",
    fontFamily: "'SF Mono', 'Fira Code', monospace",
  },
  infoBox: {
    background: C.orange,
    border: `1px solid rgba(251,146,60,0.25)`,
    borderRadius: 10,
    padding: "12px 16px",
    fontSize: 13,
    color: "rgba(251,180,120,0.9)",
    lineHeight: 1.65,
  },
  highlight: {
    background: C.redA,
    border: `1px solid ${C.redB}`,
    borderRadius: 10,
    padding: "12px 16px",
    fontSize: 13,
    color: "#FF9A94",
    lineHeight: 1.65,
    fontWeight: 500,
  },
  codeBlock: {
    background: C.s2,
    border: `1px solid ${C.b}`,
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 12,
    color: C.g1,
    fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
    overflowX: "auto" as const,
    whiteSpace: "nowrap" as const,
  },
  link: {
    color: C.red,
    textDecoration: "none",
  },
  rightsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 8,
  },
  rightCard: {
    background: C.s2,
    border: `1px solid ${C.b}`,
    borderRadius: 10,
    padding: "14px 16px",
  },
  rightArt: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    color: C.red,
    marginBottom: 4,
  },
  rightTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: C.w,
    marginBottom: 5,
  },
  rightDesc: {
    fontSize: 12,
    color: C.g1,
    lineHeight: 1.6,
  },
  footer: {
    borderTop: `1px solid ${C.b}`,
    padding: "24px",
  },
  footerInner: {
    maxWidth: 980,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 12,
    color: C.g3,
    flexWrap: "wrap" as const,
    gap: 12,
  },
  footerLeft: {
    color: C.g3,
  },
  footerLinks: {
    display: "flex",
    gap: 16,
  },
  footerLink: {
    color: C.g2,
    textDecoration: "none",
  },
  adressCard: {
    background: C.s2,
    border: `1px solid ${C.b}`,
    borderRadius: 10,
    padding: "14px 18px",
    fontSize: 13,
    color: C.g1,
    lineHeight: 1.8,
    fontStyle: "normal" as const,
  },
  backTop: {
    position: "fixed" as const,
    bottom: 28,
    right: 28,
    width: 40,
    height: 40,
    background: C.s2,
    border: `1px solid ${C.b}`,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: C.g1,
    textDecoration: "none",
    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
    transition: "background 0.15s, color 0.15s",
  },
};

const css = `
  @media (max-width: 720px) {
    [data-legal-container] {
      grid-template-columns: 1fr !important;
    }
    [data-legal-toc] {
      display: none !important;
    }
  }
  @media (max-width: 520px) {
    [data-rights-grid] {
      grid-template-columns: 1fr !important;
    }
  }
  a[href]:hover { opacity: 0.8; }
  @media print {
    nav, [data-legal-toc], [data-back-top] { display: none !important; }
    body { background: white !important; color: black !important; }
  }
`;
