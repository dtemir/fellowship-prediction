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