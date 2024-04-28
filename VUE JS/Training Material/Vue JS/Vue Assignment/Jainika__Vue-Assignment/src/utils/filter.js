import Vue from 'vue';

Vue.filter('checkNull', function (value) {
    if(!value){
        return '-'
    }else{
        return value;
    }
});

Vue.filter('dateTimeFormat', function(value, format) {
    let formattedDate = value;

    if(format == 'dateFormat'){
        const year = value.getFullYear();
        const month = value.getMonth() + 1;
        const date = value.getDate();
        formattedDate = `${date}-${month}-${year}`
      }
      else{
        const format = {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          };
        formattedDate = value.toLocaleString("en-US", format);
    }
    return formattedDate; 
    
      
})