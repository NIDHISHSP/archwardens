function activateTab(e, tab){
    
    const tabBtns = document.getElementsByClassName('tabBtn')
    for(let i=0; i< tabBtns.length; i++){
        tabBtns[i].className = tabBtns[i].className.replace('active','');
    }

    const tabs = document.getElementsByClassName('tabs');
    for(let index = 0; index < tabs.length; index++) {
        tabs[index].style.display = 'none';
    }

    const activate = document.getElementById(tab);
    activate.style.display = 'block';
    e.currentTarget.className += ' active';
    // e.currentTarget.classLis += ' active';
    // .add(' active');
    // console.log(tabs);
}