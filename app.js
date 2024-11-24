document.getElementById("uList").innerHTML=`<li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched">
                      <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Third checkbox</label>
                    </li>`

document.getElementById("btnAddTask").addEventListener("click",addTask);

function addTask(){
console.log("clicked")

}