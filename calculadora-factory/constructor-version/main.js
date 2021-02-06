function Calculadora(display, btnClear){

    this.display = display;
    this.btnClear = btnClear;

    this.start = function(){
        this.clickButtons();
        this.pressEnter();
    };

    this.clickButtons = function(){
        document.addEventListener('click', event => {
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

        this.btnToDisplay = function(value){
            this.display.value += value;
        };

        this.clearDisplay = function(){
            this.display.value = '';
        };

        this.deleteOne = function(){
            this.display.value = this.display.value.slice(0, -1)
        };

        this.pressEnter = function(){
            this.display.addEventListener('keyup', event => {
                if(event.keyCode === 13){
                    this.resolveCount();
                };
            });
        };

        this.resolveCount = function(){
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
        };
        
    };

};

const calculadora = new Calculadora(document.querySelector('.display'), document.querySelector('.btn-clear'));

calculadora.start();