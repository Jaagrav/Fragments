const editorLanguage = (fileName) => {
    let fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
    let languagesList = {
        "htm": "html",
        "html": "html",
        "css": "css",
        "java": "java",
        "cpp": "C_Cpp",
        "cp": "C_Cpp",
        "js": "javascript",
        "clj": "clojure",
        "cs": "csharp",
        "xml": "xml",
        "m": "ObjectiveC",
        "h": "ObjectiveC",
        "json": "json",
        "exs": "elixir",
        "rb": "ruby",
        "vbs": "vbscript",
        "scss": "scss",
        "jsx": "jsx",
        "git": "gitignore",
        "sass": "sass",
    }
    let languageName = "text";
    if(languagesList[fileExtension]) languageName = languagesList[fileExtension];
    return languageName;
}

const createEditor = (docID) => {
    const editors = document.querySelector(".editors");

    const editor = `<div id="${docID}" class="editor"></div>`;
    
    $(editors).append(editor);

    let aceeditor = ace.edit(docID);
    aceeditor.setTheme("ace/theme/dracula");
    aceeditor.session.setMode("ace/mode/text");

    aceeditor.setOptions({
        fontSize: "15pt",
        showPrintMargin: false, 
    });

    aceeditor.session.on('change', function(delta) {
        let lang = editorLanguage(document.querySelector(".treeview .doc."+docID+" input").value);
        aceeditor.session.setMode("ace/mode/"+lang);
        document.querySelector("#"+docID).setAttribute("code",aceeditor.getValue());
    });
}

