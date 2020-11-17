const openEditor = (docID) => {
    document.querySelectorAll('.tabs .tab').forEach(elem => {
        elem.classList.remove('editorOpen');
    })
    document.querySelectorAll('.treeview .doc').forEach(elem => {
        elem.classList.remove('editorOpen');
    })
    document.querySelectorAll('.'+docID).forEach(elem => {
        elem.classList.add('editorOpen');
    })
}