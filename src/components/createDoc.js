const createDoc = (parentDir) => {
    const docID = "doc-"+Math.random().toString().substring(2);

    const doc = `<div class="doc ${docID}" onclick="createTab('${docID}');openEditor('${docID}')">
        <i class="fas fa-file"></i>
        <input type="text" value="untitled" readonly="false" spellcheck="false" ondblclick="this.readOnly=false; this.focus();" onblur="this.readOnly=true;if(this.value==='') {event.path[1].remove();document.querySelector('.tabs .tab.${docID}').remove();closeDocAndOpenAltDoc();}" onkeypress="if(event.key === 'Enter') {this.readOnly=true;if(this.value==='') {event.path[1].remove();document.querySelector('.tabs .tab.${docID}').remove();closeDocAndOpenAltDoc();}this.blur();}" onkeyup="if(this.value==='' && this.readOnly) {event.path[1].remove();document.querySelector('.tabs .tab.${docID}').remove();closeDocAndOpenAltDoc();} document.querySelector('.tabs .tab.${docID} span').innerText=this.value; this.setAttribute('value',this.value);" />
        <div class="options">
            <abbr title="Rename" class="fas fa-pen" onclick="event.stopPropagation();event.path[2].querySelector('input').readOnly=false;event.path[2].querySelector('input').focus();event.path[2].querySelector('input').select();"></abbr>
            <abbr title="Delete" class="fas fa-trash" onclick="event.stopPropagation();if(document.querySelector('.tabs .tab.${docID}'))document.querySelector('.tabs .tab.${docID}').remove();event.path[2].remove();closeDocAndOpenAltDoc();checkNeutral();"></abbr>
        </div>
    </div>`;

    $(parentDir).append(doc);

    createTab(docID);
    createEditor(docID);
    openEditor(docID);
    checkNeutral();
}

const closeDocAndOpenAltDoc = () => {
    document.querySelectorAll('.editors .editor').forEach(elem => {
        elem.classList.remove('editorOpen');
    })
    document.querySelectorAll(".tab").forEach(elem => {
        openEditor(elem.classList[1]);
    })
}