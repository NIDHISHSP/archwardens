// function openCity(evt, cityName) {
//     // Declare all variables
//     var i, tabcontent, tablinks;
  
//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
  
//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
  
//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
//   }

function activateTab(event, tab){
    const tabBtns = document.getElementsByClassName('tabBtn')
    for(let i=0; i< tabBtns.length; i++){
        tabBtns[i].className = tabBtns[i].className.replace('active','');
    }

    const tabs = document.getElementsByClassName('tabs')
    for (let index = 0; index < tabs.length; index++) {
        console.log(tabs[1]);
        tabs[index].style.display = 'none';
    }

    const activate = document.getElementById(tab);
    activate.style.display = 'block';
    event.currentTarget.className += ' active';
}