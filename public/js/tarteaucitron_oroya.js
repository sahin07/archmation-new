

waitForElementToDisplay("#tarteaucitronAlertBig",function(){
    let contTarte = document.querySelector('#tarteaucitronAlertBig')
    contTarte.classList.add('visible')
    let newContent = document.createElement('div')
    let newContent2 = document.createElement('div')

    newContent2.classList.add("sous_cookie")
    newContent.classList.add('cookie_sorgniard')
    newContent.parentNode
    let boutAccept = document.querySelector('#tarteaucitronPersonalize2')
    let boutRefuser = document.querySelector('#tarteaucitronAllDenied2')
    let boutPerso = document.querySelector('#tarteaucitronCloseAlert')
    let phraseCookie = document.querySelector('#tarteaucitronDisclaimerAlert')
    let sp1 = document.createElement('span')
    let sp2 = document.createElement('span')

    contTarte.append(newContent);
    newContent.append(sp1)
    contTarte.append(newContent2);
    newContent2.append(sp2)
    
    newContent.insertBefore(phraseCookie, sp1)
    newContent2.insertBefore(boutAccept, sp2)
    newContent2.insertBefore(boutRefuser, sp2)
    newContent2.insertBefore(boutPerso, sp2)
    newContent.insertBefore(newContent2, sp1)

    sp1.remove()
    sp2.remove()

    
    
},1000,9000);

function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();

  
}

