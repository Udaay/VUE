Vue.createApp({
  data(){
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      stylesCopied: false,
    }
  },

  methods:{
    reset(){
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = this.rotateZ = this.rotateX;
    },
    copyStyles(){
      setTimeout(()=>this.stylesCopied = false, 1000)
      navigator.clipboard.writeText(`transform: ${this.calcStyles.transform};`);
      this.stylesCopied = true;
    }
  },

  computed: {
    calcStyles(){
      return{
        transform: `
          perspective(${this.perspective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)` ,
        // transformStyle: 'preserve-3d',
        // perspective: `${this.perspective}px`
      }
    }
  }

}).mount('#app')