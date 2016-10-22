var appWatch = new Vue({
    el: '#app-watch',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        question: function (newQuestion) {
            this.answer = 'Waiting for you to stop typing...';
            this.getAnswer();
        }
    },
    methods: {
        getAnswer: _.debounce(
            function () {
                var vm = this;

                if (this.question.indexOf('?') === -1) {
                    vm.answer = 'Questions usually contain a question mark. ;-)';
                    return;
                }
                vm.answer = 'Thinking...';

                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer);
                    }).catch(function (err) {
                        vm.answer = 'Error! Could not reach the API. ' + err;
                    });
            },
            500
        )
    }
});
