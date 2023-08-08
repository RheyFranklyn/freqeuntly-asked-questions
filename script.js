const container = document.getElementsByClassName('questions');

for(i=0;i<container.length;i++){
  container[i].addEventListener('click', function(){
    this.classList.toggle('active');
  })
}