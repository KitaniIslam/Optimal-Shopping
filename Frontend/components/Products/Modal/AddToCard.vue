<template>
    <a-modal v-model="addToCardModal" title="Card Modal" @ok="handleOk" @cancel="cancel">
      <p>{{product}}</p>
    </a-modal>
</template>

<script>
export default {
    props: {
        product : {
            type: Object,
            default: {
                id: 0,
                title: 'something',
                price: 0
            }
        }
    },
    computed: {
      addToCardModal(){return this.$store.getters['card/getModalVisible']}
    },
    methods: {
        handleOk(){
            this.$notification.open({
                type:'success',
                message: 'Added successfully',
                description: ''
            });

            this.$store.commit('card/addToCard',{})
            this.$store.commit('card/hideModal');
        },
        cancel(){
            this.$store.commit('card/hideModal');
        }
    }
}
</script>