const aksem=[
    {
        id:1,
        name:"سنة أولى إبتدائي الشابي",
        teacher:{
            id:1,
            name:"Arabic teacher"
        },
        dayAndTime:"",
        isDropped:false,


    },
    {
        id:2,
        name:"سنة أولى إبتدائي الشابي",
        teacher:{
            id:2,
            name:"Arabic teacher"
        },
        dayAndTime:"",
        isDropped:false,
    },
    {
        id:3,
        name:"سنة ثالثة إبتدائي الشابي",
        teacher:{
            id:3,
            name:"Arabic teacher"
        },
        dayAndTime:"",
        isDropped:false,
    },
        
         
]


const handleAksem=(state=aksem,action)=>{


    switch(action.type){
        case "DROP_KESM":
            return state.map((kesm)=>{
                if(kesm.id===action.payload){
                    return{
                        ...kesm,
                        isDropped:!kesm.isDropped,
                        dayAndTime:action.dayAndTime

                    }
                }else{
                    return kesm
                }
            }
            )
        case "UNDROP_KESM":
            return state.map((kesm)=>{
                if(kesm.id===action.payload){
                    return{
                        ...kesm,
                        isDropped:!kesm.isDropped
                    }
                }else{
                    return kesm
                }
            }
            )
        default:
            return state



    }
}
export default handleAksem;