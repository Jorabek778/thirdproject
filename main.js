const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const box = document.querySelectorAll('.box')
const slides  = document.querySelector('.slides')

let i = box.length-1

function showslide(){
  if(i<0){
    i = box.length-1
  }
  else if(i>box.length-1){
    i=0
  }
  slides.style.transform = `translateX(${-i*1000}px)`
}

let Interval = setInterval(()=>{
i++
showslide()
},3000)


next.addEventListener('click' , ()=>{
  i++
  // clearInterval(Interval)
  showslide()
})
prev.addEventListener('click' , ()=>{
  i--
  // clearInterval(Interval)
  showslide()
})

// let i = box.length-1

//     prev.addEventListener('click' , ()=>{
//     i--

//     if(i<0){
//       i=box.length-1
//     }
//     nonchik()
//     Addslide(i)
    
//     })

//     next.addEventListener('click' , ()=>{
//       i++
  
//       if(i>box.length-1){
//         i=0
//       }
//       nonchik()
//       Addslide(i)
      
//       })
  

//   function nonchik(){
//     box.forEach((item)=>{
//         item.style.display = 'none'
//       })
//   }
//   nonchik()

//   function Addslide(index=0) {
//     box[index].style.display = 'block'
//     // current.innerText= `0${index+1}`
//   }

//   Addslide()
