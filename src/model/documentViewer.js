// import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
//import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
//import { PreviewAnyFile } from '@ionic-native/preview-any-file';
//import { FileChooser } from '@ionic-native/file-chooser';

/*
const files = [
    'Infoblatt1.pdf',
    'Infoblatt2.pdf',
    'Infoblatt3.pdf',
    'Infoblatt4.pdf',
    'Infoblatt5.pdf',
    'Infoblatt6.pdf',
    'Infoblatt7.pdf',
    'Infoblatt8.pdf',
    'Infoblatt9.pdf',
    'Infoblatt10.pdf',
];
*/

export default {

    preview(file) {


        const url =  'http://www.sachau.net/' + file;
        let fileTransfer = FileTransfer.create();

        File.checkFile(File.dataDirectory, file).then(result => {
            if (result) {
                DocumentViewer.viewDocument(File.dataDirectory + file, 'application/pdf');
            }
            fileTransfer.download(url, File.dataDirectory + file).then(() => {
                DocumentViewer.viewDocument(File.dataDirectory + file, 'application/pdf');
              }).catch (error => {
                console.log(error);
              }).finally(() => {
                  // this.directories.push({name: 'download-done'});
              });
            

        })


        //InAppBrowser.
        //PreviewAnyFile;
        //DocumentViewer.viewDocument("/assets/pdf/" + url, 'application/pdf');
        //PreviewAnyFile.preview("../assets/pdf/" + url);
        // InAppBrowser.create('assets/pdf/' + url, '_system', 'location=yes');
        //console.log(File.applicationDirectory, File.applicationStorageDirectory);
        //DocumentViewer.viewDocument(File.dataDirectory + 'sample.pdf', 'application/pdf')
        //console.log(url);
    },

    pdf(location, title) {
        //let documentViewer = new DocumentViewer();
        //console.log(documentViewer, location, title);
        console.log(location, title);
        //documentViewer.viewDocument(location, 'application/pdf', {title: title});

    },
    chooseFile() {
        //FileChooser.open().then(uri => {
        //    console.log(uri);
        //})
    }
}