let createDoc = (parentDir) => {
    const docID = "file-"+Math.random().toString().substring(2);

    const doc = `<div class="doc ${docID}">
        <i class="fas fa-file"></i>
        <input type="text" value="untitled" readonly="false" spellcheck="false" ondblclick="this.readOnly=false; this.focus();" onblur="this.readOnly=true;if(this.value==='') event.path[1].remove();" onkeypress="if(event.key === 'Enter') {this.readOnly=true;if(this.value==='') event.path[1].remove();this.blur();}" onkeyup="if(this.value==='' && this.readOnly) event.path[1].remove();" />
        <div class="options">
            <abbr title="Rename" class="fas fa-pen" onclick="event.path[2].querySelector('input').readOnly=false;event.path[2].querySelector('input').focus();event.path[2].querySelector('input').select();"></abbr>
            <abbr title="Delete" class="fas fa-trash" onclick="event.path[2].remove();"></abbr>
        </div>
    </div>`;

    $(parentDir).append(doc);

    
}