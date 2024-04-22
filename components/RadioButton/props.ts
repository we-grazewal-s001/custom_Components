export const props={
    inputId:{
        type:String||Number,
        required:false,
        unique:true
    },
    name:{
        type:String,
        required:true,
        default:'Input radio'
    },
    value:{
        type:String||Number,
        required:false,
        default:''
    },
    disabled:{
        type:Boolean,
        required:false,
        default:false
    },
    invalid:{
        type:Boolean,
        required:false,
        default:false
    },
    labelClass:{
        type:String,
        required:false,
        default:''
    },
    




}