import { useEffect, useRef } from "react"

export default function ParticalBackground(){
const canvasRef = useRef(null);

  //  useEffect
  {()=>{
  const canvas = canvasRef.current;
  const ctx = canvas.getCostext("2d");

  let particles = [ ]
    const paticleCount =50 ;
    const colors = ["rgba(225,225,225,0.7)"]
   
    class Particle {
      constructor(){
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.heigth;
        this.radius = Math.random()*2+1;
        this.colors = colors[Math.random()*colors.length]
        this.speedX = (Math.random()-0.5)*0.5
        this.speedY = (Math.random()-0.5)*0.5
    }

        draw(){
          ctx.beginPath()
          ctx.arc(this.x .this.y ,this.radius,0,Math.PI*2)
          ctx.shadowBlur = 10;
          ctx.fillStyle = this.colors;
          ctx.fill()
    

      }

      update(){
        this.X += this.speedX 
        this.Y += this.speedY 
      
        if(this.x <0 ) this.x = canvas.width
        if(this.x > canvas.width)this.x=0;
         if(this.y <0 ) this.y = canvas.heighy
        if(this.y > canvas.width)this.y=0;


           this.draw();



      }
    }

    function crateParticle(){
          paarticle = [];
          for(let i =0; i<particlesCount; i++){
            particles.push(new Particle())
          }
    }


    function handlesize(){

    }
      
}}

  

  return(
    <canvas
    ref={canvasRef}
    className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    >
       
    </canvas>
  )
}