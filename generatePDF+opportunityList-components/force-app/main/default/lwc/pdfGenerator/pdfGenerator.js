import jsPDF from '@salesforce/resourceUrl/jsPDF';
import { loadScript } from 'lightning/platformResourceLoader';

jsPdfInitialized=false;
    renderedCallback(){
        console.log(this.contact.data);
        loadScript(this, jsPDF ).then(() => {});
        if (this.jsPdfInitialized) {
            return;
        }
        this.jsPdfInitialized = true;
    }