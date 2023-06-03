/** 
   * Fonction qui rend affiche du HTML dans le DOM
   * @param {domNode} domNode
   * @param {string} htmlElements
   * @param {string} typeOfRender
   * @return {Promise}
 */
export function render(domNode, htmlElements, typeOfRender = "innerHTML"){

    return new Promise((resolve)=>{
    
            // https://developer.mozilla.org/fr/docs/Web/API/Window/requestAnimationFrame

            requestAnimationFrame(()=>{

                    if(typeOfRender === "innerHTML"){

                        domNode.removeEventListener("click", noop());

                        function noop(){};

                        domNode.innerHTML = htmlElements;

                    }else{

                        domNode.insertAdjacentHTML("beforeend", htmlElements);

                    }


                    return resolve("noeud de DOM ajoute");

            }, domNode);

    });

}