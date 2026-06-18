import { useEffect } from "react";
import { Link } from "react-router";

export function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Impressum – ReMa";
  }, []);

  return (
    <div style={styles.page}>

      {/* Nav */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLogo}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="1" y="1" width="20" height="20" rx="5" stroke="#FF3B30" strokeWidth="1.5"/>
            <path d="M7 11h8M11 7v8" stroke="#FF3B30" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span>ReMa</span>
        </Link>
        <div style={styles.navLinks}>
          <Link to="/datenschutz" style={styles.navLink}>Datenschutz</Link>
          <Link to="/" style={styles.navBack}>← Zurück zur Website</Link>
        </div>
      </nav>

      {/* Hero */}
      <header style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.eyebrow}>Rechtliches</div>
          <h1 style={styles.h1}>Impressum</h1>
          <p style={styles.heroSub}>
            Pflichtangaben gemäß § 5 TMG / § 18 MStV
          </p>
        </div>
      </header>

      <div style={styles.container}>
        <main style={styles.main}>

          {/* Status notice */}
          <div style={styles.statusNotice}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
              <circle cx="8" cy="8" r="7" stroke="rgba(251,146,60,0.9)" strokeWidth="1.3"/>
              <path d="M8 5v3.5M8 10.5v.5" stroke="rgba(251,146,60,0.9)" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <div>
              <strong style={{ color: "rgba(251,180,120,0.95)" }}>Status nicht vollständig feststellbar</strong>
              <p style={{ margin: "4px 0 0", fontSize: 13, lineHeight: 1.6 }}>
                Der Betreiber dieser Website ist aktuell eine Privatperson. Es konnte nicht eindeutig festgestellt werden, ob diese Website rein privat, als Hobbyprojekt oder geschäftsmäßig betrieben wird. Ob eine Impressumspflicht nach § 5 TMG bzw. § 18 MStV besteht, hängt von der tatsächlichen Nutzungsart ab.
              </p>
              <p style={{ margin: "8px 0 0", fontSize: 13, lineHeight: 1.6 }}>
                <strong style={{ color: "rgba(251,180,120,0.9)" }}>Bitte beachten Sie:</strong> Alle mit <span style={styles.missingInline}>[[ANGABE FEHLT]]</span> markierten Felder müssen vor der Veröffentlichung durch den Betreiber mit korrekten Daten ersetzt werden. Erfinden, erfundene Adressen oder Fantasiedaten sind rechtlich nicht zulässig.
              </p>
            </div>
          </div>

          {/* Impressumspflicht note */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Zur Impressumspflicht</h2>
            <div style={styles.sectionBody}>
              <p>
                Eine Impressumspflicht nach § 5 TMG besteht für <strong>geschäftsmäßige</strong> Telemedien. Für rein private Websites ohne kommerzielle Absicht besteht grundsätzlich keine Impressumspflicht. Zu beachten ist allerdings:
              </p>
              <ul style={styles.ul}>
                <li>Wird die Software gegen Entgelt oder mit Gewinnerzielungsabsicht angeboten, liegt Geschäftsmäßigkeit vor.</li>
                <li>Auch kostenlose Software kann gewerbsmäßig sein, wenn sie regelmäßig und mit wirtschaftlichem Interesse angeboten wird.</li>
                <li>Ein GitHub-Projekt mit eigener Landing Page kann als geschäftsmäßig eingestuft werden, auch wenn kein direktes Entgelt verlangt wird.</li>
                <li>Im Zweifelsfall empfiehlt sich das Vorhalten eines vollständigen Impressums, auch wenn keine eindeutige Pflicht besteht.</li>
              </ul>
              <div style={styles.statusBlock}>
                <span style={styles.statusTag}>[[STATUS NICHT FESTSTELLBAR – BETREIBER MUSS ANGEBEN, OB DIE WEBSITE PRIVAT ODER GEWERBLICH BETRIEBEN WIRD]]</span>
              </div>
            </div>
          </section>

          {/* Angaben */}
          <section id="angaben" style={styles.section}>
            <h2 style={styles.sectionTitle}>Angaben gemäß § 5 TMG</h2>
            <div style={styles.sectionBody}>

              <div style={styles.fieldGroup}>
                <div style={styles.fieldLabel}>Name / Verantwortlicher</div>
                <Missing label="Vollständiger Name des Betreibers (Vor- und Nachname bei Privatpersonen, Firmenname bei Unternehmen)" />
              </div>

              <div style={styles.fieldGroup}>
                <div style={styles.fieldLabel}>Anschrift</div>
                <Missing label="Straße, Hausnummer, PLZ, Ort, Land" />
                <div style={styles.fieldNote}>
                  Es muss eine ladungsfähige Anschrift angegeben werden. Postfächer oder Briefkästen ohne Wohnanschrift sind nicht ausreichend.
                </div>
              </div>

              <div style={styles.fieldGroup}>
                <div style={styles.fieldLabel}>Kontakt</div>
                <Missing label="E-Mail-Adresse (Pflichtangabe)" />
                <Missing label="Telefonnummer oder Faxnummer (empfohlen; nach aktueller Rechtslage kann alternativ ein elektronisches Kontaktformular ausreichen, sofern Antworten binnen 60 Minuten erfolgen)" />
              </div>

              <div style={styles.infoBox}>
                <strong>Hinweis zu gewerblichen Betreibern:</strong> Falls die Website von einem eingetragenen Kaufmann, einer GmbH, einer UG, einer AG oder ähnlichem betrieben wird, sind zusätzlich folgende Angaben erforderlich:
                <ul style={{ ...styles.ul, marginTop: 8 }}>
                  <li>Rechtsform</li>
                  <li>Registergericht und Registernummer</li>
                  <li>Umsatzsteuer-Identifikationsnummer (sofern vorhanden)</li>
                  <li>Vertretungsberechtigte Person(en) (z.B. Geschäftsführer)</li>
                </ul>
                <div style={{ marginTop: 8 }}>Da dies nicht feststellbar ist, werden diese Angaben hier <strong>nicht</strong> aufgeführt.</div>
              </div>
            </div>
          </section>

          {/* Streitschlichtung */}
          <section id="streitschlichtung" style={styles.section}>
            <h2 style={styles.sectionTitle}>Streitschlichtung</h2>
            <div style={styles.sectionBody}>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <p>
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
              <div style={styles.infoBox}>
                <strong>Hinweis:</strong> Die Angabe zur OS-Plattform und Streitschlichtung ist nur bei Verbraucherverträgen relevant. Wird die Software ausschließlich kostenlos und ohne Kaufvertrag angeboten, ist dieser Abschnitt möglicherweise nicht erforderlich. Dies ist vom Betreiber zu prüfen.
              </div>
            </div>
          </section>

          {/* Haftung Inhalte */}
          <section id="haftung-inhalte" style={styles.section}>
            <h2 style={styles.sectionTitle}>Haftung für Inhalte</h2>
            <div style={styles.sectionBody}>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>
          </section>

          {/* Hosting */}
          <section id="hosting" style={styles.section}>
            <h2 style={styles.sectionTitle}>Hosting</h2>
            <div style={styles.sectionBody}>
              <p>
                Diese Website wird über <strong>GitHub Pages</strong> gehostet. GitHub Pages ist ein Dienst der:
              </p>
              <div style={styles.adressCard}>
                <strong>GitHub, Inc.</strong><br />
                88 Colin P Kelly Jr St<br />
                San Francisco, CA 94107<br />
                USA<br />
                (Tochterunternehmen der Microsoft Corporation)
              </div>
              <p>
                Beim Abruf dieser Website werden durch GitHub technisch notwendige Verbindungsdaten verarbeitet (u. a. IP-Adresse). Die Daten werden in die USA übertragen. Weitere Informationen entnehmen Sie der Datenschutzerklärung dieser Website sowie der Datenschutzerklärung von GitHub:{" "}
                <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" style={styles.link}>
                  GitHub Datenschutzerklärung
                </a>
              </p>
            </div>
          </section>

          {/* Haftung Links */}
          <section id="haftung-links" style={styles.section}>
            <h2 style={styles.sectionTitle}>Haftung für Links</h2>
            <div style={styles.sectionBody}>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
              <p>
                Diese Website verlinkt insbesondere auf:
              </p>
              <ul style={styles.ul}>
                <li>GitHub (github.com) – für Download-Links und Release-Informationen</li>
              </ul>
            </div>
          </section>

          {/* Urheberrecht */}
          <section id="urheberrecht" style={{ ...styles.section, borderBottom: "none", marginBottom: 0, paddingBottom: 0 }}>
            <h2 style={styles.sectionTitle}>Urheberrecht</h2>
            <div style={styles.sectionBody}>
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </section>

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

      <a href="#" style={styles.backTop} aria-label="Zurück nach oben">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );
}

function Missing({ label }: { label: string }) {
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
  },
  navBack: {
    fontSize: 13,
    fontWeight: 600,
    color: C.red,
    textDecoration: "none",
    padding: "6px 12px",
    borderRadius: 999,
    background: "rgba(255,59,48,0.10)",
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
    maxWidth: 780,
    margin: "0 auto",
    padding: "48px 24px 80px",
  },
  main: {
    minWidth: 0,
  },
  statusNotice: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    background: "rgba(251,146,60,0.08)",
    border: "1px solid rgba(251,146,60,0.22)",
    borderRadius: 12,
    padding: "16px 18px",
    marginBottom: 36,
    fontSize: 13,
    color: "rgba(251,180,120,0.75)",
    lineHeight: 1.65,
  },
  section: {
    marginBottom: 40,
    paddingBottom: 40,
    borderBottom: `1px solid ${C.b}`,
    scrollMarginTop: 80,
  },
  sectionTitle: {
    fontSize: "clamp(18px, 2vw, 22px)",
    fontWeight: 700,
    letterSpacing: "-0.025em",
    color: C.w,
    margin: "0 0 18px",
  },
  sectionBody: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 12,
    fontSize: 14,
    color: C.g1,
    lineHeight: 1.75,
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 6,
  },
  fieldLabel: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: C.g3,
  },
  fieldNote: {
    fontSize: 12,
    color: C.g2,
    lineHeight: 1.6,
    padding: "0 0 0 2px",
  },
  missing: {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    background: "rgba(255,59,48,0.08)",
    border: "1px solid rgba(255,59,48,0.18)",
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 12,
    color: "#FF7060",
    fontFamily: "'SF Mono', 'Fira Code', monospace",
    fontWeight: 500,
    lineHeight: 1.5,
  },
  missingInline: {
    background: "rgba(255,59,48,0.10)",
    border: "1px solid rgba(255,59,48,0.20)",
    borderRadius: 4,
    padding: "1px 5px",
    fontSize: 11,
    color: "#FF7060",
    fontFamily: "'SF Mono', 'Fira Code', monospace",
  },
  statusBlock: {
    background: "rgba(255,59,48,0.06)",
    border: "1px solid rgba(255,59,48,0.15)",
    borderRadius: 8,
    padding: "12px 14px",
  },
  statusTag: {
    fontSize: 12,
    color: "#FF7060",
    fontFamily: "'SF Mono', 'Fira Code', monospace",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  infoBox: {
    background: "rgba(251,146,60,0.08)",
    border: "1px solid rgba(251,146,60,0.20)",
    borderRadius: 10,
    padding: "12px 16px",
    fontSize: 13,
    color: "rgba(251,180,120,0.85)",
    lineHeight: 1.65,
  },
  ul: {
    margin: 0,
    paddingLeft: 20,
    display: "flex",
    flexDirection: "column" as const,
    gap: 5,
  },
  link: {
    color: C.red,
    textDecoration: "none",
    fontSize: 13,
  },
  adressCard: {
    background: C.s2,
    border: `1px solid ${C.b}`,
    borderRadius: 10,
    padding: "14px 18px",
    fontSize: 13,
    color: C.g1,
    lineHeight: 1.8,
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
  footerLeft: { color: C.g3 },
  footerLinks: { display: "flex", gap: 16 },
  footerLink: { color: C.g2, textDecoration: "none" },
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
  },
};
