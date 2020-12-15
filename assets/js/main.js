//Ricreare lo slider di immagini ma questa volta con Vue
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
        }
    }
});