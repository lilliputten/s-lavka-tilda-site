export function cleanupFooter() {
  const columns = document.querySelectorAll<HTMLDivElement>('.uc-Footer .t977__col-inner');
  columns.forEach((node) => {
    const content = node.innerText;
    const isEmpty = !content.trim();
    if (isEmpty) {
      node.remove();
    }
  });
}
