
function textWidth(elem) {
  // re-use canvas object for better performance
  const canvas = textWidth.canvas || (textWidth.canvas = document.createElement("canvas"));
  let context = canvas.getContext("2d");
  context.font = window.getComputedStyle(elem, null).getPropertyValue('font');
  const metrics = context.measureText(elem.textContent);
  return metrics.width;
}