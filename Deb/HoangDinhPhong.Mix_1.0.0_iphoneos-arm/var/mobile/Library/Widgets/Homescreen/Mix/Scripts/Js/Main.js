var iPhoneType = "auto";
if (iPhoneType == "auto") {
   if (screen.height == 812) {
      iPhoneType = "iPhX";
   } else if (screen.height == 896) {
      iPhoneType = "iPhMax";
   } else if (screen.height == 844) {
      iPhoneType = "iPh12Pro";
   } else {
      iPhoneType = "iPh12Max";
   }
}

window.addEventListener("load", function () {
   switch (iPhoneType) {

      case "iPhX":
         document.body.style.width = '375px';
         document.body.style.height = '812px';
         $("#AnaBg").css({
            "width": "155px", "height":"155px"
         });
         $("#Temp").css({
            "font-size": "22px"
         });
         $("#Boss").css({
            "font-size": "7px"
         });
         break;

      case "iPhMax":
         document.body.style.width = '414px';
         document.body.style.height = '896px';
         break;

      case "iPh12Pro":
         document.body.style.width = '390px';
         document.body.style.height = '844px';
         $("#AnaBg").css({
            "width": "160px", "height":"160px"
         });
         $("#Temp").css({
            "font-size": "23px"
         });
         break;

      case "iPh12Max":
         document.body.style.width = '428px';
         document.body.style.height = '926px';
         $("#AnaBg").css({
            "width": "173px", "height":"173px"
         });
         break;
   }
}, false);