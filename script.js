const input = document.querySelector('.input')
        const btn = document.querySelector('.btn')
        const p = document.querySelector('.pp')


        class RollDie {
              constructor() {
                this.input = 6 
            }
            
        
            roll() {
               this.input = Number(input.value)
               return Math.floor(Math.random() * this.input) + 1;
            } 

            text() {
                p.textContent = this.roll()
            }
        }

        const c = new RollDie()

       btn.addEventListener('click', () => {
        c.text()
       })