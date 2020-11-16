let createDir = (parentDir) => {
    const dir = `<div class="dir-wrapper">
        <div class="dir-name" onclick="this.nextSibling.nextSibling.classList.toggle('open');this.children[0].classList.toggle('fa-folder');this.children[0].classList.toggle('fa-folder-open');">
            <i class="fas fa-folder"></i>
            <input type="text" value="untitled" readonly="true" spellcheck="false" ondblclick="this.readOnly=false; this.focus();" onblur="this.readOnly=true;if(this.value==='') event.path[1].remove();" onkeypress="if(event.key === 'Enter') this.readOnly=true;" onkeyup="if(this.value==='' && this.readOnly) event.path[1].remove();" />
            <div class="options">
                <abbr title="Create Directory" class="fas fa-folder-plus" onclick="event.stopPropagation();event.path[3].children[1].classList.add('open');event.path[3].children[0].children[0].classList.remove('fa-folder');event.path[3].children[0].children[0].classList.add('fa-folder-open');createDir(event.path[3].children[1])"></abbr>
                <abbr title="Create Document" class="fas fa-file-medical" onclick="event.stopPropagation();event.path[3].children[1].classList.add('open');event.path[3].children[0].children[0].classList.remove('fa-folder');event.path[3].children[0].children[0].classList.add('fa-folder-open');createDoc(event.path[3].children[1])"></abbr>
                <abbr title="Rename" class="fas fa-pen" onclick="event.stopPropagation();event.path[2].querySelector('input').readOnly=false;event.path[2].querySelector('input').focus();event.path[2].querySelector('input').select();"></abbr>
                <abbr title="Delete" class="fas fa-trash" onclick="event.stopPropagation();event.path[3].remove();"></abbr>
            </div>
        </div>
        <div class="dir"></div>
    </div>`;

    $(parentDir).prepend(dir);
}