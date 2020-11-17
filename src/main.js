if(localStorage.getItem("fragments-store")){
    document.querySelector(".app").innerHTML = localStorage.getItem("fragments-store");
    document.querySelectorAll('.editor').forEach(elem => {
        elem.innerHTML = elem.getAttribute("code");
        let aceeditor = ace.edit(elem.id);
        aceeditor.setTheme("ace/theme/dracula");
        aceeditor.session.setMode("ace/mode/text");

        aceeditor.setOptions({
            fontSize: "15pt",
            showPrintMargin: false, 
        });
    })
}
else
document.querySelector(".app").innerHTML = `
    <div class="sidebar">
        <div class="sidebar-header">
            <div class="branding-name">Fragments</div>    
            <abbr title="Create Directory" class="fas fa-folder-plus" onclick="createDir(document.querySelector('.treeview'))"></abbr>
            <abbr title="Create Document" class="fas fa-file-medical" onclick="createDoc(document.querySelector('.treeview'))"></abbr>
        </div>
        <div class="treeview"></div>
    </div>
    <div class="workarea">
        <div class="tabs"></div>
        <div class="editors">
            <div class="editor editorOpen" id="editor"></div>
        </div>
    </div>
`;