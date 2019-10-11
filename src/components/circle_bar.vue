<template>
    <svg class="stat-circle" viewBox="1.6 1.6 16.8 16.8">
        <circle class="bg" cx="10" cy="10" r="8" />
        <circle class="progress" cx="10" cy="10" r="8" />
        <text x="60%" y="50%">{{from_num.toFixed(0)}}</text>
    </svg>
</template>

<script>
export default {
    name: "Circle_bar",
    props: ["from_", "to_"],

    data: function() {
        return {
            from_num: 0
        };
    },

    mounted: function() {
        var circle = this.$el.querySelectorAll(".progress");
        var off = (this.from_ / this.to_) * 50;
        var delay_time = (this.from_ / this.to_) * 5;
        TweenLite.to(this.$data, delay_time, { from_num: this.from_ });
        TweenMax.to(circle, delay_time, {
            strokeDashoffset: -50 - off
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$color-bar-text: red;
$cirlce-size: 100px;

.stat-circle {
    width: $cirlce-size;
    transform: rotate(-90deg);

    circle.bg {
        fill: none;
        stroke: grey;
        stroke-width: 0.8;
    }
    circle.progress {
        fill: none;
        stroke: $color-bar-text;
        stroke-width: 0.8;
        stroke-dasharray: 50 50;
        stroke-dashoffset: -50;
        stroke-linecap: square;
    }
    text {
        font-size: 5px;
        font-weight: 600;
        text-anchor: middle;
        fill: $color-bar-text;
        transform-origin: 50% 50%;
        transform: rotate(90deg);
    }
}
</style>
