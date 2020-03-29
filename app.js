var content = new Vue({
    el: "#content",
    data: {
        name: "",
        repos: null 
    },
    methods: {
        getRepos: function () {
            console.log("取得" + this.name );
            axios
            .get(`https://api.github.com/users/${this.name}/repos`)
            .then(response => {this.repos = reponse.data})
        }
    }
});

