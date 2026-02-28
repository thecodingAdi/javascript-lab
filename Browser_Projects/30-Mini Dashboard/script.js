// ================= CLOCK =================
function updateClock(){
    const now = new Date();
    document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock,1000);
updateClock();


// ================= TODO =================
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos(){
    const list = document.getElementById("todoList");
    list.innerHTML="";
    todos.forEach((todo,index)=>{
        const li=document.createElement("li");
        li.innerHTML = `${todo} <button onclick="deleteTodo(${index})">❌</button>`;
        list.appendChild(li);
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function addTodo(){
    const input=document.getElementById("todoInput");
    if(input.value.trim()!==""){
        todos.push(input.value);
        input.value="";
        renderTodos();
    }
}

function deleteTodo(index){
    todos.splice(index,1);
    renderTodos();
}

renderTodos();


// ================= WEATHER =================
async function getWeather(){
    const city=document.getElementById("cityInput").value;
    const apiKey="YOUR_API_KEY"; // put your API key here
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const res=await fetch(url);
        const data=await res.json();
        if(data.cod===200){
            document.getElementById("weatherResult").innerText=
            `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
        }else{
            document.getElementById("weatherResult").innerText="City not found!";
        }
    }catch(err){
        document.getElementById("weatherResult").innerText="Error fetching data!";
    }
}