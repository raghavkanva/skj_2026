/* eslint-disable @next/next/no-img-element */
import styles from "./pdf-qr-pass.module.css";

export const metadata = {
  title: "ISKCON Salem – QR Pass Information",
  robots: { index: false, follow: false },
};

export default function QrPass() {
  return (
    <div className={styles.root}>

      {/* ══════════════════ PAGE 1 — ENGLISH ══════════════════ */}
      <div className={styles.page}>

        {/* Header */}
        <header className={styles.header}>
          <img src="/images/logo.png" alt="ISKCON Salem" className={styles.logo} />
          <div className={styles.headerDivider} aria-hidden="true" />
          <div className={styles.headerText}>
            <p className={styles.orgName}>ISKCON SALEM</p>
            <p className={styles.templeName}>Sri Gaura Radha Gokulananda Temple</p>
          </div>
        </header>
        <div className={styles.goldRule} />

        {/* Document label */}
        <p className={styles.docLabel}>QR PASS INFORMATION</p>
        <div className={styles.thinRule} />

        {/* Opening */}
        <p className={styles.opening}>Hare Krishna 🙏</p>

        {/* Invitation */}
        <p className={styles.body}>
          We are very happy to invite you for{" "}
          <em>Sri Krishna Janmashtami on 4th September at Sona College</em>. 🎉
        </p>

        {/* Programs + Prasadam card */}
        <div className={styles.infoCard}>
          <div className={styles.infoRow}>
            <span className={styles.infoEmoji}>🕐</span>
            <p className={styles.infoText}><em>Programs:</em> 8:00 AM to 10:00 PM</p>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoEmoji}>🍛</span>
            <p className={styles.infoText}><em>Prasadam:</em> Served throughout the event</p>
          </div>
        </div>

        {/* Personal message warning */}
        <div className={styles.warningBox}>
          <p className={styles.warningText}>
            <em>This is a personal message specially sent to you. Please DO NOT FORWARD this message to anyone.</em> 🙏
          </p>
        </div>

        {/* Reception Stall */}
        <p className={styles.body}>
          Please come to the{" "}
          <em>Reception Stall at the program venue</em> and contact me
          personally to collect your{" "}
          <em>QR Pass for QUICK DARSHAN &amp; PRASADAM</em>. 📲
        </p>

        {/* Peak Hours */}
        <div className={styles.peakSection}>
          <p className={styles.peakHeading}>⚠️ <em>Peak Hours:</em></p>
          <ul className={styles.peakList}>
            <li>12:00 Noon <strong>–</strong> 2:00 PM</li>
            <li>5:00 PM <strong>–</strong> 8:00 PM</li>
          </ul>
        </div>

        {/* QR Pass benefit */}
        <p className={styles.body}>
          With the <em>QR Pass</em>, you can avail{" "}
          <em>Quick Darshan and Prasadam</em> while avoiding the regular crowds.
        </p>

        {/* Minimal crowd recommendation */}
        <p className={styles.body}>
          However, if you prefer <em>very minimal crowd</em>, we strongly recommend
          avoiding <em>12:00 Noon – 2:00 PM</em> and <em>5:00 PM – 8:00 PM</em>.
        </p>

        {/* Closing */}
        <div className={styles.closing}>
          <div className={styles.closingRule} />
          <span className={styles.ornament}>✦</span>
          <p className={styles.body}>Thank you very much. 🙏</p>
          <p className={styles.bodyItalic}>See you on September 4!</p>
          <p className={styles.hkClosing}>Hare Krishna! 🌸</p>
        </div>

      </div>

      {/* ══════════════════ PAGE 2 — TAMIL ══════════════════ */}
      <div className={`${styles.page} ${styles.page2}`}>

        {/* Header */}
        <header className={styles.header}>
          <img src="/images/logo.png" alt="ISKCON Salem" className={styles.logo} />
          <div className={styles.headerDivider} aria-hidden="true" />
          <div className={styles.headerText}>
            <p className={styles.orgName}>ISKCON SALEM</p>
            <p className={`${styles.templeName} ${styles.ta}`}>ஸ்ரீ ஸ்ரீ ராதா கோகுலானந்தா கோயில்</p>
          </div>
        </header>
        <div className={styles.goldRule} />

        {/* Document label */}
        <p className={styles.docLabel}>QR PASS INFORMATION</p>
        <div className={styles.thinRule} />

        {/* Opening */}
        <p className={`${styles.opening} ${styles.ta}`}>ஹரே கிருஷ்ணா 🙏</p>

        {/* Invitation */}
        <p className={`${styles.body} ${styles.ta}`}>
          செப்டம்பர் 4-ஆம் தேதி Sona College-ல் நடைபெறும்{" "}
          <em>ஸ்ரீ கிருஷ்ண ஜன்மாஷ்டமி விழாவிற்கு</em> உங்களை அன்புடன் அழைக்கிறோம். 🎉
        </p>

        {/* Programs + Prasadam card */}
        <div className={styles.infoCard}>
          <div className={styles.infoRow}>
            <span className={styles.infoEmoji}>🕐</span>
            <p className={`${styles.infoText} ${styles.ta} ${styles.infoTextBold}`}>
              நிகழ்ச்சி நேரம்: காலை 8:00 மணி முதல் இரவு 10:00 மணி வரை
            </p>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoEmoji}>🍛</span>
            <p className={`${styles.infoText} ${styles.ta} ${styles.infoTextBold}`}>
              பிரசாதம்: நிகழ்ச்சி முழுவதும் வழங்கப்படும்
            </p>
          </div>
        </div>

        {/* Personal message warning */}
        <div className={styles.warningBox}>
          <p className={`${styles.warningText} ${styles.ta}`}>
            <em>
              இந்த தனிப்பட்ட அழைப்பிதழ் உங்களுக்காகவே அனுப்பப்படுகிறது.
              தயவுசெய்து இந்த செய்தியை யாரிடமும் FORWARD செய்ய வேண்டாம்.
            </em>{" "}🙏
          </p>
        </div>

        {/* Reception Stall */}
        <p className={`${styles.body} ${styles.ta}`}>
          நிகழ்ச்சி நடைபெறும் இடத்தில் உள்ள{" "}
          <em>Reception Stall-க்கு</em> வந்து, என்னை தனிப்பட்ட முறையில்
          தொடர்பு கொண்டு{" "}
          <em>விரைவு தரிசனம் &amp; பிரசாதத்திற்கான QR Pass-ஐ</em>{" "}
          பெற்றுக்கொள்ளவும். 📲
        </p>

        {/* Peak Hours */}
        <div className={styles.peakSection}>
          <p className={`${styles.peakHeading} ${styles.ta}`}>
            ⚠️ <em>அதிக கூட்டம் இருக்கும் நேரங்கள்:</em>
          </p>
          <ul className={`${styles.peakList} ${styles.ta}`}>
            <li>மதியம் 12:00 – 2:00 மணி</li>
            <li>மாலை 5:00 – 8:00 மணி</li>
          </ul>
          <p className={`${styles.peakNote} ${styles.ta}`}>
            QR Pass மூலம் வழக்கமான கூட்டத்தைத் தவிர்த்து{" "}
            <em>விரைவு தரிசனம்</em> மற்றும் <em>பிரசாதம்</em> பெறலாம்.
          </p>
        </div>

        {/* Minimal crowd recommendation */}
        <div className={styles.minimalBox}>
          <p className={`${styles.minimalText} ${styles.ta}`}>
            மிகவும் குறைவான கூட்டத்தை விரும்பினால்,{" "}
            <em>மதியம் 12:00 – 2:00 மணி</em> மற்றும்{" "}
            <em>மாலை 5:00 – 8:00 மணி</em>{" "}
            நேரங்களைத் தவிர்க்குமாறு அன்புடன் பரிந்துரைக்கிறோம்.
          </p>
        </div>

        {/* Closing */}
        <div className={styles.closing}>
          <div className={styles.closingRule} />
          <span className={styles.ornament}>✦</span>
          <p className={`${styles.body} ${styles.ta}`}>மிக்க நன்றி. 🙏</p>
          <p className={`${styles.bodyItalic} ${styles.ta}`}>
            செப்டம்பர் 4-ஆம் தேதி உங்களை சந்திக்க ஆவலுடன் இருக்கிறோம்!
          </p>
          <p className={`${styles.hkClosing} ${styles.ta}`}>ஹரே கிருஷ்ணா! 🌸</p>
        </div>

      </div>
    </div>
  );
}
