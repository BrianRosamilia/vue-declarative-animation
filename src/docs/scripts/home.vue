<template>
    <div class="home">
        <animated :initial="{ opacity: 0 }">
            <animation v-bind:properties="{ opacity: 1 }" v-bind:duration="1500"></animation>
            <h2>Vue.js Declarative Animation</h2>
        </animated>
        <a target="_blank" href="https://www.npmjs.com/package/vue-declarative-animation">
            <p class="code snippet install">npm install vue-declarative-animation</p>
        </a>
        <br/>
        <p class="code snippet install">import { animated, animation } from 'vue-declarative-animation';</p>
        <br/>
        <p>
            An experiment at a fully declarative animation library in Vue.js.  Implemented as a template-based wrapper around <a target="_blank" href="http://velocityjs.org/">Velocity.js</a>
        </p>
        <br/>
        <br/>
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
                    <img class="vue-logo" src="/images/vue_logo.png">
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

        <h3>Component API Props</h3>
        <hr>
        <div class="example">
            <h4 class="code h3 snippet">Animated</h4>
            <div class="api-component-doc">
                <p class="code snippet">:initial (Object)</p><p class="indent">Similar to binding <span class="code snippet">style</span>, but it applies this styling to all children and properties can be reset back to initial by calling <span class="code snippet">reset()</span></p>
                <p class="code snippet">:continuation-loop (Boolean)</p><p class="indent">Whether or not the animations contained in <span class="code snippet">Animated</span> should loop</p>
                <p class="code snippet">:auto-play (Boolean)</p><p class="indent">Whether or not the animations contained in <span class="code snippet">Animated</span> should play automatically on load</p>
            </div>
            <h4 class="code h3 snippet">Animation</h4>
            <div class="api-component-doc">
                <p class="code snippet">:properties (Object | String)</p><p class="indent">An Object as a map of styles (or a String of styles, <span class="code snippet">;</span> separated) that declares the properties to animate</p>
                <p class="code snippet">:delay (Number)</p><p class="indent">Millisecond delay of the animation</p>
                <p class="code snippet">:duration (Number)</p><p class="indent">Millisecond length of the animation</p>
                <p class="code snippet">:loop (Number | Boolean)</p><p class="indent">If a number, the number of times to loop. If a boolean, whether or not to loop.  Default is false.</p>
                <p class="code snippet">:easing (String)</p><p class="indent">A Velocity.js easing function.  <a href="https://easings.net/">List of options here</a></p>
                <p class="code snippet">:completed (Object)</p><p class="indent">An Object as a map of styles to be set on completion</p>
            </div>
        </div>
        <div class="center-text fs-italic shoutout">
            <p>Shout out to the Sandbox CSS / Sass framework that powers this documentation. <a target="_blank" href="https://dlcnine.github.io/sandbox">Check it out here</a></p>
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
    <img class="vue-logo" src="/images/vue_logo.png">
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
        font-size:1.2em;
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

    .api-component-doc{
        margin-top:2rem;
        margin-left:2rem;
        margin-bottom:1rem;
    }

    .huge-3{
        font-size:4.2rem;
    }

    .indent{
        margin-left:2em;
    }

    .shoutout{
        margin-top:5rem;
    }
</style>