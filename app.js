const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// clicking to the toggle button for the sidebar opens and closes it.
toggleBtn.addEventListener('click', function(){
    console.log(sidebar.classList);
    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar')
    // }
    // else {
    //     sidebar.classList.add('show-sidebar')
    // }
    sidebar.classList.toggle('show-sidebar');
})

// clicking the close sidebar button only closes the sidebar. 
// done by removing the 'show-sidebar' class from sidebar. 
closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
})