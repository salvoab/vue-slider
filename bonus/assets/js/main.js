//Ricreare lo slider di immagini ma questa volta con Vue
/*  BONUS 1
    Facciamo in modo che il nostro slider scorra automaticamente in avanti,
    e ogni 3 secondi visualizzi un'immagine differente.
    Tip: possiamo usare una lifecycle Hook per inserire un nostro script quando l'istanza Vue è stata caricata.
    BONUS 2
    cliccando sui pallini visualizzeremo l'immagine corrispondente
    BONUS 3
    cliccando sulle frecce della tastiera sinista e destra scorriamo tra le immagini
*/
let app = new Vue({
    el: '#root',
    data: {
        index: 0,
        srcImages: [
            'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
            'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
            'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
            'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
        ],
        descriptions: [
            'paesaggio numero 1',
            'paesaggio numero 2',
            'paesaggio numero 3',
            'paesaggio numero 4'
        ]
    },
    methods: {
        nextImage(){
            this.index++;
            if(this.index >= this.srcImages.length){
                this.index = 0;
            }
        },
        prevImage(){
            this.index--;
            if(this.index<0){
                this.index = this.srcImages.length - 1;
            }
        },
        setIndex(newIndex){
            this.index = newIndex;
        }
    },
    mounted(){
        setInterval(this.nextImage, 3000);
    }
});