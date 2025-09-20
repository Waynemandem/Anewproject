document.addEventListener("DOMContentLoaded",()=> {
      const businesses = [
        { name: "Mumsy's Kitchen", category:
             "Food", contact: "09078740445" },
        { name: "FinoCutz", category:
            "Fashion", contact: "09078740445" },
        { name:"Wayne tech laptop repair", category:
            "Tech", conatct: "09078740445" },
        { name: "Teena crochet", category: 
            "fashion", contact: "09078740445" },
        { name: "Beauty's place", category:
            "E-commerce store", contact: "09078740445"},
        { name: "B&B fashion Hub", category:
            "fashion", contact: "09078740445" }  
      ];

      const listContainer =
      document.getElementById("liofbusiness");

      if (listContainer){
           businesses.forEach(biz => {
            const card = 
            document.createElement("div");
             card.className = "card";
             card.innerHTML = `<h3>${biz.name}</h3>
                               <p>category: ${biz.category}</p>
                               ${biz.contact}`;

               listContainer.appendChild(card);                
           });
      }
});

    function addCourse() {
      let courseDiv = document.createElement("div");
      courseDiv.classList.add("course");
      courseDiv.innerHTML = `
        <select class="grade">
          <option value="5">A</option>
          <option value="4">B</option>
          <option value="3">C</option>
          <option value="2">D</option>
          <option value="1">E</option>
          <option value="0">F</option>
        </select>
        <input type="number" class="credit" placeholder="Credit" min="1">
      `;
      document.getElementById("courses").appendChild(courseDiv);
    }

     let gpa = (totalPoints / totalCredits).toFixed(2);
let classification = "";
let cssClass = "";
if (gpa >= 4.5) { classification = "First Class 👑"; cssClass = "first-class"; }
else if (gpa >= 3.5) { classification = "Second Class Upper 🎓"; cssClass = "second-upper"; }
else if (gpa >= 2.4) { classification = "Second Class Lower 📘"; cssClass = "second-lower"; }
else if (gpa >= 1.5) { classification = "Third Class 📗"; cssClass = "third-class"; }
else { classification = "Pass/Fail ⚠️"; cssClass = "pass-fail"; }
document.getElementById("result").innerHTML = 
  `Your GPA is: <span class="${cssClass}">${gpa} (${classification})</span>`;


