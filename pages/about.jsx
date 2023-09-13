import { pdfjs, Document, Page, PDFDownloadLink } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './Resume_Alejandro.pdf';

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3><br/>
      <ul>
        <li><span role="img" aria-label="graduate-hat">📖</span> Bachelor's Degree in <b>Computer Science</b> @ <a href='https://www.ingenieria.usac.edu.gt'>University of San Carlos de Guatemala</a>.</li>
        <li><span role="img" aria-label="book">🎓</span> Invited speaker on STI about development methodology and best practice @ <a href='https://www.ues.edu.sv'>University of El Salvador</a></li>
        <li><span role="img" aria-label="light-bulb">💡</span> Software Engineer 20+ years of expirience in application development. </li>
        <li><span role="img" aria-label="laptop">💻</span> Currently working on C++20, Java, FinTech, Data Science and AI </li>
        <li><span role="img" aria-label="laptop">💻</span> Also becoming myself into a world-class SRE </li>
      </ul>
      <br/>
      <center>
        <h3>Resume (<a href={myResume} download="Resume-AlejandroLopezMonzon.pdf">Download</a>)</h3>
        <br />
        <Document file={myResume}>
          <Page pageIndex={0} />
        </Document>
      </center>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
