 var canvas=false
 var ctx=false
 var prX=0
 var prY=0
 var crX=0
 var crY=0
 function canvasLoader()
{
  canvas=document.getElementById("myCanvas")//
     ctx=canvas.getContext("2d")//
     ctx.fillStyle="#FF0000"//
    console.log("hello")
    w=canvas.width//
    h=canvas.height//
    console.log(w)
    console.log(h) 
    function findXY(res,obj){
        if(res=="moveup"){
                prX=crX
                prY=crY
                crX=obj.clientX-canvas.offsetLeft//
                crY=obj.clientY-canvas.offsetTop//
                ctx.beginPath()//
                ctx.fillStyle="black"//
                ctx.fillRect(crX,crY,2,2)//
                ctx.closePath()//
        }
        if(res=="move"){
            prX=crX
            prY=crY
            crX=obj.clientX-canvas.offsetLeft
            crY=obj.clientY-canvas.offsetTop
            draw()
    }
    function draw(){
        ctx.beginPath()
        ctx.moveTo(prX,prY)
        ctx.lineTo(crX,crY)
        ctx.strokeStyle="black"
        ctx.linewidth=2
        ctx.stroke()
        ctx.closePath()
            
           
    }
    }
    canvas.addEventListener("mousemove",function (e){
       findXY("move",e)
        // console.log("its working")
    })
    canvas.addEventListener("mouseup",function (e){
        findXY("moveup",e)
        console.log("going up")
    })
    canvas.addEventListener("mousedown",function (e){
        findXY("movedown",e)
        console.log("going down")
    })
    canvas.addEventListener("mouseout",function (e){
        //console.log("its working")
    })
}
