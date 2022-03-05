const vm =  Vue.createApp({
data(){
  return {
    firstName: 'Uday',
    middleName: '',
    lastName: 'Singh',
    url: 'https://google.com',
    raw_url: '<p> <a href="https://google.com" target="_blank">Google: Link created with Raw Html</a> </p>',
    age: 24,
    date1: undefined,
  }
},
methods:{
  // fullName() { 
  //   return `${this.firstName} ${this.middleName} ${this.lastName}`
  // },
  increment(){
    this.age++;
  },
  updateLastName(msg , e){
    // e.preventDefault(); // we have use Event Modifier instead of this line
    this.lastName = e.target.value;
    console.log('MSG', msg);
  },
  updateMiddleName(e){
    this.middleName = e.target.value;
  },
  now(){
    this.date1 = Date.now();
    return this.date1;
  }
},
computed:{
  fullName() { 
    console.log('Fullname');
    return `${this.firstName} ${this.middleName} ${this.lastName}`
  },
  
},
watch: {
  age(oldVal, newVal){
    console.log(oldVal, newVal);
  }
}
}).mount('#app');

setTimeout(()=> {
  vm.firstName = 'Aditya' // this one is using proxy
  vm.$data.lastName = 'Singh'
}, 2000)

/** Vue.createApp({
data(){
  return {
    firstName: 'Goku',
    lastName: 'Vegeta'
  }
}
}).mount('#app2') **/