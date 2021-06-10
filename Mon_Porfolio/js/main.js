document.addEventListener('DOMContentLoaded', function(){

    /* 
    Définition des variables
    */

        let btnPopup = document.getElementById('btnPopup');
        let overlay = document.getElementById('overlay');
        let btnClose = document.getElementById('btnClose')
        btnPopup.addEventListener('click',openMoadl);
        btnClose.addEventListener('click',closeModal);
        let myForm = document.querySelector('form');
        let formLabels = document.querySelectorAll('label span') 
        let myEmail = document.querySelector('form');
        let userEmail = document.querySelector('[type="email"]');
        let userSubject = document.querySelector('[type="text"]');
        let userCommentary = document.querySelector('textarea');

    //

    /* 
    Définition des méthodes (fonctions)
    */ 
           
        
       // Fonction pour affiche la popup en le rendant visible
        function openMoadl() {
            overlay.style.display='block';
        }

        //Fonction qui ferme la popup
        function closeModal() {
            overlay.style.display='none';
        }

         //Animation au scroll 

         ScrollReveal().reveal('.reveal', { delay: 500 });

        // Fonction formulaire

        myForm.addEventListener( 'submit', (event) => {

            // Bloquer le comportement naturel du formulaire
            event.preventDefault();
    
            // Définir une variable pour les erreur
            let formError = 0;      
    
            // Vérifier l'email
    
            if( userEmail.value.length > 4 ){
                console.log('OK');
    
            }
            else{
                // Affiche dans le label 5 caractères minimum
                labelEmail.textContent += ' : 5 caracteres minimum';
                
                // Incrémenter la variable formError de 1
                formError++;
            };
    
            // Vérifier le sujet
    
            if( userSubject.value.length > 4 ){
                console.log('OK');
    
            }
            else{
                // Affiche dans le label 5 caractères minimum
                labelSubject.textContent += ' : 5 caracteres minimum';
    
                // Incrémenter la variable formError de 1
                formError++;
            };
    
            // Vérifier le commentaire
            if( userCommentary.value.length > 1 ){
                console.log('OK');
    
            }
            else{
                // Ajouter un message d'erreur dans le label du dessus
                labelCommentary.textContent += ' : champs obligatoire';
                
                // Incrémenter la variable formError de 1
                formError++;
            };
    
             // S'il n'y a pas d'erreur, affiche " Message envoyé "
            if ( formError === 0){
            
                alert("message envoyé  ") ;
                myForm.reset();
            }
    
           });



});
//