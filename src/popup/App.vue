<template>
    <div id="app">
        <button @click ="alertAllData">Click to Alert Data from Store and Chrome Storage</button>
        <p>Data from Chrome Storage: {{message}}</p>
        <p>Data from Store: {{this.$store.state.title}}</p>
    </div>
</template>

<script>
export default {
        data() {
            return {
                message: 'hello from app',
                mainKey: 'title'
            }
        },
        methods: {
            alertAllData: function () {
                let key = this.mainKey;
                chrome.storage.sync.get({key}, (res) => {
                    alert("Data from Store: " + this.$store.state.title + "\nData from Storage: " + res.key);
                });
            }
        },
        created(){
            let key = this.mainKey;
            chrome.storage.sync.get({key}, (res) => {
                this.message = res.key;
                this.$store.dispatch('updateTitle', res.key);
            });
        }
};
</script>

<style>
html {
  width: 340px;
  height: 130px;
}
</style>