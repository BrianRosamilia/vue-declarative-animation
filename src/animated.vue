<template>
    <div class="animated-d">
        <slot></slot>
    </div>
</template>
<script>
    import velocity from 'velocity-animate';

    export default {
        data(){
            return {
                frames: [],
                frameCounter: 0,
                eventList: [],
                containerEventList: [],
                playFn(){}
            };
        },
        props: {
            initial: Object,
            autoPlay: { type: Boolean, default: true },
            continuationLoop: { type: Boolean, default: true }
        },
        methods: {
           play(frame){
               if(frame !== undefined){
                   this.frameCounter = frame;
               }
               Array.prototype.forEach.call(this.$el.children, this.playFn);
           },
           reset(){
               if (this.initial){
                   Object.entries(this.initial).map(i => {
                       const [key, val] = i;
                       Array.prototype.forEach.call(this.$el.children, el => el.style[key] = val);
                   });
               }
           }
        },
        mounted(){
            this.reset();
            let completedProps = {};
            this.$slots.default.filter(a => a.componentOptions && a.componentOptions.tag === 'animation').forEach(a => {
                const eventFn = () => {
                    Array.prototype.forEach.call(this.$el.children, el => {
                        if(a.componentInstance.$props.completed){
                            completedProps = { ...completedProps, ...a.componentInstance.$props.completed };
                        }
                        else{
                            velocity(el, a.componentInstance.$props.properties, {
                                delay: a.componentInstance.$props.delay,
                                duration: a.componentInstance.$props.duration,
                                loop: a.componentInstance.$props.loop,
                                easing: a.componentInstance.$props.easing
                            });
                        }
                        });
                    };

                const subAnimationFn = () => {
                    Array.prototype.forEach.call(this.$el.children, el => velocity(el, 'stop'));
                    return eventFn();
                };

                const rollAnimationFn = () => {
                    if(this.frames[this.frameCounter] === undefined) return;

                    this.frames[this.frameCounter]();
                    this.frameCounter++;
                    if(this.frameCounter > this.frames.length - 1 && this.continuationLoop){
                        this.frameCounter = 0;
                    }
                };

                this.frames.push(subAnimationFn);
                this.playFn = rollAnimationFn;

                if (this.autoPlay){
                    eventFn();
                }
            });

            //Call complete event for timed animations
            if(this.autoPlay){
                Object.entries(completedProps).map(i => {
                    const [key, val] = i;
                    Array.prototype.forEach.call(this.$el.children, el => velocity(el, { __: 0 }, { duration: 0, complete: () => el.style[key] = val }));
                });
            }
        }
    };
</script>
<style scoped>
.animated-d{
    display:inherit;
}
</style>