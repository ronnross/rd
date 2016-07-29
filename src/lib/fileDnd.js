// const dndArea = document.createElement('div')
// dndArea.id = 'dnd'
// dndArea.classList.add('dnd')
// dndArea.innerHTML = 'Drag here'
window.setTimeout(function() {
  const dndArea = document.getElementById('dropzone')
  // document.body.appendChild(dndArea)

  dndArea.addEventListener("dragover", dragHandler);
  dndArea.addEventListener("drop", dropHandler);
  dndArea.addEventListener("dragleave", dragOutHandler);

  function dragHandler(e) {
    event.stopPropagation();
    event.preventDefault();
    // dndArea.classList.add('dnd-over')
    console.log('dragging over');
  }

  function dragOutHandler(e) {
    event.stopPropagation();
    event.preventDefault();
    // dndArea.classList.remove('dnd-over')
    console.log('dragging off');
  }

  function dropHandler(e){
    e.stopPropagation();
    e.preventDefault();
    dndArea.classList.remove('dnd-over')
    let files = e.target.files || e.dataTransfer.files
    let reader = new FileReader()

    reader.onload = function(e) {
      let text = reader.result;
      window.postMessage({
        source: 'dnd',
        payload: text
      }, '*')
    }

    let filesInfo = ""
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      filesInfo += `Name: ${file.name} Size: ${file.size} Type: ${file.type} Modified Date: ${file.lastModifiedDate}`
      reader.readAsText(file);
    }
  }

}, 0);

// dndArea.addEventListener("drop", dropHandler);
// dndArea.addEventListener("dragleave", dragOutHandler);
//
// function dragHandler(e) {
//   event.stopPropagation();
//   event.preventDefault();
//   // dndArea.classList.add('dnd-over')
//   console.log('dragging over');
// }
//
// function dragOutHandler(e) {
//   event.stopPropagation();
//   event.preventDefault();
//   // dndArea.classList.remove('dnd-over')
//   console.log('dragging off');
// }
//
// function dropHandler(e){
//   e.stopPropagation();
//   e.preventDefault();
//   dndArea.classList.remove('dnd-over')
//   let files = e.target.files || e.dataTransfer.files
//   let reader = new FileReader()
//
//   reader.onload = function(e) {
//     let text = reader.result;
//     window.postMessage({
//       source: 'dnd',
//       payload: text
//     }, '*')
//   }
//
//   let filesInfo = ""
//   for (let i = 0; i < files.length; i++) {
//     let file = files[i];
//     filesInfo += `Name: ${file.name} Size: ${file.size} Type: ${file.type} Modified Date: ${file.lastModifiedDate}`
//     reader.readAsText(file);
//   }
//
//   console.log('files dropped', filesInfo)
//
// }
