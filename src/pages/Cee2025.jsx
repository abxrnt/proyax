import pdf2025 from '../CEE 2025.pdf';

function Cee2025() {
  return (
    <main className="pyq-page">
      <section className="pyq-paper">
        <iframe title="CEE 2025 Question Paper" src={pdf2025} className="pyq-pdf" />
      </section>
    </main>
  );
}

export default Cee2025;
