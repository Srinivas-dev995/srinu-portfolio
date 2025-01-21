export const fadeIn = (direction,delay) =>{
    return {
        hidden : {
            y:direction === 'up' ? 40 :direction === 'down' ? -40 : 0,
            x:direction === 'left' ? 40 :direction === 'right' ? -40 : 0,
        },
        show : {
            y:0,
            x:0,
            opacity:1,
            transition : {
                type : 'tween',
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75],
            }
        }
    }
}

export const stagger = (delay = 0, amount = 0.1) => {
    return {
        hidden: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
                staggerChildren: amount, 
            }
        }
    }
}
