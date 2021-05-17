function createPDF() {
    // check if all tge fields are entered

    if (document.getElementById("name").value == "" || document.getElementById("country").value =="") {
        alert("Please enter all fields");
    }
 
    else {
        // create the jspdf document
        
        var doc = new jsPDF();

        doc.text(20,20, 'alhdfoidoddjjjdhdjhfjfjfjfjfjfjfjfjfjfjfjfjfjjfjfjfjfjfjfjfjjfjfjhfjfjfjfjfjfjfjfjfjfjfjfjfjjfjfjfjfjfjfjfjjfjfjfjjfjfjfjhfjfjfjfjfjfjfjfjfjfjfjfjfjjfjfjfjfjfjfjfjjfjfjfjjfjfjfjhfjfjfjfjfjfjfjfjfjfjfjfjfjjfjfjfjfjfjfjfjjfjfjfjjfjfjfjhfjfjfjfjfjfjfjfjfjfjfjfjfjjfjfjfjfjfjfjfjjfjfjfjjfjfjfjfjjfjfjfj');

        doc.text(document.getElementById("name").value, 1, 1);
        doc.text(document.getElementById("country").value, 2, 2);

        // save the file

        doc.save("output.pdf");
    }
}