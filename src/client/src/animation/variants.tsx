// this variant is used by framer-motion to animate transitions between pages
export const pageVariant = 
{
    hidden:
    {
        x:'100vw'
    },

    visible:
    {
        x:0,
        transition:{type:'spring', delay:0.5, duration:0.5}
    },

    exit:
    {
        x:'-100vw',
        transition: {ease:'easeInOut'}
    }
}

// this variant is used by framer-motion to animate alerts
export const alertVariant =  
{
    hidden:
    {
        scale:0
    },

    visible:
    {
        scale:1,
        transition:{duration:0.5}
    },
}