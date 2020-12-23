//import { DocumentViewer } from '@ionic-native/document-viewer/ngx';

import { PreviewAnyFile } from '@ionic-native/preview-any-file';

export default {

    preview() {
        //PreviewAnyFile;
        console.log(PreviewAnyFile.preview("abc"));
    },

    pdf(location, title) {
        //let documentViewer = new DocumentViewer();
        //console.log(documentViewer, location, title);
        console.log(location, title);
        //documentViewer.viewDocument(location, 'application/pdf', {title: title});

    }
}