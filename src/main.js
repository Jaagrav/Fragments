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
        <div class="tabs">
            <div class="tab file-system editorOpen">
                <span>index.html</span>
                <abbr title="Close" class="fas fa-times"></abbr>
            </div>
            <div class="tab file-system">
                <span>app.js</span>
                <abbr title="Close" class="fas fa-times"></abbr>
            </div>
        </div>
        <div class="editors"></div>
    </div>
`;