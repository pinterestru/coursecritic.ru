


export const copyToClipboard = (text, options) => {
  options = options || {};

  var aux = document.createElement("input");
  aux.setAttribute("value", text);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
};


export const copyToClipboardFromInput = (id, selector) => {
    const input = id ? document.getElementById(id) : document.querySelector(selector)
    if (input) {
        input.select();
        document.execCommand("copy");
    }
}