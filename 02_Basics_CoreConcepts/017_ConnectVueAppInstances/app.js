const app = Vue.createApp({
    // data function as property
    data(){
        // data returns always an object
        return {
            courseGoal: "Vue!",
            courseGoalA: "Finish the course and learn Vue!",
            courseGoalB: "Learn more about Vue and Javascript!",
            courseGoalWithHTML: "<h2 style='color: white'>I'm a Goal in heading 2</h2>",
            vueLink: "https://vuejs.org/",
        }
    },
    // methods object
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');