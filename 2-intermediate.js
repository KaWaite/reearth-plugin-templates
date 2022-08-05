// ********************************************************************************
// ********************************************************************************
// ******************************** Intermediate **********************************
// ********************************************************************************
// ********************************************************************************

// **************************************************
// Intermediate communication - Re:Earth -> Plugin
// **************************************************

// **************************************************
// Intermediate communication - Plugin -> Re:Earth
// **************************************************

// **************************************************
// Access properties setup in YAML file
// **************************************************

// **************************************************
// Vertically extendable
// **************************************************

// **************************************************
// Horizontally extendable
// **************************************************

// **************************************************
// Starting template w Modal: HTML
// **************************************************

reearth.ui.show(`
<html>
    <style>
        html, body {
            margin: 0;
            width: 200px;
            color: white;
        }
        #main {
            height: 100%;
            background: rgb(180, 180, 180);
            padding: 12px;
        }
    </style>
    <div id="main">
        <button id="modalButton" onclick=ButtonClick()>Open Modal</button>
    </div>
    <script>
    let showModal = false;
    const ButtonClick = () => {
        showModal = !showModal
        parent.postMessage(showModal, "*");
    };
  </script>
</html>
`);

reearth.on("message", msg => {
  if (!msg) {
      reearth.ui.modal.close();
} else {
      reearth.ui.modal.show(`
      const html = \`
      <html>
          <style>
              html, body {
                  margin: 0;
                  width: 750px;
                  height: 500px;
              }
              #main {
                  background: #232226;
                  color: white;
                  border-radius: 5px;
                  display: flex;
                  justify-content: space-between;
                  align-content: center;
                  flex-direction: column;
                  height: 100%;
              }
              #body {
                height: 100%;
                list-style: none;
              }
          </style>
          <div id="main">
              <div id="body">
                  <button id="closebutton" class="button">Close</button>
              </div>
          </div>
          <script>
              document.getElementById("closebutton").addEventListener("click", (e) => {
                  parent.postMessage("close", "*");
              });
          </script>
      </html>
      \`
      
        reearth.ui.modal.show(html);
        
        reearth.on("message", msg => {
            if(msg == "close") {
                reearth.ui.modal.close();
            }
        });
        `);
  }
});

// **************************************************
// Starting template w Modal: IFrame
// **************************************************