// const address = document.getElementById("address");
// address.style.color = "#121e8a";
// const locations=()=>{
//     const loc=<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5426.141423456679!2d72.84522359235154!3d19.164178139739132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b652ec3d091f%3A0xe6f050a1c35b88f2!2sGoregaon!5e0!3m2!1sen!2sin!4v1685981637454!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
// }

function changeBackgroundColor() {
    var container = document.querySelector('.left_side');
    container.style.backgroundColor = '#6F8FAF';
  }

  // Event listener to call the changeBackgroundColor function when the document is loaded
  document.addEventListener('DOMContentLoaded', function() {
    changeBackgroundColor();
  });

  
//   function printDocument() {
//     // Create a new window or tab for printing
//     var printWindow = window.open('', '_blank');
    
//     // Get the document content
//     var documentContent = document.documentElement.container.innerHTML;
    
//     // Modify the document content to remove the print button
//     documentContent = documentContent.replace('<button class="print-button" onclick="printDocument()">Print/Download</button>', '');
    
//     // Update the document in the new window/tab
//     printWindow.document.open();
//     printWindow.document.write(documentContent);
//     printWindow.document.close();
    
//     // Call the print function of the new window/tab
//     printWindow.print();
// }

// function printDocument() {
//     var printContents = document.getElementsByClassName("container").innerHTML;
//     w=window.open();
//     w.document.write(printContents);
//     w.print();
//     w.close();
// }

// function handlePrintClick() {
//     // Open a new window with the current HTML content
//     var printWindow = window.open('', '_blank');
//     printWindow.document.write('<html><head><title>Print</title></head><body>');
//     printWindow.document.write(document.documentElement.innerHTML);
//     printWindow.document.write('</body></html>');
//     printWindow.document.close();

//     // Wait for the window to load and then call the print function
//     printWindow.onload = function() {
//         printWindow.print();
//     };
// }

// // Attach the click event listener to the print button
// var printButton = document.getElementById('printbutton');
// printButton.addEventListener('click', handlePrintClick);
