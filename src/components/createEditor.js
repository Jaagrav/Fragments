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
        document.querySelector("#"+docID).setAttribute("code",aceeditor.getValue());
    });
}