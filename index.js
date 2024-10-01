var buttons = document.querySelectorAll(".btn")
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        var command = button.dataset["element"]
        console.log(command);
        if(command == "insertImage" || command == "createLink"){
            var url = prompt("Enter link here:", "https://")
            document.execCommand(command,true,url)
        }else{
            document.execCommand(command,false,null)
        }
        
    })
    
}
)
var buttons = document.getElementsByClassName("btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var command = this.getAttribute("data-element");
            // Handle other commands...
        });
    }

    var dropdown = document.getElementById("caseDropdown");
    dropdown.addEventListener("change", function() {
        var caseValue = this.value;
        document.execCommand('selectAll', false, null);

        if (caseValue === "uppercase") {
            document.execCommand("insertText", false, getSelectedText().toUpperCase());
        } else if (caseValue === "lowercase") {
            document.execCommand("insertText", false, getSelectedText().toLowerCase());
        }
        
        this.selectedIndex = 0; 
    });

    function getSelectedText() {
        var selectedText = '';
        if (window.getSelection) {
            selectedText = window.getSelection().toString();
        }
 
        else if (command == "delete") {
            document.execCommand("delete", false, null);
        }
        else if (command == "cut") {
            document.execCommand("cut", false, null)}

        return selectedText;
       
    }
