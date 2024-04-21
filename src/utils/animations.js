export const textRevealMotion=(delay)=>{
    return {
        initial:{y:100, opacity:0},
        animate:{y:0,
        opacity:1,
        transition:{
            delay,
            duration:0.8,
            ease:[0.25, 1, 0.5, 1]
        }
    }
    }
}