import { LightningElement } from 'lwc';
import { loadScript } from "lightning/platformResourceLoader";
import JSPDF from '@salesforce/resourceUrl/jsPDF';
import getOpportunitiesController from '@salesforce/apex/PdfGeneratorOppt.getOpportunitiesController';

export default class Jspdf extends LightningElement {
  opptList = [];
  headers = this.createHeaders([
    "Id",
    "AccountId",
    "Name",
    "Amount",
    "CloseDate"
  ]);

  renderedCallback() {
    Promise.all([
      loadScript(this, JSPDF)
    ]);
  }

  generatePdf(){
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Avenir Télécom", 75,15);
    doc.table(15, 20, this.opptList, this.headers, {autosize:true});
    doc.save("document.pdf");
  }

  generateData(){
    getOpportunitiesController().then(result=>{
      this.opptList = result;
      this.generatePdf();
    });
  }

  createHeaders(keys){
    let result = [];
    for (let i=0; i<keys.length; i+=1) {
      result.push({
        id: keys[i],
        name: keys[i],
        prompt: keys[i],
        width: 65,
        align: "center",
        padding: 0
      });
    }
    return result;
  }
}