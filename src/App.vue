<template>
    <div id="app">

        <Circle_bar
               from_="64" 
               to_="256 "
        />
        
        <Circle_bar
               from_="128" 
               to_="256"
        />

      <Circle_bar
               from_="256" 
               to_="256"
        />

    </div>
</template>

<script>
import Circle_bar from "@/components/circle_bar";

export default {
    name: "app",
    components: {
        Circle_bar
    }
};
</script>

<style lang="scss">
$color-bg: #212f3d;

body {
    padding: 50px;
    background: $color-bg;
}
</style>
