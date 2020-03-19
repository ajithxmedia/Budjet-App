
/******** Budget Contoller *********/
var budgetController = (function(){
    // var x = 10;
    // var add = function(a){
    //     return x+a;
    // }
    // return{
    //     addnum  : function(a){
    //         console.log(add(a));
    //     }
    // }

})()

/******** UI Contoller *********/
var UIController = (function(){

    return{
        getInput : function(){
            
        }
    }

})()

/******** App Contoller *********/
var controller = (function(){
    // budgetController.addnum(10);



    // Add Event Listeners
    document.querySelector('.add__btn').addEventListener('click',ctrlItem);
    document.addEventListener('keypress',function(event){
       console.log(event);
       if(event.keyCode == 13 || event.which == 13){
           alert('You Pressed Enter');
       }
    });

})(budgetController,UIController)