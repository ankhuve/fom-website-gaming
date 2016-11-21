<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="container">
                    <div class="modal-hero col-xs-12 col-md-6 col-md-offset-3" :style="content.image"></div>
                    <div class="modal-container col-xs-12">
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
    </transition>
</template>

<script>
    export default {
        props: ['content'],
        data () {
            return {}
        }
    }
</script>