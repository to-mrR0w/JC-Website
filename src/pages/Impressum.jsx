function Impressum() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-screen-md mx-auto my-8  ">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Impressum der Junior Company EasyCharge
      </h2>
      <div className="text-left space-y-4">
        <div>
          <strong>Adresse:</strong> EasyCharge Junior Company, Musterstraße 123,
          12345 Musterstadt
        </div>

        <div>
          <strong>Kontakt:</strong>
          <br />
          Telefon: +43 123 456 789
          <br />
          E-Mail:{" "}
          <a
            href="mailto:office@easycharge-jc.com"
            className="text-blue-500 hover:underline"
          >
            office@easycharge-jc.com
          </a>
        </div>

        <p>
          <strong>Vertretungsberechtigte:</strong> Max Mustermann
          (Geschäftsführer)
        </p>

        {/* Weitere Informationen hier einfügen, wie Register, Umsatzsteuer-Identifikationsnummer, Aufsichtsbehörde, etc. */}

        <p>
          <strong>Firmenbuch:</strong> Handelsgericht Musterstadt, FN 123456a
          <br />
          <strong>Umsatzsteuer-Identifikationsnummer:</strong> ATU 12345678
          <br />
          <strong>Aufsichtsbehörde:</strong> Bezirkshauptmannschaft Musterstadt
        </p>

        <p>
          <strong>Verantwortlich für den Inhalt:</strong> Max Mustermann
        </p>

        {/* Haftungsausschluss */}
        <p>
          <strong>Haftungsausschluss:</strong> Die Informationen auf dieser
          Website dienen nur allgemeinen Informationszwecken. Die Junior Company
          EasyCharge übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit
          und Aktualität der bereitgestellten Informationen.
        </p>

        {/* Urheberrecht */}
        <p>
          <strong>Urheberrecht:</strong> Die durch die Junior Company EasyCharge
          erstellten Inhalte und Werke auf dieser Website unterliegen dem
          österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen
          Autors bzw. Erstellers.
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
            className="text-blue-500 hover:underline"
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
