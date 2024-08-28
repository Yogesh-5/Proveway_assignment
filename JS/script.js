let act = document.getElementById("act");
let act1 = document.getElementById("act1");
let disp = document.getElementById("dis");
let disp1 = document.getElementById("dis1");
let disp2 = document.getElementById("dis2");


let act2 = document.getElementById("act2");
let act3 = document.getElementById("act3");
let disp3 = document.getElementById("dis3");
let disp4 = document.getElementById("dis4");
let disp5 = document.getElementById("dis5");




let act25 = document.getElementById("act25");
let act35 = document.getElementById("act35");
let disp35 = document.getElementById("dis35");
let disp45 = document.getElementById("dis45");
let disp55 = document.getElementById("dis55");







function checking(){


    
        if(act1.checked === true){

        
            disp.style.display = 'flex';
        disp1.style.display = 'flex';
        disp2.style.display = 'flex';
        act.style.paddingBottom = '20px'; 
        act.style.background='#FFF9FA';
        act.style.border = '1px solid #FF6B82';



        disp3.style.display = 'none';
        disp4.style.display = 'none';
        disp5.style.display = 'none';
        act2.style.paddingBottom = '0px'; 
        act2.style.background='none';
        act2.style.border = 'none';



        disp35.style.display = 'none';
        disp45.style.display = 'none';
        disp55.style.display = 'none';
        act25.style.paddingBottom = '0px'; 
        act25.style.background='none';
        act25.style.border = 'none';
        
      

        
    

        }



    
        else if(act3.checked === true){
    
            
                disp3.style.display = 'flex';
            disp4.style.display = 'flex';
            disp5.style.display = 'flex';
            act2.style.paddingBottom = '20px'; 
            act2.style.background='#FFF9FA';
            act2.style.border = '1px solid #FF6B82';




            disp.style.display = 'none';
            disp1.style.display = 'none';
            disp2.style.display = 'none';
            act.style.paddingBottom = '0px'; 
            act.style.background='none';
            act.style.border = 'none';




            disp35.style.display = 'none';
            disp45.style.display = 'none';
            disp55.style.display = 'none';
            act25.style.paddingBottom = '0px'; 
            act25.style.background='none';
            act25.style.border = 'none';

          
          
                  }
            
    
   
    
        else if(act35.checked === true){
        
                
                    disp35.style.display = 'flex';
                disp45.style.display = 'flex';
                disp55.style.display = 'flex';
                act25.style.paddingBottom = '20px'; 
                act25.style.background='#FFF9FA';
                act25.style.border = '1px solid #FF6B82';



                disp.style.display = 'none';
                disp1.style.display = 'none';
                disp2.style.display = 'none';
                act.style.paddingBottom = '0px'; 
                act.style.background='none';
                act.style.border = 'none';


                disp3.style.display = 'none';
                disp4.style.display = 'none';
                disp5.style.display = 'none';
                act2.style.paddingBottom = '0px'; 
                act2.style.background='none';
                act2.style.border = 'none';
                
              
                
            
        
                }
                // else{
                //     act1.checked = true;
                //     return true;
                // }
        
              
                

    
            }

