const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    products:[{
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'products',
            required:true
        },
        price:{
            type:Number
        },
        quantity:{
            type:Number
        },
        orderStatus:{
            type:String,
            default:'Pending',
            enum:['Pending','Processing','Shipped','Delivered','Cancelled','Returned']
        },
        offers:[{
            type:mongoose.Schema.Types.ObjectId
        }],
        deliveryDate:{
            type:mongoose.Schema.Types.ObjectId
        },
        required:true
    }],
    paymentMethod:{
        type:String,
        required:true,
        enum:['Credit Card','Razorpay','Paypal','Cash On Delivery']
    },
    shippingAddress:{
        phone:{type:Number,required:true},
        phone1:{type:Number},
        fullName:{type:String,required:true},
        address:{type:String},
        state:{type:String,required:true},
        street:{type:String,required:true},
        pincode:{type:Number,required:true}

    },
    orderDate:{type:Date,default:Date.now},
    coupons:{type:mongoose.Schema.Types.ObjectId},
    totalAmount:{type:Number,required:true}
    
})


module.exports = mongoose.model('order',orderSchema)