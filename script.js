function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }



  //Pegar a tag image
  const img = document.querySelector('#profile img')
  //substituir a imagem
  //se tiver light mode, adicionar imagem light
  //se tiver sem light mode, manter imagem normal

  if (html.classList.contains("light")) {
    img.setAttribute('src', 'assets/avatar-light.jpeg')
  } else{
    img.setAttribute("src", "assets/avatar.jpeg")
  }
}
