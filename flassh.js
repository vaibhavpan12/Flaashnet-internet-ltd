function mediaQuery900() {
    let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
  
    let active = 3;
    function loadShow() {
      let stt = 0;
      items[active].style.transform = `none`;
      items[active].style.zIndex = 1;
      items[active].style.filter = 'none';
      items[active].style.opacity = 1;
      for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${8 * stt}vw) scale(${1 - 0.2 * stt}) `;
        items[i].style.zIndex = -stt;
        // items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 1;
      }
      stt = 0;
      for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-8 * stt}vw) scale(${1 - 0.2 * stt})`;
        items[i].style.zIndex = -stt;
        // items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 1;
      }
    }
    loadShow();
    next.onclick = function () {
      active = active + 1 < items.length ? active + 1 : active;
      loadShow();
    }
    prev.onclick = function () {
      active = active - 1 >= 0 ? active - 1 : active;
      loadShow();
    }
  }
  mediaQuery900()
  // ____________________________________________________---------------------------____________________
  function asd() {
    let items = document.querySelectorAll('.slider .item');
    let active = 2;
    function loadShow() {
      items[active].style.transform = `none`;
      items[active].style.zIndex = 1;
      items[active].style.filter = 'none';
      items[active].style.opacity = 1;
      // show after
      let stt = 0;
      for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${9 * stt}vw) scale(${1 - 0.2 * stt})`;
        items[i].style.zIndex = -stt;
        // items[i].style.filter = 'blur(7px)';
        items[i].style.opacity = stt > 0 ? 0 : 1;
      }
      stt = 0;
      for (var i = (active - 1); i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-9 * stt}vw) scale(${1 - 0.2 * stt})`;
        items[i].style.zIndex = -stt;
        // items[i].style.filter = 'blur(7px)';
        items[i].style.opacity = stt > 0 ? 0 : 1;
      }
    }
    loadShow();
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    next.onclick = function () {
      if (active + 1 < items.length) {
        active = active + 1;
      } else {
        active = 0;
  
      }
      loadShow();
    }
    prev.onclick = function () {
      if (active - 1 >= 0) {
        active = active - 1;
      } else {
        active = 5;
      }
      loadShow();
    }
  }
  
  function myFunction(x) {
    if (x.matches) { // If media query matches
      asd()
  
    } else {
      mediaQuery900()
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 900px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function () {
    myFunction(x);
  });
  
  
  
  //   +++++++++++_______________________________________________________________________++++++++++++++++++++++++
  
  function copperplanDetails() {
    // ---------------------------------------------------//
    slider = document.querySelector(".slider");
    mianplan = document.querySelector(".PlanDetailsPopUp");//main plans div 
  
    //**********------20mb paln Details-------*************** */
  
  
    opentag20mbplan = document.querySelector("#plan20open");//button  open
    detailsDiv20mbplan = document.querySelector("#plan20")//div plan
    closetag20mbplan = document.querySelector("#plan20close");//close div
    plansilectorhide = document.querySelector(".Planselector")
  
  
    opentag20mbplan.onclick = function () {
      console.log("hello 20");
      slider.style.opacity = "0";
      slider.style.display = "none";
      mianplan.style.opacity = "1";
      mianplan.style.display = "flex";
      detailsDiv20mbplan.style.display = "block";
      plansilectorhide.style.display = "none";
  
    }
  
  
    closetag20mbplan.onclick = function () {
      console.log("close");
      slider.style.opacity = "1";
      slider.style.display = "flex";
      mianplan.style.opacity = "0";
      mianplan.style.display = "none";
      plansilectorhide.style.display = "flex";
      detailsDiv20mbplan.style.display = "none";
  
    }
    //**************-------------25 mb plan Details------------***************
    opentag25mb = document.querySelector("#plan25open");//button  open
    detailsDiv25mb = document.querySelector("#plan25")//div plan
    closetag25mb = document.querySelector("#plan25close");//close div
  
  
    opentag25mb.onclick = function () {
      console.log("hello 25");
      slider.style.opacity = "0";
      slider.style.display = "none";
      mianplan.style.opacity = "1";
      mianplan.style.display = "flex";
      detailsDiv25mb.style.display = "block";
      plansilectorhide.style.display = "none";
  
    }
  
  
    closetag25mb.onclick = function () {
      console.log("close");
      slider.style.opacity = "1";
      slider.style.display = "flex";
      mianplan.style.opacity = "0";
      mianplan.style.display = "none";
      plansilectorhide.style.display = "flex";
  
      detailsDiv25mb.style.display = "none";
  
    }
    //*******-----30mb Plan Details------*********** */
    opentag30mb = document.querySelector("#plan30open");//button  open
    detailsDiv30mb = document.querySelector("#plan30")//div plan
    closetag30mb = document.querySelector("#plan30close");//close div
  
    opentag30mb.onclick = function () {
      console.log("hello30");
      slider.style.opacity = "0";
      slider.style.display = "none";
      mianplan.style.opacity = "1";
      mianplan.style.display = "flex";
      detailsDiv30mb.style.display = "block";
      plansilectorhide.style.display = "none";
  
    }
  
  
    closetag30mb.onclick = function () {
      console.log("close");
      slider.style.opacity = "1";
      slider.style.display = "flex";
      mianplan.style.opacity = "0";
      mianplan.style.display = "none";
      plansilectorhide.style.display = "flex";
  
      detailsDiv30mb.style.display = "none";
  
    }
    //******------------35mb plan Details----------------*******/
    opentag35mbplan = document.querySelector("#plan35open");//button  open
    detailsDiv35mbplan = document.querySelector("#plan35")//div plan
    closetag35mbplan = document.querySelector("#plan35close");//close div
  
  
    opentag35mbplan.onclick = function () {
      console.log("hello 35");
      slider.style.opacity = "0";
      slider.style.display = "none";
      mianplan.style.opacity = "1";
      mianplan.style.display = "flex";
      detailsDiv35mbplan.style.display = "block";
      plansilectorhide.style.display = "none";
  
    }
  
  
    closetag35mbplan.onclick = function () {
      console.log("close");
      slider.style.opacity = "1";
      slider.style.display = "flex";
      mianplan.style.opacity = "0";
      mianplan.style.display = "none";
      plansilectorhide.style.display = "flex";
  
      detailsDiv35mbplan.style.display = "none";
  
    }
    //******------------50mb plan Details----------------*******/
    opentag50mbplan = document.querySelector("#plan50open");//button  open
    detailsDiv50mbplan = document.querySelector("#plan50")//div plan
    closetag50mbplan = document.querySelector("#plan50close");//close div
  
  
    opentag50mbplan.onclick = function () {
      console.log("hello 50");
      slider.style.opacity = "0";
      slider.style.display = "none";
      mianplan.style.opacity = "1";
      mianplan.style.display = "flex";
      detailsDiv50mbplan.style.display = "block";
      plansilectorhide.style.display = "none";
  
    }
  
  
    closetag50mbplan.onclick = function () {
      console.log("close");
      slider.style.opacity = "1";
      slider.style.display = "flex";
      mianplan.style.opacity = "0";
      mianplan.style.display = "none";
      plansilectorhide.style.display = "flex";
  
      detailsDiv50mbplan.style.display = "none";
  
    }
    //******------------60mb plan Details----------------*******/
    opentag60mbplan = document.querySelector("#plan60open");//button  open
    detailsDiv60mbplan = document.querySelector("#plan60")//div plan
    closetag60mbplan = document.querySelector("#plan60close");//close div
  
  
    opentag60mbplan.onclick = function () {
      console.log("hello 60");
      slider.style.opacity = "0";
      slider.style.display = "none";
      mianplan.style.opacity = "1";
      mianplan.style.display = "flex";
      detailsDiv60mbplan.style.display = "block";
      plansilectorhide.style.display = "none";
  
    }
  
  
    closetag60mbplan.onclick = function () {
      console.log("close");
      slider.style.opacity = "1";
      slider.style.display = "flex";
      mianplan.style.opacity = "0";
      mianplan.style.display = "none";
      detailsDiv60mbplan.style.display = "none";
      plansilectorhide.style.display = "flex";
  
  
    }
  
  }
  copperplanDetails()
  
  
  
  
  
  // -----------_________________________________________________--------
  
  
  
  function ftthmediaQuery900() {
    let ftthitems = document.querySelectorAll('.ftthslider .modified-item');
    let ftthnext = document.getElementById('ftthnext');
    let ftthprev = document.getElementById('ftthprev');
  
    let active = 1;
    function loadShow() {
      let stt = 0;
      ftthitems[active].style.transform = `none`;
      ftthitems[active].style.zIndex = 1;
      ftthitems[active].style.filter = 'none';
      ftthitems[active].style.opacity = 1;
      for (var i = active + 1; i < ftthitems.length; i++) {
        stt++;
        ftthitems[i].style.transform = `translateX(${8 * stt}vw) scale(${1 - 0.2 * stt}) `;
        ftthitems[i].style.zIndex = -stt;
        // items[i].style.filter = 'blur(5px)';
        ftthitems[i].style.opacity = stt > 1 ? 0 : 1;
      }
      stt = 0;
      for (var i = active - 1; i >= 0; i--) {
        stt++;
        ftthitems[i].style.transform = `translateX(${-8 * stt}vw) scale(${1 - 0.2 * stt})`;
        ftthitems[i].style.zIndex = -stt;
        // items[i].style.filter = 'blur(5px)';
        ftthitems[i].style.opacity = stt > 1 ? 0 : 1;
      }
    }
    loadShow();
    ftthnext.onclick = function () {
      active = active + 1 < ftthitems.length ? active + 1 : active = 0;
      loadShow();
    }
    ftthprev.onclick = function () {
      active = active - 1 >= 0 ? active - 1 : active = 3;
      loadShow();
    }
  }
  ftthmediaQuery900()
  
  
  function ftth900mediaquery(){
    let ftthitems = document.querySelectorAll('.ftthslider .modified-item');
    let ftthnext = document.getElementById('ftthnext');
    let ftthprev = document.getElementById('ftthprev');
  
    let active = 1;
    function loadShow() {
      let stt = 0;
      ftthitems[active].style.transform = `none`;
      ftthitems[active].style.zIndex = 1;
      ftthitems[active].style.filter = 'none';
      ftthitems[active].style.opacity = 1;
      for (var i = active + 1; i < ftthitems.length; i++) {
        stt++;
        ftthitems[i].style.transform = `translateX(${8 * stt}vw) scale(${1 - 0.2 * stt}) `;
        ftthitems[i].style.zIndex = -stt;
        // items[i].style.filter = 'blur(5px)';
        ftthitems[i].style.opacity = stt > 0 ? 0 : 1;
      }
      stt = 0;
      for (var i = active - 1; i >= 0; i--) {
        stt++;
        ftthitems[i].style.transform = `translateX(${-8 * stt}vw) scale(${1 - 0.2 * stt})`;
        ftthitems[i].style.zIndex = -stt;
        // items[i].style.filter = 'blur(5px)';
        ftthitems[i].style.opacity = stt > 0 ? 0 : 1;
      }
    }
    loadShow();
    ftthnext.onclick = function () {
      active = active + 1 < ftthitems.length ? active + 1 : active = 0;
      loadShow();
    }
    ftthprev.onclick = function () {
      active = active - 1 >= 0 ? active - 1 : active = 3;
      loadShow();
    }
  }
  
  
  
  
  
  
  function ftthdisplay() {
    ftthplanview = document.querySelector(".Planselector .ftth")
    cooperplanview = document.querySelector(".Planselector .copper")
    cooperplanvname = document.querySelector(".PLanView .copperPlanHead")
    ftthplanvname = document.querySelector(".PLanView .ftthPlanHead")
    sliderview = document.querySelector(".slider")
    ftthview = document.querySelector(".ftthslider")
  
    ftthplanview.onclick = function () {
      console.log("Open Ftth Plan");
      sliderview.style.display = "none";
      ftthview.style.display = "flex";
      ftthplanview.style.borderBottom = "2px solid #8c00ff";
      cooperplanvname.style.marginTop = "-4vw";
      cooperplanview.style.borderBottom = "none";
    }
    cooperplanview.onclick = function () {
      console.log("Open Ftth Plan");
      sliderview.style.display = "flex";
      ftthview.style.display = "none";
      ftthplanview.style.borderBottom = "none";
      cooperplanvname.style.marginTop = "0";
      cooperplanview.style.borderBottom = "2px solid #8c00ff";
    }
  
  }
  
  
  // ______________________________________________________________________________________________________________________
  
  
  
  
  
  ftthslider = document.querySelector(".ftthslider");
  ftthmianplan = document.querySelector(".modified_PlanDetailsPopUp");//main plans div 
  ftthopentag20mbplan = document.querySelector("#modified-plan55open"); // Button to open
  ftthdetailsDiv20mbplan = document.querySelector("#modified_plan55"); // Div containing plan details
  ftthclosetag20mbplan = document.querySelector("#modified_plan55close"); // Button to close the div
  ftthplansilectorhide = document.querySelector(".modified_Planselector");
  
  ftthopentag20mbplan.onclick = function () {
    console.log("hello 20");
    ftthslider.style.opacity = "0";
    ftthslider.style.display = "none";
    ftthmianplan.style.opacity = "1";
    ftthmianplan.style.display = "flex";
    ftthdetailsDiv20mbplan.style.display = "block";
    ftthplansilectorhide.style.display = "none";
  }
  
  ftthclosetag20mbplan.onclick = function () {
    console.log("close");
    ftthslider.style.opacity = "1";
    ftthslider.style.display = "flex";
    ftthmianplan.style.opacity = "0";
    ftthmianplan.style.display = "none";
    ftthplansilectorhide.style.display = "flex";
    ftthdetailsDiv20mbplan.style.display = "none";
  }
  
  // __________________________________________85MB POPUP FTTH_______________________________________________________________
  
  
  ftthopentag85mbplan = document.querySelector("#modified-plan85open"); // Button to open
  ftthdetailsDiv85mbplan = document.querySelector("#modified_plan85"); // Div containing plan details
  ftthclosetag85mbplan = document.querySelector("#modified_plan85close"); // Button to close the div
  ftthplansilectorhide = document.querySelector(".Planselector");
  
  ftthopentag85mbplan.onclick = function () {
    console.log("hello 20");
    ftthslider.style.opacity = "0";
    ftthslider.style.display = "none";
    ftthmianplan.style.opacity = "1";
    ftthmianplan.style.display = "flex";
    ftthdetailsDiv85mbplan.style.display = "block";
    ftthplansilectorhide.style.display = "none";
  }
  
  ftthclosetag85mbplan.onclick = function () {
    console.log("close");
    ftthslider.style.opacity = "1";
    ftthslider.style.display = "flex";
    ftthmianplan.style.opacity = "0";
    ftthmianplan.style.display = "none";
    ftthplansilectorhide.style.display = "flex";
    ftthdetailsDiv85mbplan.style.display = "none";
  }
  
  
  
  
  
  
  // __________________________________________100MB POPUP FTTH_______________________________________________________________
  
  
  ftthopentag100mbplan = document.querySelector("#modified-plan100open"); // Button to open
  ftthdetailsDiv100mbplan = document.querySelector("#modified_plan100"); // Div containing plan details
  ftthclosetag100mbplan = document.querySelector("#modified_plan100close"); // Button to close the div
  ftthplansilectorhide = document.querySelector(".Planselector");
  
  ftthopentag100mbplan.onclick = function () {
    console.log("hello 20");
    ftthslider.style.opacity = "0";
    ftthslider.style.display = "none";
    ftthmianplan.style.opacity = "1";
    ftthmianplan.style.display = "flex";
    ftthdetailsDiv100mbplan.style.display = "block";
    ftthplansilectorhide.style.display = "none";
  }
  
  ftthclosetag100mbplan.onclick = function () {
    console.log("close");
    ftthslider.style.opacity = "1";
    ftthslider.style.display = "flex";
    ftthmianplan.style.opacity = "0";
    ftthmianplan.style.display = "none";
    ftthplansilectorhide.style.display = "flex";
    ftthdetailsDiv100mbplan.style.display = "none";
  }
  
  
  
  
  
  // __________________________________________85MB POPUP FTTH_______________________________________________________________
  
  
  ftthopentag150mbplan = document.querySelector("#modified-plan150open"); // Button to open
  ftthdetailsDiv150mbplan = document.querySelector("#modified_plan150"); // Div containing plan details
  ftthclosetag150mbplan = document.querySelector("#modified_plan150close"); // Button to close the div
  ftthplansilectorhide = document.querySelector(".Planselector");
  
  ftthopentag150mbplan.onclick = function () {
    console.log("hello 20");
    ftthslider.style.opacity = "0";
    ftthslider.style.display = "none";
    ftthmianplan.style.opacity = "1";
    ftthmianplan.style.display = "flex";
    ftthdetailsDiv150mbplan.style.display = "block";
    ftthplansilectorhide.style.display = "none";
  }
  
  ftthclosetag150mbplan.onclick = function () {
    console.log("close");
    ftthslider.style.opacity = "1";
    ftthslider.style.display = "flex";
    ftthmianplan.style.opacity = "0";
    ftthmianplan.style.display = "none";
    ftthplansilectorhide.style.display = "flex";
    ftthdetailsDiv150mbplan.style.display = "none";
  }
  
  
  // +_______________________________________________________________________________________________________________________
  
  
  
  
  
  
  
  
  function myhead(y) {
    ftth900mediaquery()
    if (y.matches) { // If media query matches
      ftthplanview = document.querySelector(".Planselector .ftth")
      cooperplanview = document.querySelector(".Planselector .copper")
      cooperplanvname = document.querySelector(".PLanView .copperPlanHead")
      ftthplanvname = document.querySelector(".PLanView .ftthPlanHead")
      sliderview = document.querySelector(".slider")
      ftthview = document.querySelector(".ftthslider")
  
      ftthplanview.onclick = function () {
        console.log("Open Ftth Plan");
        sliderview.style.display = "none";
        ftthview.style.display = "flex";
        ftthplanview.style.borderBottom = "2px solid #8c00ff";
        cooperplanvname.style.marginTop = "-13vw";
        cooperplanview.style.borderBottom = "none";
      }
      cooperplanview.onclick = function () {
        console.log("Open Ftth Plan");
        sliderview.style.display = "flex";
        ftthview.style.display = "none";
        ftthplanview.style.borderBottom = "none";
        cooperplanvname.style.marginTop = "0";
        cooperplanview.style.borderBottom = "2px solid #8c00ff";
      }
    } else {
      ftthmediaQuery900()
      ftthdisplay()
  
    }
  }
  
  // Create a MediaQueryList object
  var y = window.matchMedia("(max-width: 900px)")
  
  // Call listener function at run time
  myhead(y);
  
  // Attach listener function on state changes
  y.addEventListener("change", function () {
    myhead(y);
  });
  
  
  