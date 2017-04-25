function FSAddOriginalLink(){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "<br/><br/>MUON COPY THI VAO DAY : <a href='http://www.jamilakhangdien.co/2017/04/5-van-de-can-biet-khi-mua-can-ho-jamila-quan-9.html/'>http://www.jamilakhangdien.co/2017/04/5-van-de-can-biet-khi-mua-can-ho-jamila-quan-9.html"+document.location.pathname+"</a>";
    var copytext = pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
document.oncopy = FSAddOriginalLink;
