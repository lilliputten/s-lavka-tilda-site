export function removeDevNoteBlocks() {
  const nodes = document.querySelectorAll<HTMLDivElement>('.uc-DevNote');
  nodes.forEach((node) => {
    node.remove();
  });
}
