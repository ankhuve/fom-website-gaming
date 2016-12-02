<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="container">
                    <div class="modal-hero col-xs-12 col-sm-6 col-sm-offset-3" :style="content.image"></div>
                    <div class="modal-container col-xs-12" v-bind:class="{ back : content.showBack }">
                        <div class="flip-front">
                            <div class="modal-close" @click="$emit('close')">
                                <span></span>
                                <span></span>
                            </div>

                            <div class="modal-header">
                                <slot name="header">
                                    <h2>
                                        {{ content.title }}
                                    </h2>
                                </slot>
                            </div>

                            <div class="modal-body">
                                <slot name="body">
                                    <p v-for="paragraph in content.body">
                                        {{ paragraph }}
                                    </p>
                                </slot>
                            </div>

                            <div class="modal-footer">
                                <slot name="footer">
                                    <div class="modal-flip" @click="$emit('flip')">
                                        <button class="btn btn-primary btn-invert">Contributors</button>
                                    </div>
                                    <ul class="list-inline">
                                        <li v-for="tag in content.tags">
                                            {{ tag }}
                                        </li>
                                    </ul>
                                </slot>
                            </div>
                        </div>
                        <div class="flip-back">
                            <div class="modal-close" @click="$emit('close')">
                                <span></span>
                                <span></span>
                            </div>

                            <div class="modal-header">
                                <slot name="header">
                                    <h2>
                                        Contributors
                                    </h2>
                                </slot>
                            </div>

                            <div class="modal-body">
                                <slot name="body">
                                    <div v-for="person in content.contributors" class="col-md-6 col-xs-12 contributor">
                                        <h5>
                                            {{ person }}
                                        </h5>
                                    </div>
                                </slot>
                            </div>

                            <div class="modal-footer">
                                <slot name="footer">
                                    <div class="modal-flip" @click="$emit('flip')">
                                        <button class="btn btn-primary btn-invert">Description</button>
                                    </div>
                                    <ul class="list-inline">
                                        <li v-for="tag in content.tags">
                                            {{ tag }}
                                        </li>
                                    </ul>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['content'],
        data () {
            return {}
        },
    }
</script>