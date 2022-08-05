// ********************************************************************************
// ********************************************************************************
// *************************** Additional tips & tricks ***************************
// ********************************************************************************
// ********************************************************************************

// **************************************************
// Writing style variation
// **************************************************

const html = `HTML CODE`;
const modalHtml = `MODAL HTML CODE`;
reearth.ui.show(html);
reearth.ui.modal.show(modalHtml, {width: "200px", height: "300px"});

// **************************************************
// Do something on resize
// **************************************************

reearth.ui.show(`
<style>
  html, body { 
    margin: 0; 
    width: 300px;
  }
  .extendedh { width: 500px; }
  .extendedv { height: 400px; }
  #wrapper {
    border: 2px solid grey;
    border-radius: 12px;
    background-color: rgb(111, 111, 111);
    box-sizing: border-box;
  }
  .extendedh body, .extendedh #wrapper { width: 100%; }
  .extendedv body, .extendedv #wrapper { height: 100%; }
</style>
  <div id="wrapper">
    <div style="padding: 10px">
      <button id="resize">Resize</button>
    </div>
  </div>
<script>
let expanded = false;
document.getElementById("resize").addEventListener("click", (e) => {
  if (!expanded){
    document.documentElement.classList.add("extendedh");
    document.documentElement.classList.add("extendedv");
  } else {
    document.documentElement.classList.remove("extendedh");
    document.documentElement.classList.remove("extendedv");
  }
  expanded = !expanded;
  parent.postMessage({ type: "resize", expanded }, "*");
});
</script>
`);

reearth.on("message", msg => {
if (msg.type === "resize") {
    console.log("GOT A MESSAGE:", msg.expanded);
  }
});