'use client'
import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const CSheetViewer = () => {
  const [sheet, setSheet] = useState<any>();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  }, []);

  const handleClick = () => {
    if(page < 3){
      setPage(prev => prev + 1)
    } else {
      setPage(1)
    }
  }

  return (
    <Document 
      file='Sheet.pdf'
    >
      <Page 
        pageNumber={ page }
        onClick={ handleClick }
      />
    </Document>
  );
};

export default CSheetViewer;