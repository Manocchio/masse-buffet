




//Função com ENTER//



$('.carousel').carousel({
  interval: false
})






function campoSelect(val){
    document.getElementById("precoPessoa").placeholder = val;
    
    
}




$(document).on('keydown',function(event){
    if(event.keyCode == 13){
        var sel = document.getElementById("precoPessoa").value;
        sel = parseFloat(sel);
        
        var quantidade = document.getElementById("quantidadeItem").value;
        var select = document.querySelector('select');
        var option = select.children[select.selectedIndex];
        var texto = option.textContent;
        
        
        
    
    //Apagar dados do input//
    
     document.getElementById("sel").value="";
     document.getElementById("precoPessoa").value="";
     document.getElementById("quantidadeItem").value="";
        
        
    
    //Criação de Tabela//
    
        
        
        
    if(option.value == ""){
        alert('Selecione um tipo antes de prosseguir!')
    }    
    
    else if(quantidade == 0){
        quantidadeItem.classList.add("invalida");
        alert('O campo "Quantidade" está vazio!');
    }
    
    else{
        
       
        quantidadeItem.classList.remove("invalida");
        var i;
        var table = document.querySelector("tbody");
        var newTr = document.createElement("tr"); //novo tr//
        var itemTd = document.createElement("td");
        var precoTd = document.createElement("td");
        var quantidadeTd = document.createElement("td");
        var subtotalTd = document.createElement("td");
        


        newTr.appendChild(itemTd);
        newTr.appendChild(precoTd);
        newTr.appendChild(quantidadeTd);
        newTr.appendChild(subtotalTd);

        table.appendChild(newTr);
        
       
        
      

        

        //Cálculo de subtotal//

        
        var preco = document.getElementById('precoPessoa').placeholder;
        preco = parseFloat(preco);
        itemTd.innerHTML = texto; 
        precoTd.innerHTML ="R$ " +document.getElementById('precoPessoa').placeholder;
        quantidadeTd.innerHTML = parseInt(quantidade);
        
        var subtotal = parseFloat(preco)*parseFloat(quantidade);

        subtotalTd.innerHTML = "R$ " +subtotal.toFixed(2);
        
        
        
        
        
        console.log(texto);


        //Apresentar valor no td//
     
        
        
    }
        
    }
});






//Função no botão//


function addItem() {
    var sel = document.getElementById("precoPessoa").value;
        sel = parseFloat(sel);
        
        var quantidade = document.getElementById("quantidadeItem").value;
        var select = document.querySelector('select');
        var option = select.children[select.selectedIndex];
        var texto = option.textContent;
        
        
        
    
    //Apagar dados do input//
    
     document.getElementById("sel").value="";
     document.getElementById("precoPessoa").value="";
     document.getElementById("quantidadeItem").value="";
        
        
    
    //Criação de Tabela//
    
        
        
        
    if(option.value == ""){
        alert('Selecione um tipo antes de prosseguir!')
    }    
    
    else if(quantidade == 0){
        quantidadeItem.classList.add("invalida");
        alert('O campo "Quantidade" está vazio!');
    }
    
    else{
        
       
        quantidadeItem.classList.remove("invalida");
        var i;
        var table = document.querySelector("tbody");
        var newTr = document.createElement("tr"); //novo tr//
        var itemTd = document.createElement("td");
        var precoTd = document.createElement("td");
        var quantidadeTd = document.createElement("td");
        var subtotalTd = document.createElement("td");
        


        newTr.appendChild(itemTd);
        newTr.appendChild(precoTd);
        newTr.appendChild(quantidadeTd);
        newTr.appendChild(subtotalTd);

        table.appendChild(newTr);
        
       
        
      

        

        //Cálculo de subtotal//

        
        var preco = document.getElementById('precoPessoa').placeholder;
        preco = parseFloat(preco);
        itemTd.innerHTML = texto; 
        precoTd.innerHTML ="R$ " +document.getElementById('precoPessoa').placeholder;
        quantidadeTd.innerHTML = parseInt(quantidade);
        
        var subtotal = parseFloat(preco)*parseFloat(quantidade);

        subtotalTd.innerHTML = "R$ " +subtotal.toFixed(2);
        
        
        
        
        
        console.log(texto);


        
    }
     
            
    
    
    
    
    
    
        
        
        
     
    
    
    
    
    
    
    
}


