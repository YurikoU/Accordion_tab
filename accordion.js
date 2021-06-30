(() => {

    class Accordion {

        constructor(obj) {
            //Declare the variables
            const $doc = document;
            const $tagContainer = $doc.getElementById(obj.containerName);
            const $tag = $tagContainer.getElementsByTagName(obj.tagName);
            const tagLen = $tag.length;

            //clickHandler() works, once any DOM element is clicked
            let index = 0;
            while (index < tagLen) {
                $tag[index].addEventListener('click', (e) => this.clickHandler(e));
                index++;
            }
        };


        //Movement when a DOM element is clicked
        clickHandler = (e) => {
            //Prevent the anchor link
            e.preventDefault();

            //Get the clicked DOM element
            const target = e.target;

            //Get the DOM element next to the DOM element
            const targetContent = target.nextElementSibling;

            //If the DOM element is visible, make it NOT visible. Otherwise, make it visible.
            if (targetContent.style.display === 'none') {
                targetContent.style.display = 'block';
            } else {
                targetContent.style.display = 'none';
            }
        };
    } //End of the class, Accordion{}



    //Instantiate Accordion, and name it
    const accordion1 = new Accordion({
        containerName: 'js-faq',
        tagName: 'p'
    });

    //Instantiate Accordion, and name it
    const accordion2 = new Accordion({
        containerName: 'js-accordion',
        tagName: 'a'
    });

    //Instantiate Accordion, and name it
    const accordionMini = new Accordion({
        containerName: 'js-accordion-mini',
        tagName: 'dt'
    });


})();