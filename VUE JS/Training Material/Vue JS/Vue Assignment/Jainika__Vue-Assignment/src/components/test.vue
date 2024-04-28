<template>

<div>
    global <input type="checkbox" @change="globalhandler($event)" :checked="globalBox" ><br>
    c1 <input type="checkbox" @change="localhandler($event)" v-model="names" :checked="names" value="1" names="1"><br>
    c2 <input type="checkbox" @change="localhandler($event)" v-model="names" :checked="names"  value="2" id="2"><br>

</div>
</template>

<script>
export default {
    data(){
        return {
            selected : [],
            globalBox : '',
            names : [],
            cbids : ['1','2']
        }
    },
    watch : {
        names(){
            if(this.names.length != this.cbids.length){
                this.globalBox = false;
            }else{
                this.globalBox = true;
            }
        }
    },
   
    methods : {
       localhandler(e){
           console.log(this.names, e)
           if(e.target.checked){
               this.selected.push(e.target.id);
           }else{
               const index = this.selected.indexOf(e.target.id);
               this.selected.splice(index, 1);
        }
       },
       globalhandler(e){
           if(!e.target.checked){
               this.names = []
           }else{
               this.names = [...this.cbids]
           }
        }
    }
}











//     data(){
//         return{
//             globalBox : false,
//             localBox : false,
//             items : []
//         }
//     },
//     watch:{
//         items(){
//             if(this.items.length == 2){
//                 this.globalBox = true;
//             }else{
//                 this.globalBox = false;
//             }
//         }
//     },
//     methods : {
//         globalhandler(event){
//               if(event.target.checked){
//                   this.globalBox = true;
//                   this.localBox = true;
//                   while(!this.items.length > 2){
//                       console.log('push ', this.items.length)
//                       this.items.push(true);
//                   }
                  
//               }else{
//                   this.globalBox = false;
//                   this.localBox = false;
//                   this.items = [];
//                  console.log('pop ', this.items.length)

// }
//         },
//         localhandler(event){
//             if(event.target.checked){
//                 this.items.push(true);
//                 console.log(this.items);
//             }else{
//                 this.items.pop();
//                 console.log(this.items)
//             }
//         }
//     }
</script>

<style scoped>
div{
    padding: 1rem;
}
</style>




