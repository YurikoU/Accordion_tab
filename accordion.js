(() => {

    //Declare the class
    class Accordion {

        constructor(obj){

            console.log(obj.hookName, obj.tagName);

            //Declare the variables
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
            const triggerLen = $trigger.length;
        
            //clickHandler() works, once any DOM element is clicked
            let index = 0;
            while (index < triggerLen) {
                $trigger[index].addEventListener
                ('click', (e) => this.clickHandler(e));
                index++;
            }
        }
        


        //Movement when a DOM element is clicked
        clickHandler(e) {
          //Prevent the anchor link
          e.preventDefault();

          //Get the clicked DOM element
          const $target = e.currentTarget;

          //Get the DOM element next to the DOM element
          const $content = $target.nextElementSibling;

          //If the DOM element is visible, make it NOT visible. Otherwise, make it visible.
          if ($content.style.display === 'block') {
              $content.style.display = 'none';
          } else {
              $content.style.display = 'block';
          }
        };
    }




    //Instantiate Accordion(), and name it
    const dummyAccordion1 = new Accordion({
        hookName: '#js-faq',
        tagName: 'p' 
    });


    //Instantiate Accordion(), and name it
    const dummyAccordion2 = new Accordion({
      hookName: '#js-accordion',
      tagName: 'a' 
    });


    //Instantiate Accordion(), and name it
    const miniAccordion = new Accordion({
      hookName: '#js-accordion-mini',
      tagName: 'dt' 
    });



    
})();