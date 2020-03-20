
/******** Budget Contoller *********/
var budgetController = (function(){
    // Incom And Expese Function Constructors
    function Income(id, description , value){
        this.id = type;
        this.description = description;
        this.value = value;
    }

    function Expense(id, description , value){
        this.id = type;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems : {
            exp : [],
            inc : []
        },
        total:{
            exp : 0,
            inc : 0
        }
    }


})()




/******** UI Contoller *********/
var UIController = (function(){
    // var type, description, value;

    var DomObjects={
        type : '.add__type',
        Description : '.add__description',
        value : '.add__value'
    }

    return{
        getInput : function(){
            return{
                type : document.querySelector(DomObjects.type).value,
                Description : document.querySelector(DomObjects.Description).value,
                value : document.querySelector(DomObjects.value).value
            }          
        }
    }

})()




/******** App Contoller *********/
var controller = (function(budgetController,UIController){

    var eventListenerSetup = function(){
    // Add Event Listeners
    document.querySelector('.add__btn').addEventListener('click',ctrlItem);
    document.addEventListener('keypress',function(event){
       if(event.keyCode == 13 || event.which == 13){
        ctrlItem();
       }
    });
    }

    // Contolr Items 
    var ctrlItem = function(){
        // 1. Get Input Data
            var input = UIController.getInput();
            console.log(input);
        // 2. Add Item Budget Controller
        // 3. Add Item UI
        // 4. Calculate UI
        // 5. Display Budget on tehe UI
       
    }

    return{
        init : function(){
            console.log('App Is Started');
            eventListenerSetup();
        }
    }

})(budgetController,UIController)
controller.init();