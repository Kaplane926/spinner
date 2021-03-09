const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|  \n ']
let delay = 100
animation = function(){
  for(const piece of spinner){
    setTimeout(()=>{process.stdout.write(piece)}, delay)
    delay += 200
  }
}
animation()

