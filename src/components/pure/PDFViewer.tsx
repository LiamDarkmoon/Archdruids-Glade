'use client'
import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import usePDF from '@/lib/hooks/usePDF';

const CSheetViewer = () => {
  const [sheet, setSheet] = useState<any>();
  const [page, setPage] = useState<number>(1);

  const { pdfURL } = usePDF();

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
      file={ pdfURL }
    >
      <Page 
        pageNumber={ page }
        onClick={ handleClick }
        className="w-screen sm:w-auto"
      />
    </Document>
  );
};

export default CSheetViewer;