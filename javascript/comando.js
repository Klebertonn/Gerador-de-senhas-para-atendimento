var  senha=1;
const arrayC1=[];
const arrayR1=[];
const arrayP1=[];

$(document).ready(function(){
   $("#comum").on('click',function(){
   	s1.innerHTML=("C-"+senha)
   senha++;
   	arrayC1.push(senha);


  });
 });
$(document).ready(function(){
   $("#rapido").on('click',function(){
      s1.innerHTML=("R-"+senha )
      senha++;
      arrayR1.push(senha);
  });
 });
$(document).ready(function(){
   $("#prioritario").on('click',function(){
      s1.innerHTML=("P-"+senha)
      senha++;
      arrayP1.push(senha);
  });
 });
   $(document).ready(function(){
   	$("#caixa1").on('click',function(){
   			if(arrayP1>[]){
   			p2.innerHTML=("P-"+arrayP1);
   	        arrayP1.shift(arrayP1);
   	    }else if(arrayR1>[]){
   	    	p2.innerHTML=("R-"+arrayR1);
   	    	arrayR1.shift(arrayR1);
   	    }else{
   	    	p2.innerHTML=("C-"+arrayC1);
   	    	arrayC1.shift(arrayC1);
   	    }
      })
   }) 
	  $(document).ready(function(){
   	$("#caixa2").on('click',function(){
   			if(arrayR1>[]){
   			p2.innerHTML=("R-"+arrayR1);
   	        arrayR1.shift(arrayR1);
   	    }else if(arrayP1>[]){
   	    	p2.innerHTML=("P-"+arrayP1);
   	    	arrayP1.shift(arrayP1);
   	    }else{
   	    	p2.innerHTML=("C-"+arrayC1);
   	    	arrayC1.shift(arrayC1);
   	    }
      })
   })
      $(document).ready(function(){
   	$("#caixa3").on('click',function(){
   			if(arrayR1>[]){
   			p2.innerHTML=("R-"+arrayR1);
   	        arrayR1.shift(arrayR1);
   	    }else if(arrayP1>[]){
   	    	p2.innerHTML=("P-"+arrayP1);
   	    	arrayP1.shift(arrayP1);
   	    }else{
   	    	p2.innerHTML=("C-"+arrayC1);
   	    	arrayC1.shift(arrayC1);
   	    }
      })
   })
      $(document).ready(function(){
   	$("#caixa4").on('click',function(){
   			if(arrayC1>[]){
   			p2.innerHTML=("C-"+arrayC1);
   	        arrayC1.shift(arrayC1);
   	    }else if(arrayP1>[]){
   	    	p2.innerHTML=("P-"+arrayP1);
   	    	arrayP1.shift(arrayP1);
   	    }else{
   	    	p2.innerHTML=("R-"+arrayR1);
   	    	arrayR1.shift(arrayR1);
   	    }
      })
   })	


		
