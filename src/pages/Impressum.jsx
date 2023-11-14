function Impressum() {
  return (
    <div className="text-center space-x-2">
      <h2>Impressum der Junior Company EasyCharge</h2>
      <div>
        <p>
          <strong>Adresse:</strong> [Name des Verantwortlichen], [Musterstraße
          123], [PLZ Ort]
        </p>

        <p>
          <strong>Kontakt:</strong>
          <br />
          Telefon: [Telefonnummer]
          <br />
          E-Mail: <a href={`mailto:[E-Mail-Adresse]`}>{`[E-Mail-Adresse]`}</a>
        </p>

        <p>
          <strong>Vertretungsberechtigte:</strong> [Name des Geschäftsführers
          oder der vertretungsberechtigten Person]
        </p>

        {/* Weitere Informationen hier einfügen, wie Register, Umsatzsteuer-Identifikationsnummer, Aufsichtsbehörde, etc. */}

        <p>
          <strong>Verantwortlich für den Inhalt:</strong> [Name des
          Verantwortlichen]
        </p>

        {/* Haftungsausschluss */}
        <p>
          <strong>Haftungsausschluss:</strong> Die Informationen auf dieser
          Website dienen nur allgemeinen Informationszwecken. Die Junior Company
          [Firmenname] übernimmt keine Gewähr für die Richtigkeit,
          Vollständigkeit und Aktualität der bereitgestellten Informationen.
        </p>

        {/* Urheberrecht */}
        <p>
          <strong>Urheberrecht:</strong> Die durch die Junior Company
          [Firmenname] erstellten Inhalte und Werke auf dieser Website
          unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>

        {/* Datenschutz */}
        <p>
          <strong>Datenschutz:</strong> Die Nutzung unserer Webseite ist in der
          Regel ohne Angabe personenbezogener Daten möglich. Weitere
          Informationen zum Datenschutz finden Sie in unserer
          Datenschutzerklärung.
        </p>

        {/* Hinweis gemäß Online-Streitbeilegungsverordnung */}
        <p>
          <strong>Hinweis gemäß Online-Streitbeilegungsverordnung:</strong> Die
          Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit, die Sie unter{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>{" "}
          finden.
        </p>
      </div>
    </div>
  );
}

export default Impressum;
