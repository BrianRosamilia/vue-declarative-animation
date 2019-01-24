<script>
    export default{
        props: {
            properties: [Object, String],
            delay: Number,
            duration: Number,
            loop: [Number, Boolean],
            easing: { type: String, default: 'linear' },
            completed: Object
        },
        render(h){
            return h();
        }
    };
</script>