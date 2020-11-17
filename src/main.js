if(localStorage.getItem("fragments-store")){
    document.querySelector(".app").innerHTML = localStorage.getItem("fragments-store");
    document.querySelectorAll('.editor').forEach(elem => {
        elem.textContent = elem.getAttribute("code");
        let aceeditor = ace.edit(elem.id);
        aceeditor.setTheme("ace/theme/dracula");
        aceeditor.session.setMode("ace/mode/text");

        aceeditor.setOptions({
            fontSize: "15pt",
            showPrintMargin: false, 
        });

        try{setupEditor();}
        catch(e){/*No matter how clean or simple your code might be, there would 
        always be that one silly javascript error that only a try-catch
        block can get rid of.*/}
        aceeditor.session.on('change', function(delta) {
            setupEditor();
        });

        function setupEditor() {
            let lang = editorLanguage(document.querySelector(".treeview .doc."+elem.id+" input").value);
            aceeditor.session.setMode("ace/mode/"+lang);
            elem.setAttribute("code",aceeditor.getValue());
        }
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
        <div class="treeview">
            <center class="no-content-text">
                Looks like you have no docs stored<br>
                Click on Create Doc or Directory button 
            </center>
        </div>
    </div>
    <div class="workarea-preview open">
        <div class="branding-name">
            <img src="./src/favicon.png" />
            <h1>Fragments</h1>
        </div>
        <div class="branding-info">
            Fragments is a prototype of the coding page for <a href="https://xperbycoder.netlify.app" target="_blank">Xper</a> 2.0<br />
            Here you can write code and save snippets<br />
        </div>
        <h3>Create</h3>
        <div class="create-buttons">
            <div onclick="createDoc(document.querySelector('.treeview'))">
                <abbr title="Create Document" class="fas fa-file-medical"></abbr>
                <span>Create Document</span>
            </div>
            <div onclick="createDir(document.querySelector('.treeview'))">
                <abbr title="Create Directory" class="fas fa-folder-plus"></abbr>
                <span>Create Directory</span>
            </div>
        </div>
        <h3>Contribute Now</h3>
        <div class="create-buttons">
            <div onclick="window.open('https://github.com/Jaagrav/Fragments')">
                <abbr title="Create Document" class="fab fa-github"></abbr>
                <span>Source Code</span>
            </div>
            <div onclick="window.open('https://github.com/Jaagrav/Fragments/issues')">
                <abbr title="Create Issue" class="fas fa-code-branch"></abbr>
                <span>Report Bug or an Issue</span>
            </div>
        </div>
    </div>
    <div class="workarea">
        <div class="tabs"></div>
        <div class="editors">
            <div class="editor editorOpen" id="editor"></div>
        </div>
    </div>
    <!--<iframe class="output" src="https://wikipedia.com/"></iframe>-->
`;