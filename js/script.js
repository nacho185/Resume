let cvPrint = document.getElementById("print-cv");
/*let element = document.getElementById('print-cv');
html2pdf(element);*/
cvPrint.addEventListener("click", () => {
  let element = document.getElementById("cv");
  html2pdf(element);
});
