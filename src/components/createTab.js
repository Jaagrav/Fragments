const createTab = (docID) => {
    const tabs = document.querySelector('.tabs');

    const tab = `<div class="tab ${docID}" onclick="openEditor('${docID}')">
        <span>${document.querySelector(".doc."+docID+" input").value}</span>
        <abbr title="Close" class="fas fa-times" onclick="event.stopPropagation();event.path[1].remove();closeDocAndOpenAltDoc();checkNeutral();"></abbr>
    </div>`;

    if(!tabs.querySelector("."+docID))
        $(tabs).append(tab);
        
    checkNeutral();
}