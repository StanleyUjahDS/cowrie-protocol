/* ===========================
   FADE UP
=========================== */

export const fadeUp = {

    hidden: {

        opacity:0,

        y:40

    },


    visible: {

        opacity:1,

        y:0,

        transition: {

            duration:.7,

            ease:"easeOut"

        }

    },


    exit: {

        opacity:0,

        y:-40,

        transition: {

            duration:.5,

            ease:"easeIn"

        }

    }

};







/* ===========================
   FADE IN
=========================== */

export const fadeIn = {


    hidden: {

        opacity:0

    },


    visible: {

        opacity:1,

        transition: {

            duration:.7,

            ease:"easeOut"

        }

    },


    exit: {

        opacity:0,

        transition: {

            duration:.5,

            ease:"easeIn"

        }

    }

};







/* ===========================
   SLIDE FROM LEFT
=========================== */

export const slideLeft = {


    hidden: {

        opacity:0,

        x:-60

    },


    visible: {

        opacity:1,

        x:0,

        transition: {

            duration:.8,

            ease:"easeOut"

        }

    },


    exit: {

        opacity:0,

        x:-60,

        transition: {

            duration:.5,

            ease:"easeIn"

        }

    }

};







/* ===========================
   SLIDE FROM RIGHT
=========================== */

export const slideRight = {


    hidden: {

        opacity:0,

        x:60

    },


    visible: {

        opacity:1,

        x:0,

        transition: {

            duration:.8,

            ease:"easeOut"

        }

    },


    exit: {

        opacity:0,

        x:60,

        transition: {

            duration:.5,

            ease:"easeIn"

        }

    }

};







/* ===========================
   STAGGER CONTAINER
=========================== */

export const staggerContainer = {


    hidden:{},


    visible: {


        transition:{


            staggerChildren:.15


        }

    }


};







/* ===========================
   CARD ANIMATION
=========================== */

export const cardItem = {


    hidden:{


        opacity:0,

        y:50,

        scale:.96


    },


    visible:{


        opacity:1,

        y:0,

        scale:1,


        transition:{


            duration:.6,

            ease:"easeOut"


        }


    },


    exit:{


        opacity:0,

        y:50,

        scale:.96,


        transition:{


            duration:.5,

            ease:"easeIn"


        }


    }


};







/* ===========================
   HERO CONTAINER
=========================== */

export const heroContainer = {


    hidden:{},


    visible:{


        transition:{


            staggerChildren:.2


        }


    }


};







/* ===========================
   HERO ITEM
=========================== */

export const heroItem = {


    hidden:{


        opacity:0,

        y:60


    },


    visible:{


        opacity:1,

        y:0,


        transition:{


            duration:.8,

            ease:"easeOut"


        }


    },


    exit:{


        opacity:0,

        y:-60,


        transition:{


            duration:.5,

            ease:"easeIn"


        }


    }


};







/* ===========================
   HERO IMAGE
=========================== */

export const heroImage = {


    hidden:{


        opacity:0,

        scale:.85


    },


    visible:{


        opacity:1,

        scale:1,


        transition:{


            duration:1,

            ease:"easeOut"


        }


    },


    exit:{


        opacity:0,

        scale:.85,


        transition:{


            duration:.5,

            ease:"easeIn"


        }


    }


};







/* ===========================
   IMAGE REVEAL
=========================== */

export const imageReveal = {


    hidden:{


        opacity:0,

        scale:.9


    },


    visible:{


        opacity:1,

        scale:1,


        transition:{


            duration:.8,

            ease:"easeOut"


        }


    },


    exit:{


        opacity:0,

        scale:.9,


        transition:{


            duration:.5,

            ease:"easeIn"


        }


    }


};







/* ===========================
   FLOATING EFFECT
=========================== */

export const floating = {


    animate:{


        y:[0,-12,0]


    },


    transition:{


        duration:5,

        repeat:Infinity,

        ease:"easeInOut"


    }


};







/* ===========================
   PAGE TRANSITION
=========================== */

export const pageTransition = {


    initial:{


        opacity:0,

        y:20


    },


    animate:{


        opacity:1,

        y:0


    },


    exit:{


        opacity:0,

        y:-20


    },


    transition:{


        duration:.4,

        ease:"easeInOut"


    }


};