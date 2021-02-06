function criaCalculadora(){
    return {

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        
        start(){
            this.clickButtons();
            this.pressEnter();
        },
        
        clickButtons(){
            document.addEventListener('click', (event)=>{
                const element = event.target;
                
                if(element.classList.contains('btn-num')){
                    this.btnToDisplay(element.innerHTML);
                };
                
                if(element.classList.contains('btn-clear')){
                    this.clearDisplay();
                };
                
                if(element.classList.contains('btn-del')){
                    this.deleteOne();
                };

                if(element.classList.contains('btn-eq')){
                    this.resolveCount();
                };
            });
        },
        
        clearDisplay(){
            this.display.value = '';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1)
        },

        btnToDisplay(value){
            this.display.value += value
        },

        pressEnter(){

            this.display.addEventListener('keyup', (event)=>{
                if(event.keyCode === 13){
                    this.resolveCount();
                };
            });

        },

        resolveCount(){
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    alert('conta invalida!'); 
                    return; 
                };

                this.display.value = conta;
            } catch (error) {
                alert('conta invalida!');
                return;  
            }
        },

    };
};

const calculadora = criaCalculadora();

calculadora.start();

