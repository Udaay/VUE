let vm = Vue.createApp({
  data() {
    return {
       mode: 1,
       birds: ['Eagles', 'Piegeons', 'Parrots', 'Peacock', 'Doves'],
      
       people:[
         { name: 'Karna',age:34},
         { name: 'Ajay', age:43},
        {name: 'Sham',age:54},
        {name: 'Arjun',age:41,}
       ],

       myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  }
}).mount('#app');
