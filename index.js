var cylinder= {
    v: 4,
    h: 7,
    volume:
     function(){
        return Math.PI * this.v * this.v * this.h;
    },
    surface: 
    function(){
    return 2 * Math.PI * this.v * this.h;
    }
};