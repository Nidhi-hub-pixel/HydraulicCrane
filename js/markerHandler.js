AFRAME.registerComponent("markerhandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker is found")
            this.handlemarkerFound()

        })
        this.el.addEventListener("markerLost",()=>{
            console.log("Marker is lost")
            this.handlemarkerLost()
            
        })
    },
    handlemarkerFound:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="flex"
        var orderButton=document.getElementById("order-button")
        var orderSummaryButton=document.getElementById("order-summary-button")
        orderButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Thanks for order!",
                text:"Your order will be delivered soon",
                timer:2000,
                buttons:false
            })
        })
        orderSummaryButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Order Summary",
                text:"Work in progress"
            })
        })
    },
    handlemarkerLost:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="none"
    }
})