wishlist = new Vue({
    el: "#wishList",
    data: {
        wishList: [

        ]
    },
    methods: {
       
        
    },
})

app1 = new Vue({
    el: "#section1",
    data: {
        
    },
    methods:{
        wishList(message){
            var idx = wishlist.wishList.indexOf(message);
            if (idx > -1) {
                wishlist.wishList.splice(message);
            } else{
                wishlist.wishList.push(message);
            }
            
        }
    }
})

app2 = new Vue({
    el: "#section2",
    data: {
        
    },
    methods:{
        wishList(message){
            var idx = wishlist.wishList.indexOf(message);
            if (idx > -1) {
                wishlist.wishList.splice(message);
            } else{
                wishlist.wishList.push(message);
            }
        }
    }
})

app3 = new Vue({
    el: "#section3",
    data: {
        
    },
    methods:{
        wishList(message){
            var idx = wishlist.wishList.indexOf(message);
            if (idx > -1) {
                wishlist.wishList.splice(message);
            } else{
                wishlist.wishList.push(message);
            }
        }
    }
})

app4 = new Vue({
    el: "#section4",
    data: {
        
    },
    methods:{
        wishList(message){
            var idx = wishlist.wishList.indexOf(message);
            if (idx > -1) {
                wishlist.wishList.splice(message);
            } else{
                wishlist.wishList.push(message);
            }
        }
    }
})

app5 = new Vue({
    el: "#section5",
    data: {
        
    },
    methods:{
        wishList(message){
            var idx = wishlist.wishList.indexOf(message);
            if (idx > -1) {
                wishlist.wishList.splice(message);
            } else{
                wishlist.wishList.push(message);
            }
        }
    }
})