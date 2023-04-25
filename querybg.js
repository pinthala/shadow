function setBg (){
  const bgQuery = document.querySelectorAll('.x-el-div')

  for (i = 0; i < bgQuery.length ; i ++){
    bgQuery[i].style.backgroundSize = "contain"
  }
};
setBg();
