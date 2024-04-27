import { useState, useContext, useEffect } from 'react';
import { charactersContext, characterContextProps } from "@/lib/contexts/chractersContext";
import { PDFDocument } from 'pdf-lib';

const usePDF = () => {
    const [pdfURL, setPdfURL]= useState<any>()
    const { char } = useContext(charactersContext) as characterContextProps;

    useEffect(() => {

        const handleFillForm = async () => {
            // Obtener el archivo PDF en formato ArrayBuffer
            const response = await fetch('/Sheet.pdf');
            const pdfBytes = new Uint8Array(await response.arrayBuffer());
        
            // Crear un nuevo documento PDF
            const pdfDoc = await PDFDocument.load(pdfBytes);
            const form = pdfDoc.getForm();
        
            // Completar los campos del formulario
            form.getTextField('CharacterName').setText(char.name);
            form.getTextField('ClassLevel').setText(char.clas);
            form.getTextField('Background').setText(char.background);
            form.getTextField('Alignment').setText(char.alignment);
           /*  form.getTextField('Race').setText(char.race); 
            form.getTextField('PlayerName').setText('10');
            form.getTextField('Initiative').setText('10'); 
            form.getTextField('HPTemp').setText('10'); 
            form.getTextField('HPCurrent').setText('10'); 
            form.getTextField('HDTotal').setText('10'); 
            form.getTextField('HD').setText('10');  */
            form.getTextField('ProfBonus').setText('10');
            form.getTextField('AC').setText('10');
            form.getTextField('Speed').setText('30');
            form.getTextField('STR').setText(char.str.toString());
            form.getTextField('STRmod').setText(char.str.toString());
            /* form.getTextField('ST Stength').setText(char.str.toString()); */
            form.getTextField('DEX').setText(char.dex.toString());
            /* form.getTextField('DEXmod').setText(char.dex.toString()); */
            form.getTextField('ST Dexterity').setText(char.dex.toString());
            form.getTextField('CON').setText(char.con.toString());
            form.getTextField('CONmod').setText(char.con.toString());
            form.getTextField('ST Constitution').setText(char.con.toString());
            form.getTextField('INT').setText(char.int.toString());
            form.getTextField('INTmod').setText(char.int.toString());
            form.getTextField('ST Intelligence').setText(char.int.toString());
            form.getTextField('WIS').setText(char.wis.toString());
            form.getTextField('WISmod').setText('');
            form.getTextField('ST Wisdom').setText('');
            form.getTextField('CHA').setText(char.cha.toString());
            form.getTextField('CHamod').setText('');
            form.getTextField('ST Charisma').setText('');
        
            // Guardar el documento PDF modificado
            const modifiedPdfBytes = await pdfDoc.save();
        
            // Descargar el PDF completado
            const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            setPdfURL(url)
            
            /* const link = document.createElement('a');
            link.href = url;
            link.download = 'formulario-completado.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); */
            
    
            const fields = form.getFields();
    
            /* fields.forEach((field) => {
                console.log(`Nombre del campo: ${field.getName()}`);
                console.log(`Tipo de campo: ${field.constructor.name}`);
                console.log('---');
              }); */
      };
      handleFillForm();

    },[])
    


  return { pdfURL };
};

export default usePDF;