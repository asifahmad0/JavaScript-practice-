      let color = document.getElementById("color");
      let creatBtn = document.getElementById("creatBtn");
      let list = document.getElementById("list");

      creatBtn.onclick = () => {
        let newNot = document.createElement("div");
        newNot.classList.add("note");
        newNot.innerHTML = `<span class="close">×</span>
          <textarea
            id="text"
            placeholder="Write  content...."
            cols="30"
            rows="10"
          ></textarea>`;
        list.appendChild(newNot);
        newNot.style.borderColor = color.value;
      };
      document.addEventListener("click", (event) => {
        console.log(event.target);
        if (event.target.classList.contains("close")) {
          event.target.parentNode.remove();
        }
      });

      let cursor = {
        x: null,
        y: null,
      };
      let note = {
        dom: null,
        x: null,
        y: null,
      };
      document.addEventListener("mousedown", (event) => {
        if (event.target.classList.contains("note")) {
          cursor = {
            x: event.clientX,
            y: event.clientY,
          };
          
          note = {
            dom: event.target,
            x: event.target.getBoundingClientRect().left,
            y: event.target.getBoundingClientRect().top,
          };
        }
      });

      document.addEventListener("mousemove", (event) => {
        if (note.dom == null) return;
        let currentCursor = {
          x: event.clientX,
          y: event.clientY,
        };
        let distance = {
          x: currentCursor.x - cursor.x,
          y: currentCursor.y - cursor.y,
        };
        note.dom.style.left = note.x + distance.x + "px";
        note.dom.style.top = note.y + distance.y + "px";
        note.dom.style.cursor = "grab";
      });
      document.addEventListener("mouseup", () => {
        if (note.dom == null) return;
        note.dom.style.cursor = "auto";
        note.dom = null;
      });