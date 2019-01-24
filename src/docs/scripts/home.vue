<template>
    <div class="home">
        <animated :initial="{ opacity: 0 }">
            <animation v-bind:properties="{ opacity: 1 }" v-bind:duration="1500"></animation>
            <h2>Vue.js Declarative Animation</h2>
        </animated>
        <a target="_blank" href="https://www.npmjs.com/package/vue-declarative-animation">
            <p class="code snippet install">npm install vue-declarative-animation</p>
        </a>
        <h3>Example</h3>
        <hr>
        <div class="example">
                <animated class="center" :initial="{ opacity: 0 }">
                    <animation :properties="{ fontSize: '50px', opacity:1 }" :duration="600"></animation>
                    <animation :properties="{ opacity:0 }" :duration="600" :delay="3000"></animation>
                    <animation :properties="{ fontSize: '0px' }" :duration="600"></animation>
                    <p>Simple Vue.js animations</p>
                </animated>
                <animated class="center" :initial="{ opacity: 0 }">
                    <animation :properties="{ fontSize: '90px', opacity:1 }" :duration="600"></animation>
                    <img class="vue-logo" src="/images/vue_logo.svg">
                </animated>
            <prism-editor :code="codeIntro" language="vue"></prism-editor>
        </div>
        <h3>Simple Example</h3>
        <hr>
        <div class="example center">
            <h3>Scroll Down for More Examples</h3>
            <animated>
                <animation :properties="{ translateY:'10px' }" :duration="500" :loop="true" :easing="'easeInBack'"></animation>
                <img class="icon" src="/images/down.svg">
            </animated>
            <prism-editor :code="codeBounce" language="vue"></prism-editor>
        </div>

        <h3>Reveal Example (compatible with v-if)</h3>
        <hr>
        <div class="example">
            <button class="button pointer example-btn info" @click="showAnim = !showAnim">Toggle Animation</button>
            <div v-if="showAnim" class="center-text">
                <animated :initial="{ backgroundColor: '#35495e', height: '20px', width:'0%' }">
                    <animation :properties="{ width:'100%' }" :duration="1000"></animation>
                    <animation :properties="{ opacity:'0' }" :duration="1000"></animation>
                    <animation :completed="{ display: 'none' }"></animation>
                    <div></div>
                </animated>
                <animated :initial="{ opacity: 0 }">
                    <animation :properties="{ opacity: 1, fontSize:'84px', color:'#42b883' }" :delay="2000" :duration="500" :loop="true"></animation>
                    <animation :properties="{ color:'#35495e' }" :delay="2000" :duration="500" :loop="true"></animation>
                    <p>💗 Vue.js</p>
                </animated>
            </div>

            <prism-editor :code="codeReveal" language="vue"></prism-editor>
        </div>

        <h3>List Example</h3>
        <hr>
        <button class="button example-btn info" @click="cards += 1">Add Card</button>
        <div class="example">
            <nav class="navbar primary flex between cross-center">
                <div>
                    <a class="navbar-item pointer">Home</a>
                    <a class="navbar-item pointer">Shop</a>
                    <a class="navbar-item is-active pointer">Users</a>
                </div>
            </nav>

                <div class="flex flex-wrap">
                    <div v-for="card in cards" :key="card">
                        <animated :initial="{ opacity: '0', marginLeft:'50px', width:'100%' }">
                            <animation :properties="{  opacity: '1', marginLeft: 0, width:'100%' }" :duration="400"></animation>
                            <div class="card">
                                <div class="card-header image">
                                    <img src="https://www.chaarat.com/wp-content/uploads/2017/08/placeholder-user.png" alt="image">
                                </div>
                                <div class="card-body">Jeff</div>
                                <div class="card-footer">Kaplan</div>
                            </div>
                        </animated>
                    </div>
                </div>
            <prism-editor :code="forExample" language="vue"></prism-editor>
        </div>

        <h3>Animations as a Value / Timeline</h3>
        <hr>
        <div class="example">
            <p>You can play animations frame by frame and from anywhere in your code. Animations are cycled through in a loop every time <pre class="code snippet">play</pre> is called
            </p>
            <p>Try Clicking these buttons</p>

            <p>This button cycles through the animations forever</p>

            <button class="button inverted info" @click="$refs.clickAnim.play()">Cycle Colors</button>
            <animated ref="clickAnim" :auto-play="false">
                <animation :properties="{ backgroundColor:'#FF0000' }" :duration="200"></animation>
                <animation :properties="{ backgroundColor:'#00FF00' }" :duration="200"></animation>
                <animation :properties="{ backgroundColor:'#0000FF' }" :duration="200"></animation>
                <div class="swatch"></div>
            </animated>

            <prism-editor :code="codeContinuation" language="vue"></prism-editor>

            <br/>
            <br/>
            <p>This button stops animating after the final animation (<pre class="code snippet">continuation-loop</pre>
            to false)</p>
            <button @click="$refs.clickAnim2.play()" class="button inverted info">Cycle Colors</button>
            <animated ref="clickAnim2" :auto-play="false" :continuation-loop="false">
                <animation :properties="{ backgroundColor:'#FF0000' }" :duration="200"></animation>
                <animation :properties="{ backgroundColor:'#00FF00' }" :duration="200"></animation>
                <animation :properties="{ backgroundColor:'#0000FF' }" :duration="200"></animation>
                <div class="swatch"></div>
            </animated>

            <prism-editor :code="codeContinuationNoLoop" language="vue"></prism-editor>

            <p>To do event based animations, you need to use <pre class="code snippet">$refs</pre> at the moment, but anything involving <pre class="code snippet">v-for</pre> or <pre class="code snippet">v-if</pre> shouldn't require programmatic animations 🎉</p>
        </div>
    </div>
</template>
<script>
    import animated from '../../animated.vue';
    import animation from '../../animation.vue';
    import PrismEditor from 'vue-prism-editor';
    import 'prismjs';
    import 'prismjs/themes/prism.css';

    export default {
        name: 'home',
        data(){
            return {
                showAnim: false,
                showMenu: false,
                cards: 4,
                codeIntro: `<animated class="center" :initial="{ opacity: 0 }">
    <animation :properties="{ fontSize: '50px', opacity:1 }" :duration="600"></animation>
    <animation :properties="{ opacity:0 }" :duration="600" :delay="3000"></animation>
    <animation :properties="{ fontSize: '0px' }" :duration="600"></animation>
    <p>Simple Vue.js animations</p>
</animated>
<animated class="center" :initial="{ opacity: 0 }">
    <animation :properties="{ fontSize: '90px', opacity:1 }" :duration="600"></animation>
    <img class="vue-logo" src="/images/vue_logo.svg">
</animated>`,
                codeBounce: `<animated>
    <animation :properties="{ translateY:'10px' }" :duration="500" :loop="true" :easing="'easeInBack'"></animation>
    <img class="icon" src="/images/down.svg">
</animated>`,
                codeReveal: `<button class="button pointer example-btn info" @click="showAnim = !showAnim">Toggle Animation</button>
<div v-if="showAnim" class="center-text">
    <animated :initial="{ backgroundColor: '#35495e', height: '20px', width:'0%' }">
        <animation :properties="{ width:'100%' }" :duration="1000"></animation>
        <animation :properties="{ opacity:'0' }" :duration="1000"></animation>
        <animation :completed="{ display: 'none' }"></animation>
        <div></div>
    </animated>
    <animated :initial="{ opacity: 0 }">
        <animation :properties="{ opacity: 1, fontSize:'84px', color:'#42b883' }" :delay="2000" :duration="500" :loop="true"></animation>
        <animation :properties="{ color:'#35495e' }" :delay="2000" :duration="500" :loop="true"></animation>
        <p>💗 Vue.js</p>
    </animated>
</div>`,
                forExample: `<div v-for="card in cards" :key="card">
    <animated :initial="{ opacity: '0', marginLeft:'50px', width:'100%' }">
        <animation :properties="{  opacity: '1', marginLeft: 0, width:'100%' }" :duration="400"></animation>
        <div class="card">
            <div class="card-header image">
                <img src="https://www.chaarat.com/wp-content/uploads/2017/08/placeholder-user.png" alt="image">
            </div>
            <div class="card-body">Jeff</div>
            <div class="card-footer">Kaplan</div>
        </div>
    </animated>
</div>`,
                codeContinuation: `<animated ref="clickAnim" :auto-play="false">
    <animation :properties="{ backgroundColor:'#FF0000' }" :duration="200"></animation>
    <animation :properties="{ backgroundColor:'#00FF00' }" :duration="200"></animation>
    <animation :properties="{ backgroundColor:'#0000FF' }" :duration="200"></animation>
    <div class="swatch"></div>
</animated>`,
                codeContinuationNoLoop: `<animated ref="clickAnim2" :auto-play="false" :continuation-loop="false">
    <animation :properties="{ backgroundColor:'#FF0000' }" :duration="200"></animation>
    <animation :properties="{ backgroundColor:'#00FF00' }" :duration="200"></animation>
    <animation :properties="{ backgroundColor:'#0000FF' }" :duration="200"></animation>
    <div class="swatch"></div>
</animated>`
            };
        },
        components: {
            animated,
            animation,
            PrismEditor
        },
        methods: {
        }
    };
</script>
<style>
    body {
        padding-top: 2em;
        perspective: 800px;
        background-image: linear-gradient(45deg, RGBA(232,149,12, .9), RGBA(132,222,243, .9));
    }

    h2 {
        margin-bottom: 1em;
    }

    .install{
        margin-bottom:3rem;
    }

    .home {
        background-color: white;
        padding-top: 1rem;
        padding-left: 3rem;
        padding-right: 3rem;
        padding-bottom: 3rem;
        margin-bottom:3rem;
        border-radius: 5px;
    }

    .center {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    .card {
        margin-top: 1.5rem;
        max-width: 200px;
        margin-right: 2rem;
    }

    .code {
        display: inline-block;
        overflow-x: unset;
    }

    .inverted {
        color: white;
    }

    .example-btn {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .example {
        margin-top: .5rem;
        margin-bottom: 3rem;
    }

    .example p {
        margin-bottom: 2rem;
    }

    .swatch{
        background-color:#0000FF;
        margin-left:2rem;
        margin-top:1rem;
        max-width:150px;
        height:150px;
    }

    .prism-editor-wrapper {
        margin-top: 1.7rem;
    }

    .toggle {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .center-text {
        text-align: center;
    }

    .icon {
        max-width: 32px;
    }
</style>